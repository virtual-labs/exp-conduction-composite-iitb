// current experiment variables
let thickness = 10; //in cm
let len = 5; //in m
let height = 4; //in m
let left_temp = parseInt((90 + Math.random() * 10).toFixed(0)); // in degreee celcius
let right_temp = parseInt((30 + Math.random() * 5).toFixed(0)); // in degreee celcius
let k_0 = parseInt((50 + Math.random() * 15).toFixed(0));
//alpha values for all activities
let alpha = 0.5;
let alpha2 = 0;
let alpha3 = -0.01;
let x = 5; // in cm
//for activity 1 calculation
let c = 0;
let t_x = 0;
let a = 0;
//for activity 2 calculation
let c2 = 0;
let t_x2 = 0;
let a2 = 0;
//for activity 3 calculation
let c3 = 0;
let t_x3 = 0;
let a3 = 0;
//data table for chart
let tab4_y = [0, 5, 10];
let tab4_x = [
    [
        100,
        73.59100475585703,
        30
    ],
    [
        100,
        65,
        30
    ],
    [
        100,
        50.50252531694167,
        30.000000000000004
    ]
];
//current experiment variables for activity 1
let t1_pipe_temp = parseInt((50 + Math.random() * 10).toFixed(0)); //in celcius
let inside_diameter_pipe = parseInt((40 + Math.random() * 20).toFixed(0)); //in cm
let k_steel = 150; // w/m-k
let thickness_pipe = 5; // in cm
let pipe_length = parseInt((40 + Math.random() * 20).toFixed(0)); // in meters
let pipe_insulator1_thickness = parseInt((4 + Math.random() * 4).toFixed(0)); //in cm
let pipe_insulator2_thickness = parseInt((3 + Math.random() * 2).toFixed(0)); // in cm
let pipe_insulator1_conductivity = 0.23; // w/m-k
let pipe_insulator2_conductivity = 0.37; // w/m-k
let inside_htc_pipe = 58; //w/m2-k
let outside_htc_pipe = 12; //w/m2-k
let t2 = parseInt((25 + Math.random() * 5).toFixed(0)); // in celcius
//answers
let pipe_R_1 = 0;
let pipe_r_1 = 0;
let pipe_R_2 = 0;
let pipe_r_2 = 0;
let pipe_R_3 = 0;
let pipe_r_3 = 0;
let pipe_R_4 = 0;
let pipe_r_4 = 0;
let pipe_R_5 = 0;
let pipe_r_5 = 0;
let pipe_R_T = 0;
let Q_pipe = 0;
let T_s_pipe = 0;
//current experiment variables for activity 2
let t1_sphere_temp = -183; //in celcius
let inside_diameter_sphere = parseInt((40 + Math.random() * 20).toFixed(0)); //in cm
let k_sphere = 150; // w/m-k
let thickness_sphere = 5; // in cm
let sphere_length = parseInt((40 + Math.random() * 20).toFixed(0)); // in meters
let sphere_insulator1_thickness = parseInt((4 + Math.random() * 4).toFixed(0)); //in cm
let sphere_insulator2_thickness = parseInt((3 + Math.random() * 2).toFixed(0)); // in cm
let sphere_insulator1_conductivity = 0.23; // w/m-k
let sphere_insulator2_conductivity = 0.37; // w/m-k
let inside_htc_sphere = 58; //w/m2-k
let outside_htc_sphere = 12; //w/m2-k
//answers
let sphere_R_1 = 0;
let sphere_r_1 = (inside_diameter_sphere / 2) * 0.01;
let sphere_R_2 = 0;
let sphere_r_2 = 0;
let sphere_R_3 = 0;
let sphere_r_3 = 0;
let sphere_R_4 = 0;
let sphere_r_4 = 0;
let sphere_R_5 = 0;
let sphere_r_5 = 0;
let sphere_R_T = 0;
let Q_sphere = 0;
let T_s_sphere = 0;
//# sourceMappingURL=data.js.map