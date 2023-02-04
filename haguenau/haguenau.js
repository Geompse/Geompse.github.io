import { UI } from './ui.js';
import { RDJ } from './haguenau_rdj.js';
import { RDC } from './haguenau_rdc.js';
import { Etage1 } from './haguenau_etage1.js';
import { Etage2 } from './haguenau_etage2.js';

const Haguenau = function()
{
    const maison = UI.Maison();
    if(!document.location.hash || document.location.hash == '#SS' || document.location.hash == '#SOUSSOL' || document.location.hash == '#RJ' || document.location.hash == '#RDJ')
        RDJ(maison);
    if(!document.location.hash || document.location.hash == '#RC' || document.location.hash == '#RDC')
        RDC(maison);
    if(!document.location.hash || document.location.hash == '#E1' || document.location.hash == '#Etage1')
        Etage1(maison);
    if(!document.location.hash || document.location.hash == '#E2' || document.location.hash == '#Etage2' || document.location.hash == '#C' || document.location.hash == '#Combles')
        Etage2(maison);
    /*if(rotation)
    {
        maison.translateX(rotation[4]);
        maison.translateY(-rotation[5]);
        maison.rotation.x = rotation[0];
        maison.rotation.y = rotation[1];
        maison.rotation.z = rotation[2];
    }*/
    maison.translateX(-15/2);
    maison.translateY(-10/2);
    maison.translateZ(-10/2);
    return maison;
};
UI.run(Haguenau);
