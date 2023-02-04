import { UI } from './ui.js';

const mur_e10 = 0.100;
const mur_e20 = 0.200;
const mur_e40 = 0.400;

const Etage2 = function(maison)
{
    const etage = UI.Etage(maison);
    Etage2_Combles(etage);
    etage.translateZ(mur_e20+$rdj_h+mur_e20+$rdc_h+mur_e20+$etage1_h+mur_e20);
};

const Etage2_Combles = function(etage)
{
    const piece = UI.Piece(etage,'E2C Combles');
    //piece.image_sol = image_sol_osb;
    UI.Sol(piece,[
        [$etage2_combles_AB,0],
        [0,$etage2_combles_BC],
        [-$etage2_combles_CD,0],
        [0,$etage2_combles_DE],
        [-$etage2_combles_EF,0],
        [0,-$etage2_combles_FA],
    ]);
    piece.translateX(mur_e40+$etage1_grenier1_w);
    piece.translateY(mur_e40+$etage1_grenier1_l/2-$etage2_combles_FA/2);
};

export { Etage2 };
