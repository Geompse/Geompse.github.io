import { UI } from './ui.js';

const mur_e10 = 0.100;
const mur_e20 = 0.200;
const mur_e40 = 0.400;

const Etage2 = function(maison)
{
    const etage = UI.Etage(maison);
    etage.translateZ(mur_e20+$rdj_h+mur_e20+$rdc_h+mur_e20+$etage1_h+mur_e20);
};

export { Etage2 };
