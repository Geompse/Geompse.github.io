import { UI } from './ui.js';

const mur_e10 = 0.100;
const mur_e15 = 0.150;
const mur_e20 = 0.200;
const mur_e40 = 0.400;

const colors_sol_amiante = {color:0xFFFFFF,emissive:0x000000};
const colors_sol_technique = {color:0x444444,emissive:0x444444};

const RDJ = function(maison)
{
    const etage = UI.Etage(maison);
    RDJ_Terrasse(etage);
    RDJ_Piece2(etage);
    RDJ_Piece1(etage);
    RDJ_Pallier(etage);
    RDJ_Cave(etage);
    RDJ_GarageA(etage);
    RDJ_GarageG(etage);
    RDJ_Degagement(etage);
    RDJ_WC(etage);
    RDJ_Cuve(etage);
    RDJ_Chaufferie(etage);
    RDJ_Buanderie(etage);
    RDJ_Tech(etage);
    RDJ_Entree(etage);
    etage.translateZ(mur_e20);
};

const RDJ_Terrasse = function(etage)
{
    /* TODO marches */
    const piece = UI.Piece(etage,'SST Terrasse');

    const $marche_x = 0.250;
    const $marche_y = 0.800;
    const $marche_z = 0.180;
    const $nb_marche = 12;

    for(let m=0; m<$nb_marche-1; m++)
    {
        UI.Sol(piece,[
            [$marche_x,0],
            [0,$marche_y],
            [-$marche_x,0],
            [0,-$marche_y],
        ],$rdj_h-$marche_z*(m+2),0.600+$marche_x*(m+1),$rdc_terrasse_BC);
    }

    piece.translateX(mur_e40+$rdc_piece3_AB+mur_e20+$rdc_cuisine_EF+mur_e20+$rdc_pallier_w+mur_e20+$rdc_piece4_piece5_EF+$rdc_piece4_piece5_AB+$rdc_piece4_piece5_GH+mur_e40);
    piece.translateY(mur_e40);
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
const RDJ_Pallier = function(etage)
{
    /* TODO murs */
    /* TODO marches */
    const piece = UI.Piece(etage,'SSPA Pallier');
    piece.color_sol = colors_sol_amiante;

    const $marche_y = 0.300;
    const $marche_z = $rdj_cave_Ch/7;
    const $nb_marche = 7;

    for(let m=0; m<$nb_marche; m++)
    {
        UI.Sol(piece,[
            [$rdc_pallier_AB/2,0],
            [0,$marche_y],
            [-$rdc_pallier_AB/2,0],
            [0,-$marche_y],
        ],$marche_z*(m+1),0,$marche_y*m);
    }

    UI.Sol(piece,[
        [$rdc_pallier_AB,0],
        [0,$rdc_pallier___],
        [-$rdc_pallier_AB,0],
        [0,-$rdc_pallier___],
    ],$marche_z*($nb_marche+1),0,$marche_y*$nb_marche);

    for(let m=0; m<$nb_marche-1; m++)
    {
        UI.Sol(piece,[
            [$rdc_pallier_AB/2,0],
            [0,$marche_y],
            [-$rdc_pallier_AB/2,0],
            [0,-$marche_y],
        ],$marche_z*($nb_marche+m+1),$rdc_pallier_AB/2,$marche_y*($nb_marche-m-1));
    }

    piece.translateX(mur_e40+$rdj_cuve_AB+mur_e20+$rdj_piece1_AB+$rdj_piece1_CD+mur_e15);
    piece.translateY(mur_e40+$rdj_buanderie_BC+mur_e20+$rdj_degagement_BC+$rdj_degagement_DE+$rdj_degagement_FG-$rdj_degagement_HI-$rdj_degagement_IJ);
};
const RDJ_Cave = function(etage)
{
    /* TODO murs */
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
    ],0,0,0,$rdj_degagement_xh);
    piece.translateX(mur_e40+$rdj_cuve_AB+mur_e20+$rdj_chaufferie_AB+mur_e20);
    piece.translateY(mur_e40+$rdj_buanderie_BC+mur_e20);
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
    /* TODO murs */
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
const RDJ_Entree = function(etage)
{
    /* TODO murs */
    /* TODO marches */
    const piece = UI.Piece(etage,'SSE Entr\xE9e');
    piece.color_sol = colors_sol_amiante;

    const $marche_x = 0.300;
    const $marche_y = 1.200;
    const $marche_z = $rdj_cave_Ch/7;
    const $nb_marche = 5;

    for(let m=0; m<$nb_marche; m++)
    {
        UI.Sol(piece,[
            [$marche_x,0],
            [0,$marche_y],
            [-$marche_x,0],
            [0,-$marche_y],
        ],$rdj_h-0.050-$marche_z*($nb_marche-m),$marche_x*m-0.200-$rdc_entree_AB/2,-$marche_y);
    }

    UI.Sol(piece,[
        [2*$marche_x+0.200+$rdc_entree_AB+0.200+2*$marche_x,0],
        [0,$marche_y],
        [-2*$marche_x-0.200-$rdc_entree_AB-0.200-2*$marche_x,0],
        [0,-$marche_y],
    ],$rdj_h-0.050-$marche_z*($nb_marche+1),-2*$marche_x-0.200,-$marche_y);

    /* (RDC) UI.Sol(piece,[
        [0.200+$rdc_entree_AB+0.200,0],
        [0,$marche_y],
        [-0.200-$rdc_entree_AB-0.200,0],
        [0,-$marche_y],
    ],$rdj_h-0.050,-0.200,-$marche_y); /**/

    for(let m=0; m<$nb_marche; m++)
    {
        UI.Sol(piece,[
            [$marche_x,0],
            [0,$marche_y],
            [-$marche_x,0],
            [0,-$marche_y],
        ],$rdj_h-$marche_z*(m+1),$marche_x*m+$rdc_entree_AB+0.200,-$marche_y);
    }

    piece.translateX(mur_e40+$rdc_salledeau2_AB+mur_e20+$rdc_piece1_AB+mur_e20+$rdc_salledeau1_AB+mur_e20+$rdc_wc_AB+mur_e20);
    piece.translateY(0);
};

export { RDJ };
