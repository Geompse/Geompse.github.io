import { UI } from './ui.js';

const mur_e10 = 0.100;
const mur_e20 = 0.200;
const mur_e40 = 0.400;

const colors_sol_marbre1 = {color:0xFFFFFF,emissive:0x000000};
const colors_sol_marbre2 = {color:0xEEEEEE,emissive:0x111111};
const colors_sol_parquet = {color:0xb38848,emissive:0xE5B255};
const colors_sol_carrelage = {color:0xCCCCCC,emissive:0xCCCCCC};
const colors_sol_tomette = {color:0x884444,emissive:0x884444};

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
    piece.color_sol = colors_sol_parquet;
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
    piece.color_sol = colors_sol_tomette;
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
    piece.color_sol = colors_sol_marbre1;
    /* couloir */
    /* pallier */
    /* entree */
    UI.Sol(piece,[
        [$rdc_degagement_hall_AB,0],
        [0,$rdc_degagement_hall_BC],
        [-$rdc_degagement_hall_CD,0],
        [0,-$rdc_degagement_hall_DE],
        [-$rdc_degagement_hall_EF,0],
        [0,$rdc_degagement_hall_FG],
        [-$rdc_degagement_hall_GH,0],
        [0,-$rdc_degagement_hall_HI],
        [$rdc_degagement_hall_IJ,0],
        [0,-$rdc_degagement_hall_JK],
        [$rdc_degagement_hall_KL,0],
        [0,-$rdc_degagement_hall_LM],
        [-$rdc_degagement_hall_MN,0],
        [-$rdc_degagement_hall_NO,0],
        [0,-$rdc_degagement_hall_OP],
        [$rdc_degagement_hall_PQ,0],
        [$rdc_degagement_hall_QR,0],
        [0,$rdc_degagement_hall_RS],
        [-$rdc_degagement_hall_ST,0],
        [0,$rdc_degagement_hall_TU],
        [$rdc_degagement_hall_UV,0],
        [0,$rdc_degagement_hall_VW],
        [$rdc_degagement_hall_WX,0],
        [0,-$rdc_degagement_hall_XA],
    ]);
    piece.translateX(mur_e40+$rdc_salledeau2_AB+mur_e20+$rdc_piece1_AB+mur_e20+$rdc_salledeau1_AB+mur_e20+$rdc_wc_AB+mur_e20);
    piece.translateY(mur_e40+$rdc_entree_BC+$rdc_entree_CD+$rdc_entree_DE+mur_e20);
};
const RDC_Piece4C = function(etage)
{
    const piece = UI.Piece(etage,'RCP4C Cuisine');
    piece.color_sol = colors_sol_marbre2;
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
    piece.color_sol = colors_sol_marbre2;
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
    piece.color_sol = colors_sol_marbre2;
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
    piece.color_sol = colors_sol_carrelage;
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
    piece.color_sol = colors_sol_parquet;
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
    piece.color_sol = colors_sol_parquet;
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
    piece.color_sol = colors_sol_carrelage;
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
    piece.color_sol = colors_sol_carrelage;
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
