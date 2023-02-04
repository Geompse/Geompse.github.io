import { UI } from './ui.js';
import { RDJ } from './haguenau_rdj.js';
import { RDC } from './haguenau_rdc.js';
import { Etage1 } from './haguenau_etage1.js';
import { Etage2 } from './haguenau_etage2.js';

const Haguenau = function(node_etage)
{
    const maison = UI.Maison();
    if(['','RDJ','RDC','E1','E2'].indexOf(node_etage.value) == -1)
        node_etage.value = '';
    if(node_etage.value == '' || node_etage.value == 'RDJ')
        RDJ(maison);
    if(node_etage.value == '' || node_etage.value == 'RDC')
        RDC(maison);
    if(node_etage.value == '' || node_etage.value == 'E1')
        Etage1(maison);
    if(node_etage.value == '' || node_etage.value == 'E2')
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
