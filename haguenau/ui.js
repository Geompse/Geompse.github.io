import * as THREE from './three.module.js';
import { FontLoader } from './FontLoader.js';
import { TextGeometry } from './TextGeometry.js';
import { ArcballControls } from './ArcballControls.js';

window.voir_sols = true;
window.voir_murs = false;
window.voir_pentes = false;
window.voir_plafonds = false;

const displayLength = function(length)
{
    const length_round = Math.round(length*1000);
    if(length_round < 10)
        return '0,00'+length_round+'m';
    if(length_round < 100)
        return '0,0'+length_round+'m';
    if(length_round < 1000)
        return '0,'+length_round+'m';
    const length_round_text = ''+length_round;
    return length_round_text.substr(0,length_round_text.length-3)+','+length_round_text.substr(-3,3)+'m';
};
const displayArea = function(area)
{
    const area_round = Math.round(area*100);
    if(area_round < 10)
        return '0,0'+area_round+'m&sup2;';
    if(area_round < 100)
        return '0,'+area_round+'m&sup2;';
    const area_round_text = ''+area_round;
    return area_round_text.substr(0,area_round_text.length-2)+','+area_round_text.substr(-2,2)+'m&sup2;';
};
const displayAngle = function(angle)
{
    const angle_round = Math.round(angle*10);
    if(angle_round < 10)
        return '0,'+angle_round+'&deg;';
    return (''+angle_round).substr(0,-1)+','+(''+angle_round).substr(-1,1)+'&deg;';
};

const SimpleRelativePathShape = function(...relativecoords)
{
    const shape = new THREE.Shape();
    shape._relativecoords = relativecoords;
    let x = 0;
    let y = 0;
    shape.moveTo(x,y);
    for(var c=0; c<relativecoords.length; c++)
    {
        var relativecoord = relativecoords[c];
        x += relativecoord[0];
        y += relativecoord[1];
        shape.lineTo(x,y);
    }
    return shape;
};
const SimpleRelativePathGeometry = function(...relativecoords)
{
    const shape = SimpleRelativePathShape(...relativecoords);
    return new THREE.ShapeGeometry(shape,100);
};
const RectangleShape = function(w,h,...holes)
{
    const shape = SimpleRelativePathShape([w,0],[0,h],[-w,0],[0,-h]);
    shape._holes = holes;
    for(let h=0; h<holes.length; h++)
    {
        const hole = holes[h];
        const path = new THREE.Path();
        path.moveTo(hole[0],hole[1]);
        path.lineTo(hole[0]+hole[2],hole[1]);
        path.lineTo(hole[0]+hole[2],hole[1]+hole[3]);
        path.lineTo(hole[0],hole[1]+hole[3]);
        path.lineTo(hole[0],hole[1]);
        shape.holes.push(path);
    }
    return shape;
};
const RectangleGeometry = function(w,h,...holes)
{
    const shape = RectangleShape(w,h,...holes);
    return new THREE.ShapeGeometry(shape,100);
};

const colors_sol = {color:0xCCCCCC,emissive:0x444444};
const colors_mur = {color:0xFFFFFF,emissive:0x888888};
const colors_plafond = {color:0x156289,emissive:0x072534};
const AddGeometryToGroup = function(type,group,geometry,transparent,noline)
{
    const colors = geometry['color']?geometry['color']:(group['color_'+type]?group['color_'+type]:(type=='mur'?colors_mur:(type=='plafond'?colors_plafond:colors_sol)));
    geometry.piece = group;

    if(!noline)
    {
        if(type == 'pente')
        {
            const lineMaterial = new THREE.MeshPhongMaterial({color:colors.color,emissive:colors.emissive,side:THREE.DoubleSide,flatShading:true,wireframe:true});
            group.add(new THREE.LineSegments(geometry,lineMaterial));
        }
        else
        {
            const lineMaterial = new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:0.5});
            group.add(new THREE.LineSegments(geometry,lineMaterial));
        }
    }

    if(!transparent)
    {
        if(group.image_sol && type == 'sol')
        {
            const texture = TexturePng(group.image_sol);
            const meshBasicMaterial = new THREE.MeshBasicMaterial({color:0xFFFFFF,map:texture,transparent:true,opacity:1});
            group.add(new THREE.Mesh(geometry,meshBasicMaterial));
        }
        else
        {
            const meshMaterial = new THREE.MeshPhongMaterial({color:colors.color,emissive:colors.emissive,side:THREE.DoubleSide,flatShading:true});
            group.add(new THREE.Mesh(geometry,meshMaterial));
        }
    }
};
const AddMurToGroup = function(group,geometry)
{
    const colors = geometry['color']?geometry['color']:(group['color_mur']?group['color_mur']:colors_mur);
    geometry.piece = group;

    const meshMaterial = new THREE.MeshPhongMaterial({color:colors.color,emissive:colors.emissive,side:THREE.DoubleSide,flatShading:true});
    group.murs.add(new THREE.Mesh(geometry,meshMaterial));
};
const TexturePng = function(src)
{
    const img = new Image();
    img.src = src;
    const texture = new THREE.Texture(img);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    img.texture = texture;
    img.onload = function()
    {
        this.texture.needsUpdate = true;
        if(UI.animate)
            requestAnimationFrame(UI.animate);
    };
    return texture;
};

const initDessus = function(maison_sols_only)
{
    window.addEventListener('pointermove',onPointerMove);

    const span = document.createElement('span');
    span.style.background = '#000';
    span.style.color = '#FFF';
    span.style.position = 'absolute';
    span.style.top = '0px';
    span.style.left = '0px';
    document.body.appendChild(span);

    const canvas = document.createElement('canvas');
    canvas.style.display = 'inline-block';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const vh = document.body.clientHeight;
    const vw = document.body.clientWidth;

    const w = 20;
    const h = w/vw*vh;
    const camera = new THREE.OrthographicCamera(-w,w,h,-h,0.1,1000);

    const renderer = new THREE.WebGLRenderer({antialias:true,canvas:canvas});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(vw,vh);
    document.body.appendChild(renderer.domElement);

    const light1 = new THREE.PointLight(0xffffff,1,0);
    light1.position.set(0,200,0);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff,1,0);
    light2.position.set(100,200,100);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xffffff,1,0);
    light3.position.set(-100,-200,-100);
    scene.add(light3);

    scene.add(maison_sols_only);

    scene.translateZ(5.00);
    camera.position.z = 20.000;

    renderer.render(scene,camera);

    const raycaster = new THREE.Raycaster();

    UI.animate = initDessus_animate.bind(this,scene,camera,raycaster,renderer,span);
    requestAnimationFrame(UI.animate);
};
const initDessus_animated = [];
const initDessus_animate = function(scene,camera,raycaster,renderer,span)
{
    raycaster.setFromCamera(pointer,camera);
    const intersects = raycaster.intersectObjects(scene.children);
    const enabled = [];
    let textes = [];
    for(let i=0; i<intersects.length; i++)
    {
        enabled.push(intersects[i].object.material.color);
        if(!intersects[i].object.material.color._color)
            intersects[i].object.material.color._color = intersects[i].object.material.color.getHex();
        intersects[i].object.material.color.set(0xff0000);
        if(initDessus_animated.indexOf(intersects[i].object.material.color) == -1)
            initDessus_animated.push(intersects[i].object.material.color);
        let curves = intersects[i].object.geometry.parameters.shapes.curves;
        let w = 0;
        let ws = [];
        let h = 0;
        let hs = [];
        let os = [];
        let contour = [];
        for(let c=0; c<curves.length; c++)
        {
            let curve = curves[c];
            let vector = curve.v1.clone().sub(curve.v2);
            let distance = vector.length();
            let angle = vector.angle()*180/Math.PI;
            if(angle == 180)
            {
                w += distance;
                ws.push(displayLength(distance));
            }
            else if(angle == 90)
            {
                h += distance;
                hs.push(displayLength(distance));
            }
            else if(angle != 0 && angle != 270 && angle != 360)
                os.push(displayLength(distance)+'@'+displayAngle(angle));
            contour.push(curve.v1);
            contour.push(curve.v2);
        }
        let piece = intersects[i].object.geometry.piece;
        window.Z = intersects[i];
        let texte = [];
        texte.push(piece.nom);
        texte.push('largeur : '+displayLength(w)+(ws.length!=1?' ('+ws.join(' | ')+')':''));
        texte.push('hauteur : '+displayLength(h)+(hs.length!=1?' ('+hs.join(' | ')+')':''));
        if(os.length)
            texte.push('autres : ('+os.join(' | ')+')');
        texte.push('surface : '+displayArea(THREE.ShapeUtils.area(contour)));
        textes.push(texte.join(' ; '));
    }
    for(let c=0; c<initDessus_animated.length; c++)
        if(enabled.indexOf(initDessus_animated[c]) == -1)
            initDessus_animated[c].set(initDessus_animated[c]._color);

    span.innerHTML = textes.join('<br />');
    renderer.render(scene,camera);
};
const init3D = function(maison_3d,perspective)
{
    const canvas = document.createElement('canvas');
    canvas.style.display = 'inline-block';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const vh = document.body.clientHeight;
    const vw = document.body.clientWidth;

    let camera = null;
    if(perspective)
        camera = new THREE.PerspectiveCamera(75,vw/vh,0.1,1000);
    else
    {
        const w = 20;
        const h = w/vw*vh;
        camera = new THREE.OrthographicCamera(-w,w,h,-h,0.1,1000);
    }

    const renderer = new THREE.WebGLRenderer({antialias:true,canvas:canvas});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(vw,vh);
    document.body.appendChild(renderer.domElement);

    const light1 = new THREE.PointLight(0xffffff,1,0);
    light1.position.set(0,200,0);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff,1,0);
    light2.position.set(100,200,100);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xffffff,1,0);
    light3.position.set(-100,-200,-100);
    scene.add(light3);

    scene.add(maison_3d.clone());

    if(perspective)
    {
        scene.rotation.x = -Math.PI/4;
        scene.rotation.y = 0;
        scene.rotation.z = Math.PI/8;
    }
    scene.translateZ(5.00);
    camera.position.z = 20.000;
    
    UI.animate = renderer.render.bind(renderer,scene,camera);
    requestAnimationFrame(UI.animate);

    const controls = new ArcballControls(camera,renderer.domElement,scene);
    controls.addEventListener('change',UI.animate);
};
const initPieces = function(maison_murs_only,font)
{
    for(let e=0; e<maison_murs_only.children.length; e++)
    {
        let etage = maison_murs_only.children[e];
        for(let p=0; p<etage.children.length; p++)
        {
            let piece = etage.children[p];

            const pmur = 0.200;
            let wmurs = 0;
            let hmurs = 0;
            for(let m=0; m<piece.murs.children.length; m++)
            {
                let mur = piece.murs.children[m];
                if(!mur.geometry.boundingBox)
                    mur.geometry.computeBoundingBox();
                wmurs += mur.geometry.boundingBox.max.x-mur.geometry.boundingBox.min.x+pmur;
                hmurs = Math.max(hmurs,mur.geometry.boundingBox.max.y-mur.geometry.boundingBox.min.y);
            }
            wmurs -= pmur;
            hmurs = Math.max(hmurs,1);
            hmurs += 2*pmur;

            const canvas = document.createElement('canvas');
            canvas.style.display = 'inline-block';

            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000);

            const z = 50;
            const w = document.body.clientWidth/z/2;
            const h = hmurs/2;

            const light1 = new THREE.PointLight(0xffffff,1,0);
            light1.position.set(0,200,0);
            scene.add(light1);

            const light2 = new THREE.PointLight(0xffffff,1,0);
            light2.position.set(100,200,100);
            scene.add(light2);

            const light3 = new THREE.PointLight(0xffffff,1,0);
            light3.position.set(-100,-200,-100);
            scene.add(light3);

            let x = -w+pmur;

            const text = new TextGeometry(piece.nom,{
                font:font,
                size:0.3,
                height:0.3,
                curveSegments:12,
                bevelEnabled:false,
                bevelThickness:10,
                bevelSize:8,
                bevelOffset:0,
                bevelSegments:5
            });
            const materials = [
                new THREE.MeshPhongMaterial( { color: 0xccccff, emissive: 0x4444ff, flatShading: true } ), // front
                new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x4444ff } ) // side
            ];
            if(!text.boundingBox)
                text.computeBoundingBox();
            const textobj = new THREE.Mesh(text,materials);
            textobj.translateX(x);
            textobj.translateY(-(text.boundingBox.max.y-text.boundingBox.min.y)/2);
            scene.add(textobj);
            x += text.boundingBox.max.x-text.boundingBox.min.x+pmur;

            for(let m=0; m<piece.murs.children.length; m++)
            {
                let mur = piece.murs.children[m].clone();
                mur.translateX(x-mur.geometry.boundingBox.min.x);
                mur.translateY(-h+pmur);
                scene.add(mur);
                if(!mur.geometry.boundingBox)
                    mur.geometry.computeBoundingBox();
                x += mur.geometry.boundingBox.max.x-mur.geometry.boundingBox.min.x+pmur;
            }

            scene.translateZ(5.00);

            const renderer = new THREE.WebGLRenderer({antialias:true,canvas:canvas});
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(Math.max(document.body.clientWidth,(x+w)*z),hmurs*z);
            document.body.appendChild(renderer.domElement);

            const camera = new THREE.OrthographicCamera(-w,Math.max(w,x),h,-h,0.1,1000);
            camera.position.z = 20.000;

            renderer.render(scene,camera);
        }
    }
};

const onResize = function(event)
{
    document.location.reload();
};
window.addEventListener('resize',onResize);

const pointer = new THREE.Vector2(-1000,-1000);
const onPointerMove = function(event)
{
    const vh = document.body.clientHeight;
    const vw = document.body.clientWidth;

    const w = 20;
    const h = w/vw*vh;

    let x = event.clientX;
    x += document.body.scrollLeft;
    let y = event.clientY;
    y += document.body.scrollTop;
    if(x < 0 || x > vw || y < 0 || y > vh)
    {
        pointer.x = -1000;
        pointer.y = -1000;
        return;
    }
    pointer.x = (x/vw)*2-1;
    pointer.y = -(y/vh)*2+1;

    if(UI.animate)
        requestAnimationFrame(UI.animate);
};

const node_vue = document.getElementById('vue');
node_vue.value = localStorage.getItem('vue');
const changeVue = function(event)
{
    localStorage.setItem('vue',node_vue.value);
    document.location.reload();
};
node_vue.addEventListener('change',changeVue);

const node_etage = document.getElementById('etage');
node_etage.value = localStorage.getItem('etage');
const changeEtage = function(event)
{
    localStorage.setItem('etage',node_etage.value);
    document.location.reload();
};
node_etage.addEventListener('change',changeEtage);

const node_sols = document.getElementById('sols');
node_sols.value = localStorage.getItem('sols');
const changeSols = function(event)
{
    localStorage.setItem('sols',node_sols.value);
    document.location.reload();
};
node_sols.addEventListener('change',changeSols);

const node_murs = document.getElementById('murs');
node_murs.value = localStorage.getItem('murs');
const changeMurs = function(event)
{
    localStorage.setItem('murs',node_murs.value);
    document.location.reload();
};
node_murs.addEventListener('change',changeMurs);

const node_pentes = document.getElementById('pentes');
node_pentes.value = localStorage.getItem('pentes');
const changePentes = function(event)
{
    localStorage.setItem('pentes',node_pentes.value);
    document.location.reload();
};
node_pentes.addEventListener('change',changePentes);

const node_plafonds = document.getElementById('plafonds');
node_plafonds.value = localStorage.getItem('plafonds');
const changePlafonds = function(event)
{
    localStorage.setItem('plafonds',node_plafonds.value);
    document.location.reload();
};
node_plafonds.addEventListener('change',changePlafonds);

class UI
{
    static run(maison_generator)
    {
        const loader = new FontLoader();
        loader.load('./droid_serif_bold.typeface.json',UI.loader_callback.bind(this,maison_generator));
    }
    static loader_callback(maison_generator,font)
    {
        if(node_sols.value == '')
            node_sols.value = 'visible';
        window.voir_sols = node_sols.value == 'visible';
        
        if(node_murs.value == '')
            node_murs.value = 'transparent';
        window.voir_murs = node_murs.value == 'visible';
        
        if(node_pentes.value == '')
            node_pentes.value = 'transparent';
        window.voir_pentes = node_pentes.value == 'visible';
        
        if(node_plafonds.value == '')
            node_plafonds.value = 'transparent';
        window.voir_plafonds = node_plafonds.value == 'visible';

        if(node_vue.value == 'sols')
        {
            UI.type = 'sols_only';
            initDessus(maison_generator(node_etage));
        }
        else if(node_vue.value == 'murs')
        {
            UI.type = 'murs_only';
            initPieces(maison_generator(node_etage),font);
        }
        else if(node_vue.value == '3d-ortho')
        {
            UI.type = '3d';
            init3D(maison_generator(node_etage),false);
        }
        else
        {
            node_vue.value = '3d-perspective';
            UI.type = '3d';
            init3D(maison_generator(node_etage),true);
        }
    }

    static Maison()
    {
        const maison = new THREE.Group();
        return maison;
    }
    static Etage(maison)
    {
        const etage = new THREE.Group();
        maison.add(etage);
        return etage;
    }
    static Piece(etage,nom)
    {
        const piece = new THREE.Group();
        piece.nom = nom;
        piece.murs = new THREE.Group();
        piece.sols = new THREE.Group();
        etage.add(piece);
        return piece;
    }

    static Sol(group,relativecoords,z,x,y,autofillh)
    {
        const geometry = SimpleRelativePathGeometry(...relativecoords);
        geometry.translate(x?x:0,y?y:0,0);
        geometry.translate(0,0,z?z:0);
        if(UI.type != 'murs_only')
            AddGeometryToGroup('sol',group,geometry,!voir_sols,true);
        if(autofillh)
        {
            let x = 0;
            let y = 0;
            for(var c=0; c<relativecoords.length; c++)
            {
                var relativecoord = relativecoords[c];
                if(relativecoord[0])
                    UI.MurH(group,RectangleGeometry(relativecoord[0],autofillh),y,x,0);
                else
                    UI.MurV(group,RectangleGeometry(relativecoord[1],autofillh),x,y,0);
                x += relativecoord[0];
                y += relativecoord[1];
            }
            UI.Plafond(group,geometry.clone(),autofillh);
        }
    }
    static MurH(group,geometry,p,x,y)
    {
        AddMurToGroup(group,geometry.clone());
        geometry.translate(x?x:0,y?y:0,0);
        geometry.rotateX(Math.PI/2);
        geometry.translate(0,p?p:0,0);
        if(UI.type != 'sols_only')
            AddGeometryToGroup('mur',group,geometry,!voir_murs);
    }
    static MurV(group,geometry,p,x,y)
    {
        AddMurToGroup(group,geometry.clone());
        geometry.translate(x?x:0,y?y:0,0);
        geometry.rotateX(Math.PI/2);
        geometry.rotateZ(Math.PI/2);
        geometry.translate(p?p:0,0,0);
        if(UI.type != 'sols_only')
            AddGeometryToGroup('mur',group,geometry,!voir_murs);
    }
    static Pente(group,geometry,p1,x1,y1,rx,ry,rz,p2,x2,y2)
    {
        AddMurToGroup(group,geometry.clone());
        geometry.translate(x1?x1:0,y1?y1:0,p1?p1:0);
        geometry.rotateX(rx?rx:0);
        geometry.rotateY(ry?ry:0);
        geometry.rotateZ(rz?rz:0);
        geometry.translate(x2?x2:0,y2?y2:0,p2?p2:0);
        if(UI.type != 'sols_only')
            AddGeometryToGroup('pente',group,geometry,!voir_pentes);
    }
    static Plafond(group,geometry,z,x,y)
    {
        geometry.translate(x?x:0,y?y:0,0);
        geometry.translate(0,0,z?z:0);
        if(UI.type != 'murs_only')
            if(UI.type != 'sols_only')
                AddGeometryToGroup('plafond',group,geometry,!voir_plafonds);
    }

    static SimpleRelativePathGeometry(...relativecoords)
    {
        return SimpleRelativePathGeometry(...relativecoords);
    }
    static RectangleGeometry(w,h,...holes)
    {
        return RectangleGeometry(w,h,...holes);
    }
};
export { UI };
