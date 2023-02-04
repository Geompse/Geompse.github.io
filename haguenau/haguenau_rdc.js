import { UI } from './ui.js';

const mur_e10 = 0.100;
const mur_e20 = 0.200;
const mur_e40 = 0.400;

const RDC = function(maison)
{
    const etage = UI.Etage(maison);
    RDC_Piece3(etage);
    RDC_Cuisine(etage);
    RDC_Degagement(etage);
    RDC_Piece4C(etage);
    RDC_Piece4S(etage);
    RDC_Piece5(etage);
    RDC_SalleDEau2(etage);
    RDC_Piece1(etage);
    RDC_Piece2(etage);
    RDC_SalleDEau1(etage);
    RDC_WC(etage);
    etage.translateZ(mur_e20+$rdj_h+mur_e20);
};

const RDC_Piece3 = function(etage)
{
    const piece = UI.Piece(etage,'RCP3 Chambre d\'amis');
    UI.Sol(piece,[
        [$rdc_piece3_AB,0],
        [0,$rdc_piece3_BC],
        [-$rdc_piece3_CD,0],
        [0,$rdc_piece3_DE],
        [-$rdc_piece3_EF,0],
        [0,-$rdc_piece3_FG],
        [-$rdc_piece3_GH,0],
        [0,-$rdc_piece3_HA],
    ],0,0,0,$rdc_piece3_xh);
    piece.translateX(mur_e40);
    piece.translateY(mur_e40+$rdc_piece2_BC+mur_e20+$rdc_salledeau2_BC+mur_e20);
};
const RDC_Cuisine = function(etage)
{
    const piece = UI.Piece(etage,'RCCU Cellier');
    UI.Sol(piece,[
        [$rdc_cuisine_AB,0],
        [0,$rdc_cuisine_BC],
        [$rdc_cuisine_CD,0],
        [0,$rdc_cuisine_DE],
        [-$rdc_cuisine_EF,0],
        [0,-$rdc_cuisine_FA],
    ],0,0,0,$rdc_cuisine_xh);
    piece.translateX(mur_e40+$rdc_piece3_AB+mur_e20);
    piece.translateY(mur_e40+$rdc_piece2_BC+mur_e20+$rdc_salledeau2_BC+mur_e20+$rdc_piece3_BC+$rdc_piece3_DE-$rdc_cuisine_FA);
};
const RDC_Degagement = function(etage)
{
    const piece = UI.Piece(etage,'RCDGT D\xE9gagement');
};
const RDC_Piece4C = function(etage)
{
    const piece = UI.Piece(etage,'RCP4C Cuisine');
    UI.Sol(piece,[
        [$rdc_piece4_piece5_EF,0],
        [0,$rdc_piece4_piece5_DE],
        [-$rdc_piece4_piece5_EF,0],
        [0,-$rdc_piece4_piece5_DE],
    ],0,0,0,$rdc_piece4_piece5_xh);
    piece.translateX(mur_e40+$rdc_piece3_AB+mur_e20+$rdc_cuisine_EF+mur_e20+$rdc_pallier_w+mur_e20);
    piece.translateY(mur_e40+$rdc_piece2_BC+mur_e20+$rdc_salledeau2_BC+mur_e20+$rdc_piece3_BC+$rdc_piece3_DE-$rdc_piece4_piece5_DE);
};
const RDC_Piece4S = function(etage)
{
    const piece = UI.Piece(etage,'RCP4C Salle \xE0 manger');
    UI.Sol(piece,[
        [$rdc_piece4_piece5_AB+$rdc_piece4_piece5_GH,0],
        [0,$rdc_piece4_piece5_DE],
        [-$rdc_piece4_piece5_AB-$rdc_piece4_piece5_GH,0],
        [0,-$rdc_piece4_piece5_DE],
    ],0,0,0,$rdc_piece4_piece5_xh);
    piece.translateX(mur_e40+$rdc_piece3_AB+mur_e20+$rdc_cuisine_EF+mur_e20+$rdc_pallier_w+mur_e20+$rdc_piece4_piece5_EF);
    piece.translateY(mur_e40+$rdc_piece2_BC+mur_e20+$rdc_salledeau2_BC+mur_e20+$rdc_piece3_BC+$rdc_piece3_DE-$rdc_piece4_piece5_DE);
};
const RDC_Piece5 = function(etage)
{
    const piece = UI.Piece(etage,'RCP5 S\xE9jour');
    UI.Sol(piece,[
        [$rdc_piece4_piece5_AB,0],
        [0,$rdc_piece4_piece5_BC-$rdc_piece4_piece5_DE],
        [-$rdc_piece4_piece5_CD+$rdc_piece4_piece5_EF,0],
        [0,-$rdc_piece4_piece5_FG],
        [$rdc_piece4_piece5_GH,0],
        [0,-$rdc_piece4_piece5_HA],
    ],0,0,0,$rdc_piece4_piece5_xh);
    piece.translateX(mur_e40+$rdc_piece3_AB+mur_e20+$rdc_cuisine_EF+mur_e20+$rdc_pallier_w+mur_e20+$rdc_piece4_piece5_EF+$rdc_piece4_piece5_GH);
    piece.translateY(mur_e40+$rdc_piece2_BC+mur_e20+$rdc_salledeau2_BC+mur_e20+$rdc_piece3_BC+$rdc_piece3_DE-$rdc_piece4_piece5_BC);
};
const RDC_SalleDEau2 = function(etage)
{
    const piece = UI.Piece(etage,'RCSDE2 Salle d\'eau amis');
    UI.Sol(piece,[
        [$rdc_salledeau2_AB,0],
        [0,$rdc_salledeau2_BC],
        [-$rdc_salledeau2_CD,0],
        [0,-$rdc_salledeau2_DA],
    ],0,0,0,$rdc_salledeau2_xh);
    piece.translateX(mur_e40);
    piece.translateY(mur_e40+$rdc_piece2_BC+mur_e20);
};
const RDC_Piece1 = function(etage)
{
    const piece = UI.Piece(etage,'RCP1 Chambre au pair');
    UI.Sol(piece,[
        [$rdc_piece1_AB,0],
        [0,$rdc_piece1_BC],
        [-$rdc_piece1_CD,0],
        [0,$rdc_piece1_DE],
        [-$rdc_piece1_EF,0],
        [0,-$rdc_piece1_FG],
        [-$rdc_piece1_GH,0],
        [0,-$rdc_piece1_HA],
    ],0,0,0,$rdc_piece1_xh);
    piece.translateX(mur_e40+$rdc_salledeau2_AB+mur_e20);
    piece.translateY(mur_e40);
};
const RDC_Piece2 = function(etage)
{
    const piece = UI.Piece(etage,'RCP2 Bureau Viviane');
    UI.Sol(piece,[
        [$rdc_piece2_AB,0],
        [0,$rdc_piece2_BC],
        [-$rdc_piece2_CD,0],
        [0,-$rdc_piece2_DA],
    ],0,0,0,$rdc_piece2_xh);
    piece.translateX(mur_e40);
    piece.translateY(mur_e40);
};
const RDC_SalleDEau1 = function(etage)
{
    const piece = UI.Piece(etage,'RCSDE1 Salle d\'eau au pair');
    UI.Sol(piece,[
        [$rdc_salledeau1_AB,0],
        [0,$rdc_salledeau1_BC],
        [-$rdc_salledeau1_CD,0],
        [0,-$rdc_salledeau1_DA],
    ],0,0,0,$rdc_salledeau1_xh);
    piece.translateX(mur_e40+$rdc_salledeau2_AB+mur_e20+$rdc_piece1_AB+mur_e20);
    piece.translateY(mur_e40);
};
const RDC_WC = function(etage)
{
    const piece = UI.Piece(etage,'RCWC WC');
    UI.Sol(piece,[
        [$rdc_wc_AB,0],
        [0,$rdc_wc_BC],
        [-$rdc_wc_CD,0],
        [0,-$rdc_wc_DA],
    ],0,0,0,$rdc_wc_xh);
    piece.translateX(mur_e40+$rdc_salledeau2_AB+mur_e20+$rdc_piece1_AB+mur_e20+$rdc_salledeau1_AB+mur_e20);
    piece.translateY(mur_e40);
};

export { RDC };
