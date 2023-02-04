import { UI } from './ui.js';

const mur_e10 = 0.100;
const mur_e20 = 0.200;
const mur_e40 = 0.400;

const colors_sol_amiante = {color:0xFFFFFF,emissive:0x000000};
const colors_sol_technique = {color:0x444444,emissive:0x444444};

const RDJ = function(maison)
{
    const etage = UI.Etage(maison);
    RDJ_Piece2(etage);
    RDJ_Piece1(etage);
    RDJ_Degagement(etage);
    RDJ_Cave(etage);
    RDJ_GarageA(etage);
    RDJ_GarageG(etage);
    RDJ_WC(etage);
    RDJ_Cuve(etage);
    RDJ_Chaufferie(etage);
    RDJ_Buanderie(etage);
    RDJ_Tech(etage);
    etage.translateZ(mur_e20);
};

const RDJ_Piece2 = function(etage)
{
    const piece = UI.Piece(etage,'SSP2 Cin\xE9ma');
    piece.color_sol = colors_sol_amiante;
    UI.Sol(piece,[
        [$rdj_piece2_AB,0],
        [0,$rdj_piece2_BC],
        [-$rdj_piece2_CD,0],
        [0,-$rdj_piece2_DA],
    ],0,0,0,$rdj_piece2_xh);
    piece.translateX(mur_e40);
    piece.translateY(mur_e40+$rdj_cuve_BC+mur_e20);
};
const RDJ_Piece1 = function(etage)
{
    const piece = UI.Piece(etage,'SSP1 Sport');
    piece.color_sol = colors_sol_amiante;
    UI.Sol(piece,[
        [$rdj_piece1_AB,0],
        [0,$rdj_piece1_BC],
        [$rdj_piece1_CD,0],
        [0,$rdj_piece1_DE],
        [-$rdj_piece1_EF,0],
        [0,-$rdj_piece1_FA],
    ],0,0,0,$rdj_piece1_xh);
    piece.translateX(mur_e40+$rdj_piece2_AB+mur_e20);
    piece.translateY(mur_e40+$rdj_cuve_BC+mur_e20+$rdj_piece2_BC-$rdj_piece1_FA);
};
const RDJ_Degagement = function(etage)
{
    const piece = UI.Piece(etage,'SSDGT D\xE9gagement');
    piece.color_sol = colors_sol_amiante;
    UI.Sol(piece,[
        [$rdj_degagement_AB,0],
        [0,$rdj_degagement_BC],
        [-$rdj_degagement_CD,0],
        [0,$rdj_degagement_DE],
        [$rdj_degagement_EF,0],
        [0,$rdj_degagement_FG],
        [-$rdj_degagement_GH,0],
        [0,-$rdj_degagement_HI-$rdj_degagement_IJ],
        [-$rdj_degagement_JK,0],
        [0,-$rdj_degagement_KL],
        [$rdj_degagement_LM,0],
        [0,-$rdj_degagement_MN],
        [-$rdj_degagement_NO,0],
        [0,$rdj_degagement_OP],
        [-$rdj_degagement_PQ,0],
        [0,-$rdj_degagement_QR],
        [$rdj_degagement_RS,0],
        [0,-$rdj_degagement_SA],
    ]);
    piece.translateX(mur_e40+$rdj_cuve_AB+mur_e20+$rdj_chaufferie_AB+mur_e20);
    piece.translateY(mur_e40+$rdj_buanderie_BC+mur_e20);
};
const RDJ_Cave = function(etage)
{
    const piece = UI.Piece(etage,'SSCA Cave');
    UI.Sol(piece,[
        [$rdj_cave_AB,0],
        [0,$rdj_cave_BC+$rdj_cave_CD],
        [-$rdj_cave_DE,0],
        [0,-$rdj_cave_EF-$rdj_cave_FI],
        [$rdj_cave_IA,0],
    ]);
    piece.translateX(mur_e40+$rdj_cuve_AB+mur_e20+$rdj_chaufferie_AB+mur_e20+$rdj_buanderie_AB+mur_e20+$rdj_tech_AB+mur_e20-$rdj_garage_EF[0]-$rdj_cave_AB-mur_e10);
    piece.translateY(mur_e40+$rdj_cuve_BC+mur_e20+$rdj_piece2_BC-$rdj_cave_BC-$rdj_cave_CD);
};
const RDJ_GarageA = function(etage)
{
    const piece = UI.Piece(etage,'SSGA Atelier');
    piece.color_sol = colors_sol_technique;
    UI.Sol(piece,[
        [$rdj_garage_EF[0],0],
        [0,-$rdj_garage_DE[1]],
        [-$rdj_garage_EF[0],0],
        [0,$rdj_garage_DE[1]],
    ],0,0,0,$rdj_garage_xh);
    piece.translateX(mur_e40+$rdj_cuve_AB+mur_e20+$rdj_chaufferie_AB+mur_e20+$rdj_buanderie_AB+mur_e20+$rdj_tech_AB+mur_e20-$rdj_garage_EF[0]);
    piece.translateY(mur_e40+$rdj_garage_BC[1]+$rdj_garage_DE[1]);
};
const RDJ_GarageG = function(etage)
{
    const piece = UI.Piece(etage,'SSGG Garage');
    piece.color_sol = colors_sol_technique;
    UI.Sol(piece,[
        [$rdj_garage_AB[0],0],
        [0,$rdj_garage_BC[1]],
        [$rdj_garage_CD[0]+$rdj_garage_EF[0],0],
        [0,$rdj_garage_DE[1]+$rdj_garage_FA[1]],
    ],0,0,0,$rdj_garage_xh);
    piece.translateX(mur_e40+$rdj_cuve_AB+mur_e20+$rdj_chaufferie_AB+mur_e20+$rdj_buanderie_AB+mur_e20+$rdj_tech_AB+mur_e20);
    piece.translateY(mur_e40);
};
const RDJ_WC = function(etage)
{
    const piece = UI.Piece(etage,'SSWC WC');
    piece.color_sol = colors_sol_amiante;
    UI.Sol(piece,[
        [$rdj_wc_AB,0],
        [0,$rdj_wc_BC],
        [-$rdj_wc_CD,0],
        [0,$rdj_wc_DE],
        [-$rdj_wc_EF,0],
        [0,-$rdj_wc_FA],
    ],0,0,0,$rdj_wc_xh);
    piece.translateX(mur_e40+$rdj_cuve_AB+mur_e20+$rdj_chaufferie_AB+mur_e20+$rdj_buanderie_AB+mur_e20+$rdj_tech_AB-$rdj_wc_AB);
    piece.translateY(mur_e40+$rdj_buanderie_BC+mur_e20);
};
const RDJ_Cuve = function(etage)
{
    const piece = UI.Piece(etage,'SSCU Cuve');
    piece.color_sol = colors_sol_amiante;
    UI.Sol(piece,[
        [$rdj_cuve_AB,0],
        [0,$rdj_cuve_BC],
        [-$rdj_cuve_CD,0],
        [0,-$rdj_cuve_DA],
    ],0,0,0,$rdj_cuve_xh);
    piece.translateX(mur_e40);
    piece.translateY(mur_e40);
};
const RDJ_Chaufferie = function(etage)
{
    const piece = UI.Piece(etage,'SSCH Chaufferie');
    piece.color_sol = colors_sol_technique;
    UI.Sol(piece,[
        [$rdj_chaufferie_AB,0],
        [0,$rdj_chaufferie_BC],
        [-$rdj_chaufferie_CD,0],
        [0,$rdj_chaufferie_DE],
        [-$rdj_chaufferie_EF,0],
        [0,-$rdj_chaufferie_FA],
    ],0,0,0,$rdj_chaufferie_xh);
    piece.translateX(mur_e40+$rdj_cuve_AB+mur_e20);
    piece.translateY(mur_e40);
};
const RDJ_Buanderie = function(etage)
{
    const piece = UI.Piece(etage,'SSBU Buanderie');
    piece.color_sol = colors_sol_technique;
    UI.Sol(piece,[
        [$rdj_buanderie_AB,0],
        [0,$rdj_buanderie_BC],
        [-$rdj_buanderie_CD,0],
        [0,-$rdj_buanderie_DA],
    ],0,0,0,$rdj_buanderie_xh);
    piece.translateX(mur_e40+$rdj_cuve_AB+mur_e20+$rdj_chaufferie_AB+mur_e20);
    piece.translateY(mur_e40);
};
const RDJ_Tech = function(etage)
{
    const piece = UI.Piece(etage,'SSTE Local technique');
    piece.color_sol = colors_sol_technique;
    UI.Sol(piece,[
        [$rdj_tech_AB,0],
        [0,$rdj_tech_BC+$rdj_tech_CD+$rdj_tech_DE],
        [-$rdj_tech_EF,0],
        [0,-$rdj_tech_FG-$rdj_tech_GH-$rdj_tech_HA],
    ]);
    piece.translateX(mur_e40+$rdj_cuve_AB+mur_e20+$rdj_chaufferie_AB+mur_e20+$rdj_buanderie_AB+mur_e20);
    piece.translateY(mur_e40+$rdj_buanderie_BC-$rdj_tech_FG-$rdj_tech_GH-$rdj_tech_HA);
};

export { RDJ };
