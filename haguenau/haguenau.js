import { UI } from './ui.js';

const Haguenau = function()
{
    const maison = UI.Maison();
    Etage1(maison);
    /*if(rotation)
    {
        maison.translateX(rotation[4]);
        maison.translateY(-rotation[5]);
        maison.rotation.x = rotation[0];
        maison.rotation.y = rotation[1];
        maison.rotation.z = rotation[2];
    }*/
    return maison;
};
UI.run(Haguenau);

const Etage1 = function(maison)
{
    const etage = UI.Etage(maison);
    Etage1_Chambre4(etage);
    Etage1_Chambre1(etage);
    Etage1_Chambre2(etage);
    Etage1_Chambre3(etage);
};
const Etage1_Chambre4 = function(etage)
{
    const $etage1_chambre4_xh2 = $etage1_chambre4_xh-0.5;

    const piece = UI.Piece(etage,'Etage1_Chambre4');
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
    piece.translateX(-3.06-0.20-2.28-0.20);
};
const Etage1_Chambre1 = function(etage)
{
    const piece = UI.Piece(etage,'Etage1_Chambre1');
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
    piece.translateX(0);
    piece.translateY(-0.53);
};
const Etage1_Chambre3 = function(etage)
{
    const piece = UI.Piece(etage,'Etage1_Chambre3');
    UI.Sol(piece,[
        [$etage1_chambre3_AB,0],
        [0,$etage1_chambre3_BC],
        [-$etage1_chambre3_CD,0],
        [0,$etage1_chambre3_DE],
        [-$etage1_chambre3_EF,0],
        [0,$etage1_chambre3_FA],
    ],0,0,0,$etage1_chambre3_xh);
    piece.translateX(-3.06-0.20-2.28-0.20);
    piece.translateY(-4.110-0.20-1.92);
};
const Etage1_Chambre2 = function(etage)
{
    const piece = UI.Piece(etage,'Etage1_Chambre2');
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
    piece.translateY(-0.53-0.20-1.40-0.20-4.00);
};
