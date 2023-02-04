import * as THREE from './three.module.js';
import { FontLoader } from './FontLoader.js';
import { TextGeometry } from './TextGeometry.js';

window.voir_plafond = false;
window.voir_murs = false;

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

const AddGeometryToGroup = function(group,geometry,transparent,noline)
{
    if(!noline)
    {
        const lineMaterial = new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:0.5});
        group.add(new THREE.LineSegments(geometry,lineMaterial));
    }

    if(!transparent)
    {
        const meshMaterial = new THREE.MeshPhongMaterial({color:0x156289,emissive:0x072534,side:THREE.DoubleSide,flatShading:true});
        group.add(new THREE.Mesh(geometry,meshMaterial));
    }
};
const AddMurToGroup = function(group,geometry)
{
    const meshMaterial = new THREE.MeshPhongMaterial({color:0x156289,emissive:0x072534,side:THREE.DoubleSide,flatShading:true});
    group.murs.add(new THREE.Mesh(geometry,meshMaterial));
};

const Maison = function()
{
    const maison = new THREE.Group();
    return maison;
};
const Etage = function(maison)
{
    const etage = new THREE.Group();
    maison.add(etage);
    return etage;
};
const Piece = function(etage,nom)
{
    const piece = new THREE.Group();
    piece.nom = nom;
    piece.murs = new THREE.Group();
    piece.sols = new THREE.Group();
    etage.add(piece);
    return piece;
};

const MurH = function(group,geometry,p,x,y)
{
    AddMurToGroup(group,geometry.clone());
    geometry.translate(x?x:0,y?y:0,0);
    geometry.rotateX(Math.PI/2);
    geometry.translate(0,p?p:0,0);
    AddGeometryToGroup(group,geometry,!voir_murs);
};
const MurV = function(group,geometry,p,x,y)
{
    AddMurToGroup(group,geometry.clone());
    geometry.translate(x?x:0,y?y:0,0);
    geometry.rotateX(Math.PI/2);
    geometry.rotateZ(Math.PI/2);
    geometry.translate(p?p:0,0,0);
    AddGeometryToGroup(group,geometry,!voir_murs);
};
const Sol = function(group,relativecoords,z,x,y,autofillh)
{
    const geometry = SimpleRelativePathGeometry(...relativecoords);
    geometry.translate(x?x:0,y?y:0,0);
    geometry.translate(0,0,z?z:0);
    AddGeometryToGroup(group,geometry,false,true);
    if(autofillh)
    {
        let x = 0;
        let y = 0;
        for(var c=0; c<relativecoords.length; c++)
        {
            var relativecoord = relativecoords[c];
            if(relativecoord[0])
                MurH(group,RectangleGeometry(relativecoord[0],autofillh),y,x,0);
            else
                MurV(group,RectangleGeometry(relativecoord[1],autofillh),x,y,0);
            x += relativecoord[0];
            y += relativecoord[1];
        }
        Plafond(group,geometry.clone(),autofillh);
    }
};
const Plafond = function(group,geometry,z,x,y)
{
    geometry.translate(x?x:0,y?y:0,0);
    geometry.translate(0,0,z?z:0);
    AddGeometryToGroup(group,geometry,!voir_plafond);
};

const Haguenau = function(rotation)
{
    const haguenau = Maison();
    Etage1(haguenau);
    if(rotation)
    {
        haguenau.translateX(rotation[4]);
        haguenau.translateY(-rotation[5]);
        haguenau.rotation.x = rotation[0];
        haguenau.rotation.y = rotation[1];
        haguenau.rotation.z = rotation[2];
    }
    return haguenau;
};
const Etage1 = function(maison)
{
    const etage = Etage(maison);
    Etage1_Chambre4(etage);
    Etage1_Chambre1(etage);
    Etage1_Chambre2(etage);
    Etage1_Chambre3(etage);
};
const Etage1_Chambre4 = function(etage)
{
    const $etage1_chambre4_xh2 = $etage1_chambre4_xh-0.5;

    const piece = Piece(etage,'Etage1_Chambre4');
    Sol(piece,[[$etage1_chambre4_AB,0],[0,$etage1_chambre4_BC],[$etage1_chambre4_CD,0],[0,$etage1_chambre4_DE],[-$etage1_chambre4_EF,0],[0,$etage1_chambre4_FG],[-$etage1_chambre4_GH,0],[0,-$etage1_chambre4_HA]]);
    MurV(piece,RectangleGeometry($etage1_chambre4_HA,$etage1_chambre4_xh),0);
    MurH(piece,RectangleGeometry($etage1_chambre4_GH,$etage1_chambre4_xh,[0.68,0.8,0.93,1.2]),$etage1_chambre4_BC+$etage1_chambre4_DE+$etage1_chambre4_FG);
    MurV(piece,SimpleRelativePathGeometry([$etage1_chambre4_BC,0],[0,$etage1_chambre4_xh2],[$etage1_chambre4_DE,0],[0,-$etage1_chambre4_xh2],[$etage1_chambre4_FG,0],[0,$etage1_chambre4_xh],[-$etage1_chambre4_HA,0],[0,-$etage1_chambre4_xh]),$etage1_chambre4_AB,0);
    MurH(piece,RectangleGeometry($etage1_chambre4_EF,$etage1_chambre4_xh2),$etage1_chambre4_BC+$etage1_chambre4_DE,$etage1_chambre4_AB);
    MurV(piece,RectangleGeometry($etage1_chambre4_DE,$etage1_chambre4_xh2),$etage1_chambre4_AB+$etage1_chambre4_CD,$etage1_chambre4_BC);
    MurH(piece,RectangleGeometry($etage1_chambre4_CD,$etage1_chambre4_xh2),$etage1_chambre4_BC,$etage1_chambre4_AB);
    MurH(piece,RectangleGeometry($etage1_chambre4_AB,$etage1_chambre4_xh));
    Plafond(piece,RectangleGeometry($etage1_chambre4_AB,$etage1_chambre4_HA),$etage1_chambre4_xh);
    Plafond(piece,RectangleGeometry($etage1_chambre4_CD,$etage1_chambre4_DE),$etage1_chambre4_xh2,$etage1_chambre4_AB,$etage1_chambre4_BC);
    piece.translateX(-5);
};
const Etage1_Chambre1 = function(etage)
{
    const piece = Piece(etage,'Etage1_Chambre1');
    Sol(piece,[[2.550,0],[0,4.580],[-2.550,0],[0,-4.580]],0,0,0,$etage1_chambre1_xh);
};
const Etage1_Chambre2 = function(etage)
{
    const piece = Piece(etage,'Etage1_Chambre2');
    Sol(piece,[[3.760,0],[0,4.000],[-3.760,0],[0,-4.000]],0,0,0,$etage1_chambre2_xh);
    piece.translateX(-5);
    piece.translateY(-5);
};
const Etage1_Chambre3 = function(etage)
{
    const piece = Piece(etage,'Etage1_Chambre3');
    Sol(piece,[[3.710,0],[0,4.110],[-3.710,0],[0,-4.110]],0,0,0,$etage1_chambre3_xh);
    piece.translateY(-5);
};

const initDessus = function(haguenau)
{
    const canvas = document.createElement('canvas');
    canvas.style.display = 'inline-block';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x444444);

    const vh = 600;
    const vw = document.body.clientWidth/2;

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

    scene.add(haguenau);

    scene.translateZ(5.00);
    camera.position.z = 20.000;

    renderer.render(scene,camera);

    const raycaster = new THREE.Raycaster();

    requestAnimationFrame(initDessus_animate.bind(this,scene,camera,raycaster,renderer));
};
const initDessus_animated = [];
const initDessus_animate = function(scene,camera,raycaster,renderer)
{
    raycaster.setFromCamera(pointer,camera);
    const intersects = raycaster.intersectObjects(scene.children);
    const enabled = [];
    for(let i=0; i<intersects.length; i++)
    {
        enabled.push(intersects[i].object.material.color);
        if(!intersects[i].object.material.color._color)
            intersects[i].object.material.color._color = intersects[i].object.material.color.getHex();
        intersects[i].object.material.color.set(0xff0000);
        if(initDessus_animated.indexOf(intersects[i].object.material.color) == -1)
            initDessus_animated.push(intersects[i].object.material.color);
    }
    for(let c=0; c<initDessus_animated.length; c++)
        if(enabled.indexOf(initDessus_animated[c]) == -1)
            initDessus_animated[c].set(initDessus_animated[c]._color);

    renderer.render(scene,camera);

    requestAnimationFrame(initDessus_animate.bind(this,scene,camera,raycaster,renderer));
};
const init3D = function(haguenau)
{
    const canvas = document.createElement('canvas');
    canvas.style.display = 'inline-block';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x444444);

    const vh = 600;
    const vw = document.body.clientWidth/2;

    const camera = new THREE.PerspectiveCamera(75,vw/vh,0.1,1000);

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

    scene.add(haguenau.clone());

    scene.rotation.x = -Math.PI/4;
    scene.rotation.y = 0;
    scene.rotation.z = Math.PI/8;

    scene.translateZ(5.00);
    camera.position.z = 20.000;
    
    renderer.render(scene,camera);
};
const initPieces = function(haguenau,font)
{
    for(let e=0; e<haguenau.children.length; e++)
    {
        let etage = haguenau.children[e];
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
            hmurs += 2*pmur;

            const canvas = document.createElement('canvas');
            canvas.style.display = 'inline-block';

            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x444444);

            const z = 50;
            const w = document.body.clientWidth/z/2;
            const h = hmurs/2;
            const camera = new THREE.OrthographicCamera(-w,w,h,-h,0.1,1000);

            const renderer = new THREE.WebGLRenderer({antialias:true,canvas:canvas});
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(document.body.clientWidth,hmurs*z);
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
                new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
                new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
            ];
            if(!text.boundingBox)
                text.computeBoundingBox();
            const textobj = new THREE.Mesh(text,materials);
            textobj.translateX(x);
            textobj.translateY(-h+2*pmur);
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
            camera.position.z = 20.000;

            renderer.render(scene,camera);
        }
    }
};

const pointer = new THREE.Vector2(-1000,-1000);
const onPointerMove = function(event)
{
    const vh = 600;
    const vw = document.body.clientWidth/2;

    const w = 20;
    const h = w/vw*vh;

    if(event.clientX < 0 || event.clientX > vw || event.clientY < 0 || event.clientY > vh)
    {
        pointer.x = -1000;
        pointer.y = -1000;
        return;
    }
    pointer.x = (event.clientX/vw)*2-1;
    pointer.y = -(event.clientY/vh)*2+1;
}
window.addEventListener('pointermove',onPointerMove);

const loader_callback = function(font)
{
    initDessus(Haguenau());
    init3D(Haguenau());
    initPieces(Haguenau(),font);
};
const loader = new FontLoader();
loader.load('./droid_serif_bold.typeface.json',loader_callback);
