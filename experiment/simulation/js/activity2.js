function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Conduction through Sphere</h5>
        <p>Learning Objective: Find heat transfer and temperature at the outside surface</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act2();' id='temp-btn-20' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act2() {
    let temp_btn = document.getElementById('temp-btn-20');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Sphere", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <h5>The liquid oxygen is kept inside hollow sphere of inside diameter ${inside_diameter_sphere} cm at ${t1_sphere_temp}&deg; C. The thickness is ${thickness_sphere}cm. Thermal Conductivity of steel is ${k_steel} w/m-k. The sphere is covered with two layers of different insulating materials of thickness ${sphere_insulator1_thickness} cm & ${sphere_insulator2_thickness} cm and their corresponding thermal conductivity are ${sphere_insulator1_conductivity} w/m-k & ${sphere_insulator2_conductivity} w/m-k. The outside heat transfer coefficient is ${outside_htc_sphere} w/m-k. The Ambient temperature is T<sub>2</sub> = ${t2}&deg; C.</h5>

        <h5>Find the heat transfer & the temperature at the outside surface.</h5>

        <br>

        <div style='text-align: center;'>
        <img src='images/sim1.webp' style='width: 18vw;' />
        </div>
 
        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='a2_sol2();'  id='temp-btn-200' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function a2_sol2() {
    let btn_text = get_collapse_btn_text("Resistance of Steel", "tb2-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st2'>


        <p> 
                Resistance of Steel
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_1 = \\frac{r_2 - r_1}{4 \\pi K_{steel} r_1 r_2}  \\ \\ k/w $$
                </span>
        </p> 

        <p style='text-align: center;'> 
                r<sub>2</sub> = r<sub>1</sub> + thickness of sphere (in meters)  <br>
                K<sub>steel</sub> = thermal conductivity of steel
        </p>

        <p style='text-align: center;'> 
                R<sub>1</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp2' /><span id='dsp2-inp2'></span></span> k/w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol2();'  id='temp-btn-22' >Verify</button></div>


    </div>

    `;
    sphere_r_2 = (inside_diameter_sphere / 2) * 0.01 + thickness_sphere / 100;
    sphere_R_2 = Math.log(sphere_r_2 / sphere_r_1) / (4 * Math.PI * k_steel * sphere_r_1 * sphere_r_2);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol2() {
    let btn = document.getElementById('temp-btn-200');
    console.log(sphere_R_2);
    let inp1 = document.getElementById('a2-inp2');
    let sp1 = document.getElementById('dsp2-inp2');
    if (!verify_values(parseFloat(inp1.value), sphere_R_2)) {
        alert('R1 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(sphere_R_2).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    a2_sol3();
}
function a2_sol3() {
    let btn_text = get_collapse_btn_text("Resistance of First Layer", "tb2-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st3'>


        <p> 
                Resistance of First Layer
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_2 = \\frac{r_3 - r_2}{4 \\pi K_{insulator1} r_3 r_2}  \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                r<sub>3</sub> = r<sub>2</sub> + thickness of first insulator (in meters)  <br>
                K<sub>insulator1</sub> = Thermal conductivity of first insulator
        </p>

        <p style='text-align: center;'> 
                R<sub>2</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp3' /><span id='dsp2-inp3'></span></span> k/w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol3();'  id='temp-btn-23' >Verify</button></div>


    </div>

    `;
    sphere_r_3 = sphere_r_2 + sphere_insulator1_thickness / 100;
    sphere_R_3 = (sphere_r_3 - sphere_r_2) / (4 * Math.PI * sphere_insulator1_conductivity * sphere_r_3 * sphere_r_2);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol3() {
    let btn = document.getElementById('temp-btn-23');
    console.log(sphere_R_3);
    let inp1 = document.getElementById('a2-inp3');
    let sp1 = document.getElementById('dsp2-inp3');
    if (!verify_values(parseFloat(inp1.value), sphere_R_3)) {
        alert('R2 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(sphere_R_3).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    a2_sol4();
}
function a2_sol4() {
    let btn_text = get_collapse_btn_text("Resistance of Second Layer", "tb2-st4");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st4'>


        <p> 
                Resistance of Second Layer
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_3 = \\frac{r_4 - r_3}{4 \\pi K_{insulator2} r_4 r_3}  \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                r<sub>4</sub> = r<sub>3</sub> + thickness of second insulator (in meters)  <br>
                K<sub>insulator2</sub> = Thermal conductivity of second insulator
        </p>

        <p style='text-align: center;'> 
                R<sub>3</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp4' /><span id='dsp2-inp4'></span></span> k/w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol4();'  id='temp-btn-24' >Verify</button></div>


    </div>

    `;
    sphere_r_4 = sphere_r_3 + sphere_insulator2_thickness / 100;
    sphere_R_4 = (sphere_r_4 - sphere_r_3) / (4 * Math.PI * sphere_insulator2_conductivity * sphere_r_4 * sphere_r_3);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st4'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol4() {
    let btn = document.getElementById('temp-btn-24');
    console.log(sphere_R_4);
    let inp1 = document.getElementById('a2-inp4');
    let sp1 = document.getElementById('dsp2-inp4');
    if (!verify_values(parseFloat(inp1.value), sphere_R_4)) {
        alert('R3 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(sphere_R_4).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    a2_sol5();
}
function a2_sol5() {
    let btn_text = get_collapse_btn_text("Outside Convective Resistance", "tb2-st5");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st5'>


        <p> 
                Outside Convective Resistance
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_4 = \\frac{1}{h_2 A_2} = \\frac{1}{h_2 \\times 4 \\pi r_4^2} \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                h<sub>2</sub> = Outside Heat Transfer Coefficient of sphere <br>
                A<sub>2</sub> = Curved surface area of Steel Pipe <br>
                r<sub>4</sub> = ${sphere_r_4} m
        </p>

        <p style='text-align: center;'> 
                R<sub>4</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp5' /><span id='dsp2-inp5'></span></span> k/w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol5();'  id='temp-btn-25' >Verify</button></div>


    </div>

    `;
    sphere_R_5 = 1 / (outside_htc_sphere * Math.PI * sphere_r_4 * sphere_length);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st5'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol5() {
    let btn = document.getElementById('temp-btn-25');
    console.log(sphere_R_5);
    let inp1 = document.getElementById('a2-inp5');
    let sp1 = document.getElementById('dsp2-inp5');
    if (!verify_values(parseFloat(inp1.value), sphere_R_5)) {
        alert('R4 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(sphere_R_5).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    a2_sol6();
}
function a2_sol6() {
    let btn_text = get_collapse_btn_text("Total Resistance and Outside Surface Temperature", "tb2-st6");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st6'>


        <p> 
                Total Resistance
        </p>

        <div style='text-align: center;'>
        <img src='images/sim3.webp' style='width: 30vw;' />
        </div>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{total} = R_1 + R_2 + R_3 + R_4 \\ \\ k/w $$
                </span>
                
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{1} = ${sphere_R_2.toFixed(9)} \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{2} = ${sphere_R_3.toFixed(9)} \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{3} = ${sphere_R_4.toFixed(9)} \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{4} = ${sphere_R_5.toFixed(9)} \\ \\ k/w $$
                </span>
        </p>


         <p> 
                Heat Transfer
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q = \\frac{T_1 - T_2}{R_{total}} w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                T<sub>1</sub> = Liquid Oxygen temperature (in celcius) <br>
                T<sub>2</sub> = Ambient Temperature <br>
        </p>

        <p style='text-align: center;'> 
                Q = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp6' /><span id='dsp2-inp6'></span></span> w
        </p>

        <p> 
                Temperature at outside surface
        </p>

        <p style='text-align: center;'> 
            <span style='display: inline-block;' >
                $$ Q = \\frac{T_s - T_2}{R_4} w $$
            </span>
            <span style='display: inline-block;' >
                $$ T_s = (QR_4 + T_2) \\deg C $$
            </span>
        </p>

        <p style='text-align: center;'> 
                T<sub>s</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp7' /><span id='dsp2-inp7'></span></span>&deg; C 
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol6();'  id='temp-btn-26' >Verify</button></div>


    </div>

    `;
    sphere_R_T = sphere_R_2 + sphere_R_3 + sphere_R_4 + sphere_R_5;
    Q_sphere = (t1_sphere_temp - t2) / sphere_R_T;
    T_s_sphere = (Q_sphere * sphere_R_5) + t2;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st6'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol6() {
    let btn = document.getElementById('temp-btn-26');
    console.log(`Q_s = ${Q_sphere} and T_s = ${T_s_sphere}`);
    let inp1 = document.getElementById('a2-inp6');
    let sp1 = document.getElementById('dsp2-inp6');
    let inp2 = document.getElementById('a2-inp7');
    let sp2 = document.getElementById('dsp2-inp7');
    if (!verify_values(parseFloat(inp1.value), Q_sphere)) {
        alert('Q is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), T_s_sphere)) {
        alert('Outside surface temperature is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(Q_sphere).toFixed(8)}`;
    inp2.remove();
    sp2.innerHTML = `${(T_s_sphere).toFixed(4)}`;
    alert('Your entered values are correct. Experiment Completed.');
    btn.style.display = 'none';
}
//# sourceMappingURL=activity2.js.map