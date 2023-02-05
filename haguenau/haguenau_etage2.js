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
    /* TODO murs */
    /* TODO betons */
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
  
    const $etage2_pente1_AB = $etage2_combles_FA-1.43*2;
    const $etage2_pente1_ABh = $etage2_combles_FA/2-1;
    const $etage2_pente1_angle = 52;
    const $etage2_pente1_ox = -2.5;
    const $etage2_pente1_oy = 1.43;

    const $etage2_pente2_AB = $etage2_combles_AB-2*$etage2_pente1_ox;
    const $etage2_pente2_ABh = $etage2_combles_FA/2;
    const $etage2_pente2_CD = $etage2_pente2_AB-$etage2_combles_FA/2-0.5;
    const $etage2_pente2_angle = 45;

    UI.Pente(piece,UI.SimpleRelativePathGeometry([$etage2_pente1_AB,0],[-$etage2_pente1_AB/2,$etage2_pente1_ABh],[-$etage2_pente1_AB/2,-$etage2_pente1_ABh]),0,0,0,(180-$etage2_pente1_angle)*Math.PI/180,0,Math.PI/2,0,$etage2_pente1_ox,$etage2_pente1_oy);
    
    UI.Pente(piece,UI.SimpleRelativePathGeometry([$etage2_pente2_AB,0],[-$etage2_pente2_AB/2+$etage2_pente2_CD/2,$etage2_pente2_ABh],[-$etage2_pente2_CD,0],[-$etage2_pente2_AB/2+$etage2_pente2_CD/2,-$etage2_pente2_ABh]),0,0,0,(180-$etage2_pente2_angle)*Math.PI/180,0,0,0,$etage2_pente1_ox,$etage2_combles_FA-$etage2_pente1_oy);

    UI.Pente(piece,UI.SimpleRelativePathGeometry([$etage2_pente1_AB,0],[-$etage2_pente1_AB/2,$etage2_pente1_ABh],[-$etage2_pente1_AB/2,-$etage2_pente1_ABh]),0,0,0,$etage2_pente1_angle*Math.PI/180,0,Math.PI/2,0,$etage2_combles_AB-$etage2_pente1_ox,$etage2_pente1_oy);
    
    UI.Pente(piece,UI.SimpleRelativePathGeometry([$etage2_pente2_AB,0],[-$etage2_pente2_AB/2+$etage2_pente2_CD/2,$etage2_pente2_ABh],[-$etage2_pente2_CD,0],[-$etage2_pente2_AB/2+$etage2_pente2_CD/2,-$etage2_pente2_ABh]),0,0,0,(180-$etage2_pente2_angle)*Math.PI/180,0,Math.PI,0,-$etage2_pente1_ox+$etage2_combles_AB,$etage2_pente1_oy);
    
    piece.translateX(mur_e40+$etage1_grenier1_w);
    piece.translateY(mur_e40+$etage1_grenier1_l/2-$etage2_combles_FA/2);
};

export { Etage2 };
