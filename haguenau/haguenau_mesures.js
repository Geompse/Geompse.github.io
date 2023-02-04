$rdj_h = 2.200
$rdc_h = 2.980
$etage1_h = 2.620
$etage2_h = 2.760

$haies = 1.150 // releve laser

$voisins = [0,24.200,0];

$maison_L = 11.900 // releve laser
$maison_W1 = 19.700 // releve laser
$maison_W2 = 22.900 // releve laser

$cour_surface = 1025.000000;
$cour_B_maison_A = 4.340 // releve laser
$cour_C_maison_B = 3.980 // releve laser
$cour_E_maison_B = 17.800 // releve laser
$cour_F_maison_C = 16.800 // releve laser
$cour_H_maison_C = 3.420 // releve laser
$cour_I_maison_D = 3.220 // releve laser
$cour_K_maison_D = 5.080 // releve laser
$cour_L_maison_A = 4.650 // releve laser

//todo releves lasers
$cour_AB = $cour_L_maison_A; //faux
$cour_BC = $maison_W2; //approx
$cour_CD = $cour_E_maison_B; //faux
$cour_DE = $cour_C_maison_B+$haies; //faux
$cour_EF = $maison_L; //approx
$cour_FG = $cour_H_maison_C+$haies; //faux
$cour_GH = $cour_F_maison_C; //faux
$cour_HI = $maison_W2; //approx
$cour_IJ = $cour_K_maison_D; //faux
$cour_JK = $cour_I_maison_D+$haies; //faux
$cour_KL = $maison_L; //approx
$cour_LA = $cour_B_maison_A+$haies; //faux
$cour_degresAD = 0-Math.asin(($cour_C_maison_B-$cour_B_maison_A)/$cour_BC);
$cour_degresDG = 90-Math.asin(($cour_F_maison_C-$cour_E_maison_B)/$cour_EF);
$cour_degresGJ = 180-Math.asin(($cour_I_maison_D-$cour_H_maison_C)/$cour_HI);
$cour_degresJA = 270-Math.asin(($cour_L_maison_A-$cour_K_maison_D)/$cour_KL);
$cour_AD = $cour_AB+$cour_BC+$cour_CD;
$cour_Ch = -0.820; // releve laser
$cour_DG = 19.200 // releve laser
$cour_Hh = -1.010; // releve laser

/*
$maison_AhToit = 5.160 // releve laser
$maison_BhToit = 5.320 // releve laser
$rdj_Bh_terasse = 2.420 // releve laser
$rdj_Ch_terasse = 2.440 // releve laser
$maison_Ch_toit = 5.540 // releve laser
$maison_Dh_toit = 5.090 // releve laser

$maison_denivele_entree = 0.900 // releve laser
$marche_haute_escalier = 11.370 // releve laser
*/

$chenil_nord_AB = 2.420 // releve laser
$chenil_nord_Ah = 1.650 // releve laser
$chenil_nord_BC = 4.330 // releve laser
$chenil_nord_Bh = 1.600 // releve laser
$chenil_nord_CD = 2.880 // releve laser
$chenil_nord_Ch = 1.630 // releve laser
$chenil_nord_DE = 4.190 // releve laser
$chenil_nord_Dh = 1.640 // releve laser
$chenil_nord_EF = 0.440 // releve laser
$chenil_nord_Eh = 1.640 // releve laser
$chenil_nord_FA = 0.160 // releve laser
$chenil_nord_Fh = 1.650 // releve laser

$chenil_centre_xh = 3.120 // releve laser
$chenil_centre_AB = 2.510 // releve laser
$chenil_centre_Ah = 1.870 // releve laser
$chenil_centre_BC = 2.230 // releve laser
$chenil_centre_Bh = 1.870 // releve laser
$chenil_centre_CD = 2.510 // releve laser
$chenil_centre_Ch = 1.870 // releve laser
$chenil_centre_DA = 2.230 // releve laser
$chenil_centre_Dh = 1.870 // releve laser

$chenil_sud_xh = 1.540 // releve laser
$chenil_sud_AB = 1.050 // releve laser
$chenil_sud_BC = 2.210 // releve laser
$chenil_sud_CD = 0.830 // releve laser
$chenil_sud_DE = 2.270 // releve laser
$chenil_sud_EA = 0.920 // releve laser
$chenil_sud_B_cour_D = 27.300+$haies; // releve laser

$piscine_AB = 3.930 // releve laser
$piscine_Ah = -1.900; // releve laser
$piscine_BC = 7.870 // releve laser
$piscine_Bh = $piscine_Ah; // releve laser
$piscine_CD = 3.930 // releve laser
$piscine_Ch = -1.400; // releve laser
$piscine_DA = 7.870 // releve laser
$piscine_Dh = $piscine_Ch; // releve laser
$piscine_BmurW = 3.840 // releve laser
$piscine_BhaieL = 4.870 // releve laser

$jardin_surface = 754.000000;
$jardin_AB = 6.320+$haies; // releve laser
$jardin_BC = 10.800 // releve laser
$jardin_CD = 1.670 // releve laser
$jardin_DE = 5.020 // releve laser
$jardin_EF = 5.630+$haies+24.200-2.000; // faux
$jardin_FG = 25.000-$haies+6.320+$haies+10.800+1.670+3.000; // faux
$jardin_GH = 5.630+$haies; // releve laser
$jardin_HI = 25.000-$haies; // releve laser
$jardin_IJ = 5.630+24.200-2*$haies-2.000; // faux
$jardin_JA = $haies; // releve laser
$jardin_degresAD = 180+$cour_degresGJ;
$jardin_degresDF = 90-1; // approx
$jardin_degresFG = 180+0; // approx
$jardin_degresGH = 270+1; // approx
$jardin_degresHI = 0-2; // approx
$jardin_degresIA = 270+1; // approx
// W : 19.940 vs 20.700
// H : 35.460 vs 29.660

$rdj_plancher_w = $maison_W2;
$rdj_plancher_l = $maison_L;

$rdj_piece2_surface = 21.440000;
$rdj_piece2_xh = 2.180 // releve laser
$rdj_piece2_AB = 3.910 // releve laser
$rdj_piece2_BC = 5.500 // releve laser
$rdj_piece2_CD = 3.920 // releve laser
$rdj_piece2_DA = 5.500 // releve laser

$rdj_piece1_surface = 12.000000;
$rdj_piece1_xh = 2.210 // releve laser
$rdj_piece1_AB = 2.790 // releve laser
$rdj_piece1_BC = 0.250 // releve laser
$rdj_piece1_CD = 0.190 // releve laser
$rdj_piece1_DE = 3.740 // releve laser
$rdj_piece1_EF = 2.980 // releve laser
$rdj_piece1_FA = 3.980 // releve laser

$rdj_cave_AB = 1.210 // releve laser
$rdj_cave_Ah = 2.210 // releve laser
$rdj_cave_BC = 1.330 // releve laser
$rdj_cave_Bh = 2.210 // releve laser
$rdj_cave_CD = 1.460 // releve laser
$rdj_cave_Ch = 1.390 // releve laser
$rdj_cave_DE = 2.320 // releve laser
$rdj_cave_Dh = 1.390 // releve laser
$rdj_cave_EF = 1.120 // releve laser
$rdj_cave_Eh = 1.390 // releve laser
$rdj_cave_FG = 1.090 // releve laser
$rdj_cave_Fh = 1.390 // releve laser
$rdj_cave_GH = 0.350 // releve laser
$rdj_cave_Gh = 1.390 // releve laser
$rdj_cave_HA = 1.340 // releve laser
$rdj_cave_Hh = 1.390 // releve laser
$rdj_cave_FI = 1.690 // releve laser
$rdj_cave_Ih = 0.100 // releve laser
$rdj_cave_IA = 1.090 // releve laser

//todo
$rdj_garage_surface1 = 44.850000;
$rdj_garage_surface2 = 30.640000;
$rdj_garage_taille1 = 4.500 // delete
$rdj_garage_w1 = 12.160 //$rdj_garage_surface1/$rdj_garage_taille1+2.550; // delete
$rdj_garage_l1 = 4.910 //$rdj_garage_taille1; // delete
$rdj_garage_taille2 = 10.000-$rdj_garage_taille1; // delete
$rdj_garage_w2 = 8.140 //$rdj_garage_surface2/$rdj_garage_taille2+0.900+2.550; // delete
$rdj_garage_l2 = 6.200 //$rdj_garage_taille2; // delete
$rdj_garage_h = $rdj_h; // delete
$rdj_garage_xh = $rdj_h; // delete
$rdj_garage_Ah = $rdj_h;
$rdj_garage_Bh = $rdj_h;
$rdj_garage_Ch = $rdj_h;
$rdj_garage_Dh = $rdj_h;
$rdj_garage_Eh = $rdj_h;
$rdj_garage_Fh = $rdj_h;
$rdj_garage_AB = [$rdj_garage_w2,0,0];
$rdj_garage_BC = [0,$rdj_garage_l1+$rdj_garage_l2,0];
$rdj_garage_CD = [-$rdj_garage_w1,0,0];
$rdj_garage_DE = [0,-$rdj_garage_l1,0];
$rdj_garage_EF = [$rdj_garage_w1-$rdj_garage_w2,0,0];
$rdj_garage_FA = [0,-$rdj_garage_l2,0];
$rdj_garage_hDE = 2.090 // releve laser
$rdj_garage_hCD_1 = 2.100 // releve laser
$rdj_garage_hCD_2 = 2.110 // releve laser
$rdj_garage_hCD_3 = 2.160 // releve laser
$rdj_garage_hAB_1 = 2.120 // releve laser
$rdj_garage_hAB_2 = 2.120 // releve laser
$rdj_garage_hAB_3 = 2.170 // releve laser
//$rdj_garage_AB = 8.140 // releve laser
//$rdj_garage_BC = 11.100 // releve laser
//$rdj_garage_CD = 12.160 // releve laser
//$rdj_garage_DE = 4.910 // releve laser
//$rdj_garage_EF = 4.070 // releve laser
//$rdj_garage_FA = 6.200 // releve laser

$rdj_degagement_surface = 0;
$rdj_degagement_xh = 2.210 // releve laser
$rdj_degagement_ph = 2.280 // releve laser
$rdj_degagement_AB = 4.140+0.410; // releve laser /*TODO*/
$rdj_degagement_BC = 2.470 // releve laser
$rdj_degagement_CD = 3.130 // releve laser
$rdj_degagement_DE = 0.280 // releve laser
$rdj_degagement_EF = 0.350 // releve laser
$rdj_degagement_FG = 2.020 // releve laser
$rdj_degagement_GH = 1.390 // releve laser
$rdj_degagement_HI = 0.100 // releve laser
$rdj_degagement_IJ = 0.190 // releve laser
$rdj_degagement_JK = 1.100 // releve laser
$rdj_degagement_KL = 1.840 // releve laser
$rdj_degagement_LM = 0.350 // releve laser
$rdj_degagement_MN = 0.270 // releve laser
$rdj_degagement_NO = 0.630 // releve laser
$rdj_degagement_OP = 0.930 // releve laser
$rdj_degagement_PQ = 2.970 // releve laser
$rdj_degagement_QR = 2.640 // releve laser
$rdj_degagement_RS = 3.870 // releve laser
$rdj_degagement_SA = 0.710 // releve laser

$rdj_wc_surface = 0;
$rdj_wc_xh = 2.190 // releve laser
$rdj_wc_AB = 1.050 // releve laser
$rdj_wc_BC = 2.310 // releve laser
$rdj_wc_CD = 0.150 // releve laser
$rdj_wc_DE = 0.160 // releve laser
$rdj_wc_EF = 0.890 // releve laser
$rdj_wc_FA = 2.450 // releve laser

$rdj_cuve_surface = 0;
$rdj_cuve_xh = 2.200 // releve laser
$rdj_cuve_AB = 3.930 // releve laser
$rdj_cuve_BC = 5.350 // releve laser
$rdj_cuve_CD = 3.930 // releve laser
$rdj_cuve_DA = 5.350 // releve laser

$rdj_chaufferie_surface = 0;
$rdj_chaufferie_xh = 2.200 // releve laser
$rdj_chaufferie_AB = 3.640 // releve laser
$rdj_chaufferie_BC = 3.410 // releve laser
$rdj_chaufferie_CD = 0.200 // releve laser
$rdj_chaufferie_DE = 0.500 // releve laser
$rdj_chaufferie_EF = 3.450 // releve laser
$rdj_chaufferie_FA = 3.930 // releve laser

$rdj_buanderie_surface = 0;
$rdj_buanderie_xh = 2.210 // releve laser
$rdj_buanderie_AB = 2.420 // releve laser /*TODO*/
$rdj_buanderie_BC = 3.190 // releve laser /*TODO*/
$rdj_buanderie_CD = 2.390 // releve laser /*TODO*/
$rdj_buanderie_DA = 3.180 // releve laser /*TODO*/

$rdj_tech_surface = 0;
$rdj_tech_AB = 2.900 // releve laser
$rdj_tech_Ah = 1.400 // releve laser
$rdj_tech_BC = 0.660 // releve laser
$rdj_tech_Bh = 1.400 // releve laser
$rdj_tech_CD = 1.320 // releve laser
$rdj_tech_Ch = 1.400 // releve laser
$rdj_tech_CD_cheminee_w = 0.120 // releve laser
$rdj_tech_DE = 1.450 // releve laser
$rdj_tech_Dh = 2.260 // releve laser
$rdj_tech_EF = 2.910 // releve laser
$rdj_tech_Eh = 2.260 // releve laser
$rdj_tech_FG = 1.440 // releve laser
$rdj_tech_Fh = 2.260 // releve laser
$rdj_tech_GH = 1.330 // releve laser
$rdj_tech_Gh = 2.260 // releve laser
$rdj_tech_HA = 0.660 // releve laser
$rdj_tech_Hh = 1.400 // releve laser

$rdc_plancher_w = $maison_W1;
$rdc_plancher_l = $maison_L;

$rdc_terrasse_surface = 0;
$rdc_terrasse_AB = 3.340 // releve laser
$rdc_terrasse_BC = 11.410 // releve laser
$rdc_terrasse_CD = 3.290 // releve laser
$rdc_terrasse_DA = 11.410 // releve laser

$rdc_piece3_surface = 22.310000;
$rdc_piece3_xh = 3.020 // releve laser
$rdc_piece3_AB = 3.990 // releve laser
$rdc_piece3_BC = 4.950 // releve laser
$rdc_piece3_CD = 0.850 // releve laser
$rdc_piece3_DE = 0.630 // releve laser
$rdc_piece3_EF = 2.300 // releve laser
$rdc_piece3_FG = 0.620 // releve laser
$rdc_piece3_GH = 0.840 // releve laser
$rdc_piece3_HA = 4.970 // releve laser

$rdc_cuisine_surface = 12.500000;
$rdc_cuisine_xh = 3.010 // releve laser
$rdc_cuisine_AB = 2.820 // releve laser
$rdc_cuisine_BC = 0.330 // releve laser
$rdc_cuisine_CD = 0.270 // releve laser
$rdc_cuisine_DE = 3.770 // releve laser
$rdc_cuisine_EF = 3.080 // releve laser
$rdc_cuisine_FA = 4.090 // releve laser

$rdc_piece4_piece5_surface1 = 44.850000;
$rdc_piece4_piece5_surface2 = 30.640000;
$rdc_piece4_piece5_xh = 2.980;
$rdc_piece4_piece5_AB = 4.520 // releve laser
$rdc_piece4_piece5_Ah = 2.970 // releve laser
$rdc_piece4_piece5_BC = 11.190 // releve laser
$rdc_piece4_piece5_Bh = 2.980 // releve laser
$rdc_piece4_piece5_CD = 9.060 // releve laser
$rdc_piece4_piece5_Ch = 2.980 // releve laser
$rdc_piece4_piece5_DE = 4.950 // releve laser
$rdc_piece4_piece5_Dh = 2.980 // releve laser
$rdc_piece4_piece5_EF = 4.090 // releve laser
$rdc_piece4_piece5_Eh = 2.970 // releve laser
$rdc_piece4_piece5_FG = 2.290 // releve laser
$rdc_piece4_piece5_Fh = 2.980 // releve laser
$rdc_piece4_piece5_GH = 0.450; // calcul
$rdc_piece4_piece5_Gh = 2.980 // releve laser
$rdc_piece4_piece5_HA = 3.980 // releve laser
$rdc_piece4_piece5_Hh = 2.980 // releve laser
$rdc_piece4_piece5_BF = 7.950 // releve laser
$rdc_piece4_piece5_CF = 7.030 // releve laser
$rdc_piece4_piece5_DF = 6.340 // releve laser

$rdc_couloir_surface = 11.090000;
$rdc_couloir_xh = 3.020 // releve laser
$rdc_couloir_AB = 1.190 // releve laser
$rdc_couloir_BC = 2.250 // releve laser
$rdc_couloir_CD = 1.880 // releve laser
$rdc_couloir_DE = 2.160 // releve laser
$rdc_couloir_EF = 1.020 // releve laser
$rdc_couloir_FG = 0.590 // releve laser
$rdc_couloir_GH = 2.060 // releve laser
$rdc_couloir_HA = 5.010 // releve laser
$rdc_couloir_Fh = 0.750 // releve laser

//todo
$rdc_pallier_surface = 4.210000;
$rdc_pallier_taille = 1.950
$rdc_pallier_w = 2.280 //$surface/$taille;
$rdc_pallier_l = 1.340 //$taille;
//$rdc_pallier_h = $rdc_h;
$rdc_pallier_h = 3.100 // releve laser
$rdc_pallier_AB = 2.280 // releve laser
$rdc_pallier_BC = 1.340 // releve laser
$rdc_pallier_C_ = 2.440 // releve laser
$rdc_pallier___ = 1.080 // releve laser
$rdc_pallier_CD = 2.280 // releve laser
$rdc_pallier_DA = 1.400 // releve laser

$rdc_degagement_surface = 10.800000;
$rdc_hall_surface = 11.170000;
$rdc_degagement_hall_AB = 2.990 // releve laser
$rdc_degagement_hall_Ah = 3.010 // releve laser
$rdc_degagement_hall_BC = 3.730 // releve laser
$rdc_degagement_hall_Bh = 3.020 // releve laser
$rdc_degagement_hall_CD = 2.990 // releve laser
$rdc_degagement_hall_Ch = 3.010 // releve laser
$rdc_degagement_hall_DE = 0.350 // releve laser
$rdc_degagement_hall_Dh = 3.000 // releve laser
$rdc_degagement_hall_EF = 0.200 // releve laser
$rdc_degagement_hall_Eh = 3.000 // releve laser
$rdc_degagement_hall_FG = 0.350 // releve laser
$rdc_degagement_hall_Fh = 3.000 // releve laser
$rdc_degagement_hall_GH = 3.090 // releve laser
$rdc_degagement_hall_Gh = 3.010 // releve laser
$rdc_degagement_hall_HI = 1.830 // releve laser
$rdc_degagement_hall_Hh = 3.010 // releve laser
$rdc_degagement_hall_IJ = 0.630 // releve laser
$rdc_degagement_hall_Ih = 3.010 // releve laser
$rdc_degagement_hall_JK = 0.470 // releve laser
$rdc_degagement_hall_Jh = 3.010 // releve laser
$rdc_degagement_hall_KL = 0.620 // releve laser
$rdc_degagement_hall_Kh = 3.010 // releve laser
$rdc_degagement_hall_LM = 0.140 // releve laser
$rdc_degagement_hall_Lh = 3.010 // releve laser
$rdc_degagement_hall_MN = 0.080 // releve laser
$rdc_degagement_hall_Mh=$rdc_degagement_hall_Lh;//$rdc_degagement_hall_Mh = 0.800 // releve laser
$rdc_degagement_hall_NO = 0.550 // releve laser
$rdc_degagement_hall_Nh=$rdc_degagement_hall_Lh;//$rdc_degagement_hall_Nh = 0.800 // releve laser
$rdc_degagement_hall_OP = 1.590 // releve laser
$rdc_degagement_hall_Oh=$rdc_degagement_hall_Lh;//$rdc_degagement_hall_Oh = 0.800 // releve laser
$rdc_degagement_hall_PQ = 0.550 // releve laser
$rdc_degagement_hall_Ph=$rdc_degagement_hall_Lh;//$rdc_degagement_hall_Ph = 0.800 // releve laser
$rdc_degagement_hall_QR = 1.930 // releve laser
$rdc_degagement_hall_Qh = 3.010 // releve laser
$rdc_degagement_hall_RS = 1.590 // releve laser
$rdc_degagement_hall_Rh = 3.010 // releve laser
$rdc_degagement_hall_ST = 0.630 // releve laser
$rdc_degagement_hall_Sh = 3.010 // releve laser
$rdc_degagement_hall_TU = 0.140 // releve laser
$rdc_degagement_hall_Th = 3.010 // releve laser
$rdc_degagement_hall_UV = 0.520 // releve laser
$rdc_degagement_hall_Uh = 3.010 // releve laser
$rdc_degagement_hall_VW = 0.360 // releve laser
$rdc_degagement_hall_Vh = 3.010 // releve laser
$rdc_degagement_hall_WX = 0.200 // releve laser
$rdc_degagement_hall_Wh = 3.010 // releve laser
$rdc_degagement_hall_XA = 1.780 // releve laser
$rdc_degagement_hall_Xh = 3.010 // releve laser

$rdc_salledeau2_surface = 8.060000;
$rdc_salledeau2_xh = 3.010 // releve laser
$rdc_salledeau2_AB = 3.990 // releve laser
$rdc_salledeau2_BC = 2.090 // releve laser
$rdc_salledeau2_CD = 3.990 // releve laser
$rdc_salledeau2_DA = 2.060 // releve laser

$rdc_piece1_surface = 12.420000;
$rdc_piece1_xh = 3.020 // releve laser
$rdc_piece1_AB = 3.680 // releve laser
$rdc_piece1_BC = 3.460 // releve laser
$rdc_piece1_CD = 0.260 // releve laser
$rdc_piece1_DE = 0.600 // releve laser
$rdc_piece1_EF = 2.120 // releve laser
$rdc_piece1_FG = 2.250 // releve laser
$rdc_piece1_GH = 1.340 // releve laser
$rdc_piece1_HA = 1.790 // releve laser

$rdc_piece2_surface = 13.050000;
$rdc_piece2_xh = 3.010 // releve laser
$rdc_piece2_AB = 4.000 // releve laser
$rdc_piece2_BC = 3.250 // releve laser
$rdc_piece2_CD = 3.990 // releve laser
$rdc_piece2_DA = 3.250 // releve laser

$rdc_salledeau1_surface = 2.280000;
$rdc_salledeau1_xh = 3.020 // releve laser
$rdc_salledeau1_AB = 1.210 // releve laser
$rdc_salledeau1_BC = 1.840 // releve laser
$rdc_salledeau1_CD = 1.210 // releve laser
$rdc_salledeau1_DA = 1.860 // releve laser

$rdc_wc_surface = 2.150000;
$rdc_wc_xh = 3.010 // releve laser
$rdc_wc_AB = 1.160 // releve laser
$rdc_wc_BC = 1.860 // releve laser
$rdc_wc_CD = 1.150 // releve laser
$rdc_wc_DA = 1.860 // releve laser

$rdc_entree_surface = 7.310000;
$rdc_entree_AB = 2.990 // releve laser
$rdc_entree_Ah = 3.760 // releve laser
$rdc_entree_BC = 1.010 // releve laser
$rdc_entree_Bh = 3.770 // releve laser
$rdc_entree_CD = 0.950 // releve laser
$rdc_entree_Ch = 3.010 // releve laser
$rdc_entree_DE = 0.190 // releve laser
$rdc_entree_Dh = 3.020 // releve laser
$rdc_entree_EF = 0.550 // releve laser
$rdc_entree_Eh = 3.020 // releve laser
$rdc_entree_FG = 2.800 // releve laser
$rdc_entree_Fh = 3.020 // releve laser
$rdc_entree_GH = 1.490 // releve laser
$rdc_entree_Gh = 3.010 // releve laser
$rdc_entree_HA = 0.990 // releve laser
$rdc_entree_Hh = 3.010 // releve laser
$rdc_entree_BG = 3.850 // releve laser
$rdc_entree_BH = 3.120 // releve laser

$etage1_plancher_surface = 0;
$etage1_plancher_w = $rdc_plancher_w;
$etage1_plancher_l = $rdc_plancher_l;

//todo
$etage1_grenier1_surface = 00;
$etage1_grenier1_l = 11.540
$etage1_grenier1_w = 4.590-0.500;
$etage1_grenier1_h = 5.860 //$etage1_h+$etage2_h;
$etage1_grenier1_w2 = 0.100;
$etage1_grenier1_xh = 5.860 // releve laser
$etage1_grenier1_ph = 2.930 // releve laser
$etage1_grenier1_pad = 0.260 // releve laser
//$etage1_grenier1_w = 4.590 // releve laser
$etage1_grenier1_whh = 3.720 // releve laser
//$etage1_grenier1_l = 11.540 // releve laser
$etage1_grenier1_lhh = 9.370 // releve laser
$etage1_grenier1_hh = 0.900 // releve laser

$etage1_chambre4_surface = 13.340000;
$etage1_chambre4_xh = 2.610 // releve laser
$etage1_chambre4_AB = 2.610 // releve laser
$etage1_chambre4_BC = 0.850 // releve laser
$etage1_chambre4_CD = 0.450 // releve laser
$etage1_chambre4_DE = 2.280 // releve laser
$etage1_chambre4_EF = 0.460 // releve laser
$etage1_chambre4_FG = 0.950 // releve laser
$etage1_chambre4_GH = 2.620 // releve laser
$etage1_chambre4_HA = 4.050 // releve laser

$etage1_chambre1_surface = 14.140000;
$etage1_chambre1_xh = 2.610 // releve laser
$etage1_chambre1_AB = 2.550 // releve laser
$etage1_chambre1_BC = 1.200 // releve laser
$etage1_chambre1_CD = 0.500 // releve laser
$etage1_chambre1_DE = 2.190 // releve laser
$etage1_chambre1_EF = 0.500 // releve laser
$etage1_chambre1_FG = 1.200 // releve laser
$etage1_chambre1_GH = 2.570 // releve laser
$etage1_chambre1_HA = 4.580 // releve laser

//todo
$etage1_grenier2_surface = 48.000000-13.000000;
$etage1_grenier2_taille = 10.000
$etage1_grenier2_l = 11.540 /*4.800*/ /*2.140 3.660*/ //$taille;
$etage1_grenier2_w = $etage1_grenier1_w;//3.900+$etage1_grenier1_w-3.900-1.000; /*1.570*/ //$surface/$taille;
$etage1_grenier2_w2 = 3.900+1.570+0.500-$etage1_grenier1_w;
$etage1_grenier2_h = $etage1_grenier1_h;
$etage1_grenier2_wb = 1.570;
$etage1_grenier2_lb = $etage1_chambre1_HA+0.500;
//$etage1_grenier2_h = 2.990 // releve laser
$etage1_grenier2_W = 3.900 // releve laser
$etage1_grenier2_w1 = 1.570 // releve laser
$etage1_grenier2_l1 = 3.660 // releve laser
$etage1_grenier2_l2 = 2.140 // releve laser
$etage1_grenier2_L = 4.800 // releve laser

$etage1_degagement_surface = 18.090000;
$etage1_degagement_xh = 2.620 // releve laser
$etage1_degagement_AB = 2.480 // releve laser
$etage1_degagement_BC = 2.770 // releve laser
$etage1_degagement_CD = 0.830 // releve laser
$etage1_degagement_DE = 1.700 // releve laser
$etage1_degagement_EF = 2.280 // releve laser
$etage1_degagement_FG = 1.150 // releve laser
$etage1_degagement_GH = 3.270 // releve laser
$etage1_degagement_HI = 1.920 // releve laser
$etage1_degagement_IJ = 3.900 // releve laser
$etage1_degagement_JA = 1.340 // releve laser

$etage1_wc_surface = 1.650000;
$etage1_wc_xh = 2.630 // releve laser
$etage1_wc_AB = 1.180 // releve laser
$etage1_wc_BC = 1.490 // releve laser
$etage1_wc_CD = 0.950 // releve laser
$etage1_wc_DE = 0.190 // releve laser
$etage1_wc_EF = 0.230 // releve laser
$etage1_wc_FA = 1.300 // releve laser

$etage1_salledeau_surface = 3.530000;
$etage1_salledeau_xh = 2.630 // releve laser
$etage1_salledeau_AB = 2.460 // releve laser
$etage1_salledeau_BC = 1.470 // releve laser
$etage1_salledeau_CD = 2.460 // releve laser
$etage1_salledeau_DA = 1.470 // releve laser

$etage1_chambre2_surface = 14.580000;
$etage1_chambre2_xh = 2.620 // releve laser
$etage1_chambre2_AB = 3.760 // releve laser
$etage1_chambre2_BC = 1.210 // releve laser
$etage1_chambre2_CD = 0.980 // releve laser
$etage1_chambre2_DE = 0.560 // releve laser
$etage1_chambre2_EF = 0.970 // releve laser
$etage1_chambre2_FG = 2.250 // releve laser
$etage1_chambre2_GH = 3.760 // releve laser
$etage1_chambre2_HA = 4.000 // releve laser

$etage1_chambre3_surface = 16.030000;
$etage1_chambre3_xh = 2.620 // releve laser
$etage1_chambre3_AB = 3.710 // releve laser
$etage1_chambre3_BC = 3.030 // releve laser
$etage1_chambre3_CD = 1.020 // releve laser
$etage1_chambre3_DE = 1.060 // releve laser
$etage1_chambre3_EF = 2.690 // releve laser
$etage1_chambre3_FA = 4.110 // releve laser

$etage1_salledebain_surface = 6.510000;
$etage1_salledebain_xh = 2.630 // releve laser
$etage1_salledebain_AB = 2.480 // releve laser
$etage1_salledebain_BC = 2.710 // releve laser
$etage1_salledebain_CD = 2.480 // releve laser
$etage1_salledebain_DA = 2.710 // releve laser

//todo
$etage2_plancher_surface = 9.5000000/2;
$etage2_plancher_taille = 10.000/2+0.200;
$etage2_plancher_w = $etage2_plancher_surface/$etage2_plancher_taille;
$etage2_plancher_l = $etage2_plancher_taille+0.700;

//todo
$etage2_combles_surface = 9.5000000/2;
$etage2_combles_taille = 10.000/2+0.200;
$etage2_combles_l = $etage2_plancher_l-0.400;
$etage2_combles_w = $etage2_combles_surface/$etage2_combles_l;
//echo($etage2_combles_w,$etage2_combles_l);
$etage2_combles_h = $etage2_h;
$etage2_combles_xh = 2.760 // releve laser
//$etage2_combles_w = 9.760 // releve laser
//$etage2_combles_l = 6.070 // releve laser
