import { UI } from './ui.js';

const Haguenau = function()
{
    const maison = UI.Maison();
    if(!document.location.hash || document.location.hash == '#SS' || document.location.hash == '#SOUSSOL' || document.location.hash == '#RJ' || document.location.hash == '#RDJ')
        RDJ(maison);
    if(!document.location.hash || document.location.hash == '#RC' || document.location.hash == '#RDC')
        RDC(maison);
    if(!document.location.hash || document.location.hash == '#E1' || document.location.hash == '#Etage1')
        Etage1(maison);
    if(!document.location.hash || document.location.hash == '#E2' || document.location.hash == '#Etage2' || document.location.hash == '#C' || document.location.hash == '#Combles')
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

const RDJ = function(maison)
{
    const etage = UI.Etage(maison);
    etage.translateZ(0.20);
};

const RDC = function(maison)
{
    const etage = UI.Etage(maison);
    RDC_Piece2(etage);
    etage.translateZ(0.20+$rdj_h+0.20);
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
    piece.translateX(0.40);
    piece.translateY(0.40);
};

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
    etage.translateZ(0.20+$rdj_h+0.20+$rdc_h+0.20);
};
const Etage1_Piece2 = function(etage)
{
    const piece = UI.Piece(etage,'E1P2 Salle de jeux');
};
const Etage1_Chambre4 = function(etage)
{
    const $etage1_chambre4_xh2 = $etage1_chambre4_xh-0.5;

    const piece = UI.Piece(etage,'E1C4 Chambre Alice');
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
    piece.translateX($etage1_grenier1_w+0.20);
    piece.translateY(0.40+$etage1_chambre3_FA+0.20+$etage1_degagement_HI+0.20);
};
const Etage1_Degagement = function(etage)
{
    const piece = UI.Piece(etage,'E1DGT D\xE9gagement');
};
const Etage1_Chambre1 = function(etage)
{
    const piece = UI.Piece(etage,'E1C1 Bureau Germain');
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
    piece.translateX($etage1_grenier1_w+0.20+$etage1_chambre4_AB+0.20+$etage1_degagement_EF+0.20);
    piece.translateY(0.40+$etage1_chambre2_HA+0.20+$etage1_wc_BC+0.20);
};
const Etage1_SalleDeBain1 = function(etage)
{
    const piece = UI.Piece(etage,'E1SDB1 Salle de bain parents');
};
const Etage1_WC = function(etage)
{
    const piece = UI.Piece(etage,'E1WC WC');
};
const Etage1_Chambre2 = function(etage)
{
    const piece = UI.Piece(etage,'E1C2 Chambre parents');
    UI.Sol(piece,[
        [$etage1_chambre2_AB,0],
        [0,$etage1_chambre2_BC],
        [-$etage1_chambre2_CD,0],
        [0,$etage1_chambre2_DE],
        [$etage1_chambre2_EF,0],
        [0,$etage1_chambre2_FG],
        [-$etage1_chambre2_GH,0],
        [0,-$etage1_chambre2_HA],
    ],0,0,0,$etage1_chambre2_xh);
    piece.translateX($etage1_grenier1_w+0.20+$etage1_chambre3_AB+0.20+$etage1_salledebain_AB+0.20);
    piece.translateY(0.40);
};
const Etage1_Piece1 = function(etage)
{
    const piece = UI.Piece(etage,'E1P1 Dressing parents');
};
const Etage1_Buanderie = function(etage)
{
    const piece = UI.Piece(etage,'E1B Buanderie');
};
const Etage1_Chambre3 = function(etage)
{
    const piece = UI.Piece(etage,'E1C3 Chambre Charles');
    UI.Sol(piece,[
        [$etage1_chambre3_AB,0],
        [0,$etage1_chambre3_BC],
        [-$etage1_chambre3_CD,0],
        [0,$etage1_chambre3_DE],
        [-$etage1_chambre3_EF,0],
        [0,-$etage1_chambre3_FA],
    ],0,0,0,$etage1_chambre3_xh);
    piece.translateX($etage1_grenier1_w+0.20);
    piece.translateY(0.40);
};
const Etage1_SalleDeBain2 = function(etage)
{
    const piece = UI.Piece(etage,'E1SDB2 Salle de bain enfants');
};

const Etage2 = function(maison)
{
    const etage = UI.Etage(maison);
    etage.translateZ(0.20+$rdj_h+0.20+$rdc_h+0.20+$etage1_h+0.20);
};
