import { UI } from './ui.js';

const mur_e10 = 0.100;
const mur_e20 = 0.200;
const mur_e40 = 0.400;

const colors_sol_marbre1 = {color:0xFFFFFF,emissive:0x000000};
const colors_sol_marbre2 = {color:0xEEEEEE,emissive:0x111111};
const colors_sol_carrelage = {color:0x000000,emissive:0xCCCCCC};

const image_sol_parquet = './sol_parquet.png';
const image_sol_tomette = './sol_tomette.png';

const RDC = function(maison)
{
    const etage = UI.Etage(maison);
    RDC_Terrasse(etage);
    RDC_Piece3(etage);
    RDC_Cuisine(etage);
    RDC_Pallier(etage);
    RDC_Piece4C(etage);
    RDC_Piece4S(etage);
    RDC_Couloir(etage);
    RDC_Piece5(etage);
    RDC_DegagementHall(etage);
    RDC_SalleDEau2(etage);
    RDC_Piece1(etage);
    RDC_Piece2(etage);
    RDC_Entree(etage);
    RDC_SalleDEau1(etage);
    RDC_WC(etage);
    etage.translateZ(mur_e20+$rdj_h+mur_e20);
};

const RDC_Terrasse = function(etage)
{
    /* TODO marches */
    const piece = UI.Piece(etage,'RCT Terrasse');

    const $marche_x = 0.250;
    const $marche_y = 0.800;
    const $marche_z = 0.120;

    UI.Sol(piece,[
        [$rdc_terrasse_AB,0],
        [0,$rdc_terrasse_BC],
        [-$rdc_terrasse_CD,0],
        [0,-$rdc_terrasse_DA],
    ]);

    UI.Sol(piece,[
        [0.600,0],
        [0,$marche_y],
        [-0.600,0],
        [0,-$marche_y],
    ],0,0,$rdc_terrasse_BC);

    UI.Sol(piece,[
        [$marche_x,0],
        [0,$marche_y],
        [-$marche_x,0],
        [0,-$marche_y],
    ],-$marche_z,0.600,$rdc_terrasse_BC);

    piece.translateX(mur_e40+$rdc_piece3_AB+mur_e20+$rdc_cuisine_EF+mur_e20+$rdc_pallier_w+mur_e20+$rdc_piece4_piece5_EF+$rdc_piece4_piece5_AB+$rdc_piece4_piece5_GH+mur_e40);
    piece.translateY(mur_e40);
};
const RDC_Piece3 = function(etage)
{
    const piece = UI.Piece(etage,'RCP3 Chambre d\'amis');
    piece.image_sol = image_sol_parquet;
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
    piece.image_sol = image_sol_tomette;
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
const RDC_Pallier = function(etage)
{
    /* TODO murs */
    /* TODO marches */
    const piece = UI.Piece(etage,'RCPA Pallier');
    piece.color_sol = colors_sol_marbre1;

    const $marche_y = $rdc_pallier_C_/7;
    const $marche_z = $rdc_pallier_h/15;
    const $nb_marche = 7;

    UI.Sol(piece,[
        [$rdc_pallier_AB/2,0],
        [0,$marche_y],
        [-$rdc_pallier_AB/2,0],
        [0,-$marche_y],
    ],-$marche_z,$rdc_pallier_AB/2,$rdc_pallier_BC);

    UI.Sol(piece,[
        [$rdc_pallier_AB,0],
        [0,$rdc_pallier_BC],
        [-$rdc_pallier_CD,0],
        [0,-$rdc_pallier_DA],
    ]);

    for(let m=0; m<$nb_marche; m++)
    {
        UI.Sol(piece,[
            [$rdc_pallier_AB/2,0],
            [0,$marche_y],
            [-$rdc_pallier_AB/2,0],
            [0,-$marche_y],
        ],$marche_z*(m+1),0,$rdc_pallier_BC+$marche_y*m);
    }

    UI.Sol(piece,[
        [$rdc_pallier_AB,0],
        [0,$rdc_pallier___],
        [-$rdc_pallier_AB,0],
        [0,-$rdc_pallier___],
    ],$marche_z*($nb_marche+1),0,$rdc_pallier_BC+$marche_y*$nb_marche);

    for(let m=0; m<$nb_marche-1; m++)
    {
        UI.Sol(piece,[
            [$rdc_pallier_AB/2,0],
            [0,$marche_y],
            [-$rdc_pallier_AB/2,0],
            [0,-$marche_y],
        ],$marche_z*($nb_marche+m+1),$rdc_pallier_AB/2,$rdc_pallier_BC+$marche_y*($nb_marche-m-1));
    }

    piece.translateX(mur_e40+$rdc_piece3_AB+mur_e20+$rdc_cuisine_EF+mur_e20);
    piece.translateY(mur_e40+$rdc_piece1_BC+$rdc_piece1_DE+mur_e20+$rdc_degagement_hall_HI+mur_e40);
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
const RDC_Couloir = function(etage)
{
    const piece = UI.Piece(etage,'RCCO Couloir');
    piece.color_sol = colors_sol_marbre1;
    UI.Sol(piece,[
        [$rdc_couloir_AB,0],
        [0,$rdc_couloir_BC],
        [$rdc_couloir_CD,0],
        [0,$rdc_couloir_DE],
        [-$rdc_couloir_EF,0],
        [0,$rdc_couloir_FG],
        [-$rdc_couloir_GH,0],
        [0,-$rdc_couloir_HA],
    ],0,0,0,$rdc_couloir_xh);
    piece.translateX(mur_e40+$rdc_salledeau2_AB+mur_e20);
    piece.translateY(mur_e40+$rdc_piece1_HA+mur_e20);
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
const RDC_DegagementHall = function(etage)
{
    const piece = UI.Piece(etage,'RCDGT D\xE9gagement');
    piece.color_sol = colors_sol_marbre1;
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
    ],0,0,0,$rdc_couloir_xh);
    piece.translateX(mur_e40+$rdc_salledeau2_AB+mur_e20+$rdc_piece1_AB+mur_e20+$rdc_salledeau1_AB+mur_e20+$rdc_wc_AB+mur_e20);
    piece.translateY(mur_e40+$rdc_entree_BC+$rdc_entree_CD+$rdc_entree_DE+mur_e20);
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
    piece.image_sol = image_sol_parquet;
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
    piece.image_sol = image_sol_parquet;
    UI.Sol(piece,[
        [$rdc_piece2_AB,0],
        [0,$rdc_piece2_BC],
        [-$rdc_piece2_CD,0],
        [0,-$rdc_piece2_DA],
    ],0,0,0,$rdc_piece2_xh);
    piece.translateX(mur_e40);
    piece.translateY(mur_e40);
};
const RDC_Entree = function(etage)
{
    /* TODO murs */
    /* TODO marches */
    const piece = UI.Piece(etage,'RCE Entr\xE9e');
    piece.color_sol = colors_sol_marbre1;

    UI.Sol(piece,[
        [0.200+$rdc_entree_AB+0.200,0],
        [0,1.200],
        [-0.200-$rdc_entree_AB-0.200,0],
        [0,-1.200],
    ],-0.050-0.120-0.120-0.120-0.120,-0.200,-1.200-0.150);

    UI.Sol(piece,[
        [$rdc_entree_AB,0],
        [0,$rdc_entree_BC],
        [-$rdc_entree_AB,0],
        [0,-$rdc_entree_HA],
    ],-0.120-0.120-0.120-0.120);

    UI.Sol(piece,[
        [$rdc_entree_AB-0.400-0.400,0],
        [0,0.200],
        [-$rdc_entree_AB+0.400+0.400,0],
        [0,-0.200],
    ],-0.120-0.120-0.120,0.400,$rdc_entree_BC);
    UI.Sol(piece,[
        [$rdc_entree_AB-0.400-0.400,0],
        [0,0.200],
        [-$rdc_entree_AB+0.400+0.400,0],
        [0,-0.200],
    ],-0.120-0.120,0.400,$rdc_entree_BC+0.200);
    UI.Sol(piece,[
        [$rdc_entree_AB-0.400-0.400,0],
        [0,0.200],
        [-$rdc_entree_AB+0.400+0.400,0],
        [0,-0.200],
    ],-0.120,0.400,$rdc_entree_BC+0.200+0.200);

    UI.Sol(piece,[
        [0.400,0],
        [0,0.600],
        [$rdc_entree_AB-0.400-0.400,0],
        [0,-0.600],
        [0.400,0],
        [0,$rdc_entree_CD],
        [-$rdc_entree_DE,0],
        [0,$rdc_entree_EF],
        [-$rdc_entree_FG,0],
        [0,-$rdc_entree_GH],
    ],0,0,$rdc_entree_BC);

    piece.translateX(mur_e40+$rdc_salledeau2_AB+mur_e20+$rdc_piece1_AB+mur_e20+$rdc_salledeau1_AB+mur_e20+$rdc_wc_AB+mur_e20);
    piece.translateY(0);
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
