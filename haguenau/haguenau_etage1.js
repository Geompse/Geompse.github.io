import { UI } from './ui.js';

const mur_e10 = 0.100;
const mur_e20 = 0.200;
const mur_e40 = 0.400;

const image_sol_parquet = './sol_parquet.png';

const Etage1 = function(maison)
{
    const etage = UI.Etage(maison);
    Etage1_Piece2(etage);
    Etage1_Chambre4(etage);
    Etage1_Degagement(etage);
    Etage1_Chambre1(etage);
    Etage1_SalleDeBain1(etage);
    Etage1_WC(etage);
    Etage1_Chambre2(etage);
    Etage1_Piece1(etage);
    Etage1_Buanderie(etage);
    Etage1_Chambre3(etage);
    Etage1_SalleDeBain2(etage);
    etage.translateZ(mur_e20+$rdj_h+mur_e20+$rdc_h+mur_e20);
};

const Etage1_Piece2 = function(etage)
{
    const piece = UI.Piece(etage,'E1P2 Salle de jeux');
    piece.image_sol = image_sol_parquet;
};
const Etage1_Chambre4 = function(etage)
{
    const $etage1_chambre4_xh2 = $etage1_chambre4_xh-0.500;

    const piece = UI.Piece(etage,'E1C4 Chambre Alice');
    piece.image_sol = image_sol_parquet;
    UI.Sol(piece,[
        [$etage1_chambre4_AB,0],
        [0,$etage1_chambre4_BC],
        [$etage1_chambre4_CD,0],
        [0,$etage1_chambre4_DE],
        [-$etage1_chambre4_EF,0],
        [0,$etage1_chambre4_FG],
        [-$etage1_chambre4_GH,0],
        [0,-$etage1_chambre4_HA],
    ]);
    UI.MurV(piece,UI.RectangleGeometry($etage1_chambre4_HA,$etage1_chambre4_xh),0);
    UI.MurH(piece,UI.RectangleGeometry($etage1_chambre4_GH,$etage1_chambre4_xh,[0.68,0.8,0.93,1.2]),$etage1_chambre4_BC+$etage1_chambre4_DE+$etage1_chambre4_FG);
    UI.MurV(piece,UI.SimpleRelativePathGeometry([$etage1_chambre4_BC,0],[0,$etage1_chambre4_xh2],[$etage1_chambre4_DE,0],[0,-$etage1_chambre4_xh2],[$etage1_chambre4_FG,0],[0,$etage1_chambre4_xh],[-$etage1_chambre4_HA,0],[0,-$etage1_chambre4_xh]),$etage1_chambre4_AB,0);
    UI.MurH(piece,UI.RectangleGeometry($etage1_chambre4_EF,$etage1_chambre4_xh2),$etage1_chambre4_BC+$etage1_chambre4_DE,$etage1_chambre4_AB);
    UI.MurV(piece,UI.RectangleGeometry($etage1_chambre4_DE,$etage1_chambre4_xh2),$etage1_chambre4_AB+$etage1_chambre4_CD,$etage1_chambre4_BC);
    UI.MurH(piece,UI.RectangleGeometry($etage1_chambre4_CD,$etage1_chambre4_xh2),$etage1_chambre4_BC,$etage1_chambre4_AB);
    UI.MurH(piece,UI.RectangleGeometry($etage1_chambre4_AB,$etage1_chambre4_xh));
    UI.Plafond(piece,UI.RectangleGeometry($etage1_chambre4_AB,$etage1_chambre4_HA),$etage1_chambre4_xh);
    UI.Plafond(piece,UI.RectangleGeometry($etage1_chambre4_CD,$etage1_chambre4_DE),$etage1_chambre4_xh2,$etage1_chambre4_AB,$etage1_chambre4_BC);
    piece.translateX(mur_e40+$etage1_grenier1_w+mur_e20);
    piece.translateY(mur_e40+$etage1_chambre3_FA+mur_e20+$etage1_degagement_HI+mur_e20);
};
const Etage1_Degagement = function(etage)
{
    const piece = UI.Piece(etage,'E1DGT D\xE9gagement');
    piece.image_sol = image_sol_parquet;
};
const Etage1_Chambre1 = function(etage)
{
    const piece = UI.Piece(etage,'E1C1 Bureau Germain');
    piece.image_sol = image_sol_parquet;
    UI.Sol(piece,[
        [$etage1_chambre1_AB,0],
        [0,$etage1_chambre1_BC],
        [$etage1_chambre1_CD,0],
        [0,$etage1_chambre1_DE],
        [-$etage1_chambre1_EF,0],
        [0,$etage1_chambre1_FG],
        [-$etage1_chambre1_GH,0],
        [0,-$etage1_chambre1_HA],
    ],0,0,0,$etage1_chambre1_xh);
    piece.translateX(mur_e40+$etage1_grenier1_w+mur_e20+$etage1_chambre4_AB+$etage1_chambre4_CD+mur_e20+$etage1_degagement_EF+mur_e20);
    piece.translateY(mur_e40+$etage1_chambre2_HA+mur_e20+$etage1_wc_BC+mur_e20);
};
const Etage1_SalleDeBain1 = function(etage)
{
    const piece = UI.Piece(etage,'E1SDB1 Salle de bain parents');
};
const Etage1_WC = function(etage)
{
    const piece = UI.Piece(etage,'E1WC WC');
    UI.Sol(piece,[
        [$etage1_wc_AB,0],
        [0,$etage1_wc_BC],
        [-$etage1_wc_CD,0],
        [0,-$etage1_wc_DE],
        [-$etage1_wc_EF,0],
        [0,-$etage1_wc_FA],
    ],0,0,0,$etage1_wc_xh);
    piece.translateX(mur_e40+$etage1_grenier1_w+mur_e20+$etage1_chambre3_AB+mur_e20+$etage1_salledebain_AB+mur_e20);
    piece.translateY(mur_e40+$etage1_chambre2_HA+mur_e20);
};
const Etage1_Chambre2 = function(etage)
{
    const piece = UI.Piece(etage,'E1C2 Chambre parents');
    piece.image_sol = image_sol_parquet;
    UI.Sol(piece,[
        [$etage1_chambre2_AB,0],
        [0,$etage1_chambre2_BC],
        //[-$etage1_chambre2_CD,0],
        [0,$etage1_chambre2_DE],
        //[$etage1_chambre2_EF,0],
        [0,$etage1_chambre2_FG],
        [0,mur_e20],
        [0,$etage1_salledeau_BC],
        [-$etage1_salledeau_CD,0],
        [0,-$etage1_salledeau_DA],
        [0,-mur_e20],
        [-$etage1_chambre2_GH+$etage1_salledeau_AB,0],
        [0,-$etage1_chambre2_HA],
    ],0,0,0,$etage1_chambre2_xh);
    piece.translateX(mur_e40+$etage1_grenier1_w+mur_e20+$etage1_chambre3_AB+mur_e20+$etage1_salledebain_AB+mur_e20);
    piece.translateY(mur_e40);
};
const Etage1_Piece1 = function(etage)
{
    const piece = UI.Piece(etage,'E1P1 Dressing parents');
    piece.image_sol = image_sol_parquet;
};
const Etage1_Buanderie = function(etage)
{
    const piece = UI.Piece(etage,'E1B Buanderie');
};
const Etage1_Chambre3 = function(etage)
{
    const piece = UI.Piece(etage,'E1C3 Chambre Charles');
    piece.image_sol = image_sol_parquet;
    UI.Sol(piece,[
        [$etage1_chambre3_AB,0],
        [0,$etage1_chambre3_BC],
        [-$etage1_chambre3_CD,0],
        [0,$etage1_chambre3_DE],
        [-$etage1_chambre3_EF,0],
        [0,-$etage1_chambre3_FA],
    ],0,0,0,$etage1_chambre3_xh);
    piece.translateX(mur_e40+$etage1_grenier1_w+mur_e20);
    piece.translateY(mur_e40);
};
const Etage1_SalleDeBain2 = function(etage)
{
    const piece = UI.Piece(etage,'E1SDB2 Salle de bain enfants');
    UI.Sol(piece,[
        [$etage1_salledebain_AB,0],
        [0,$etage1_salledebain_BC],
        [-$etage1_salledebain_CD,0],
        [0,-$etage1_salledebain_DA],
    ],0,0,0,$etage1_salledebain_xh);
    piece.translateX(mur_e40+$etage1_grenier1_w+mur_e20+$etage1_chambre3_AB+mur_e20);
    piece.translateY(mur_e40);
};

export { Etage1 };
