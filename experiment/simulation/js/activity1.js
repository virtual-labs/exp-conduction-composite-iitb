let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Conduction through composite Cylinder</h5>
        <p>Learning Objective: Find heat transfer and temperature outside of the steel pipe</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Cylinder", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>Hot air at a temperature of T<sub>1</sub> = ${t1_pipe_temp}&deg; C is flowing through a steel pipe of inside diameter = ${inside_diameter_pipe} cm. Given that K<sub>steel</sub> = ${k_steel} w/m-k and thickness = ${thickness_pipe}cm. The Pipe is covered with two layers of different insulating materials of thickness ${pipe_insulator1_thickness}cm & ${pipe_insulator2_thickness}cm and corresponding thermal conductivity are ${pipe_insulator1_conductivity} w/m-k & ${pipe_insulator2_conductivity} w/m-k. The inside heat transfer coefficient is ${inside_htc_pipe} w/m<sup>2</sup>-k and the outside heat transfer coefficient is ${outside_htc_pipe} w/m<sup>2</sup>-k. The ambient temperature is T<sub>2</sub> = ${t2}&deg C</h5>

        <h5>If the length of the pipe is ${pipe_length} m. Find the heat transfer & the temperature at the outside surface.</h5>

        <br>

        <div style='text-align: center;'>
        <img src='images/sim1.webp' style='width: 18vw;' />
        </div>

        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='sol1();'  id='temp-btn-0' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function sol1() {
    let temp_btn = document.getElementById('temp-btn-0');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Inside Convective Resistance", "tb1-st1");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st1'>


        <p> 
                Inside Convective Resistance
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_1 = \\frac{1}{h_1 A_1} = \\frac{1}{${inside_htc_pipe} \\times (2 \\pi r_1 L)} k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                r<sub>1</sub> = inside diameter of steel pipe / 2  (in m) <br>
                h<sub>1</sub> = Inside heat transfer coefficient of pipe  (w/m<sup>2</sup>-k) <br>
                L = Lenght of Pipe (in m)
        </p>

        <p style='text-align: center;'> 
                R<sub>1</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp1' /><span id='dsp-inp1'></span></span> k/w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol1();'  id='temp-btn-11' >Verify</button></div>


    </div>

    `;
    pipe_r_1 = (inside_diameter_pipe / 2) * 0.01;
    pipe_R_1 = 1 / (inside_diameter_pipe * (2 * Math.PI * pipe_r_1 * pipe_length));
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st1'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    temp_btn.remove();
}
function verify_sol1() {
    let btn = document.getElementById('temp-btn-11');
    console.log(pipe_R_1);
    let inp1 = document.getElementById('a1-inp1');
    let sp1 = document.getElementById('dsp-inp1');
    if (!verify_values(parseFloat(inp1.value), pipe_R_1)) {
        alert('R1 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(pipe_R_1).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol2();
}
function sol2() {
    let btn_text = get_collapse_btn_text("Resistance of Steel", "tb1-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st2'>


        <p> 
                Resistance of Steel
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_2 = \\frac{ln\\frac{r_2}{r_1}}{2 \\pi L K_{steel}}  \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                r<sub>2</sub> = r<sub>2</sub> + thickness of pipe (in meters)  <br>
        </p>

        <p style='text-align: center;'> 
                R<sub>2</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp2' /><span id='dsp-inp2'></span></span> k/w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol2();'  id='temp-btn-12' >Verify</button></div>


    </div>

    `;
    pipe_r_2 = pipe_r_1 + thickness_pipe / 100;
    pipe_R_2 = Math.log(pipe_r_2 / pipe_r_1) / (2 * Math.PI * pipe_length * k_steel);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol2() {
    let btn = document.getElementById('temp-btn-12');
    console.log(pipe_R_2);
    let inp1 = document.getElementById('a1-inp2');
    let sp1 = document.getElementById('dsp-inp2');
    if (!verify_values(parseFloat(inp1.value), pipe_R_2)) {
        alert('R2 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(pipe_R_2).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol3();
}
function sol3() {
    let btn_text = get_collapse_btn_text("Resistance of First Layer", "tb1-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st3'>


        <p> 
                Resistance of First Layer
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_3 = \\frac{ln\\frac{r_3}{r_2}}{2 \\pi L K_{insulator1}}  \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                r<sub>3</sub> = r<sub>2</sub> + thickness of first insulator (in meters)  <br>
                K<sub>insulator1</sub> = Thermal conductivity of first insulator
        </p>

        <p style='text-align: center;'> 
                R<sub>3</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp3' /><span id='dsp-inp3'></span></span> k/w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol3();'  id='temp-btn-13' >Verify</button></div>


    </div>

    `;
    pipe_r_3 = pipe_r_2 + pipe_insulator1_thickness / 100;
    pipe_R_3 = Math.log(pipe_r_3 / pipe_r_2) / (2 * Math.PI * pipe_length * pipe_insulator1_conductivity);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol3() {
    let btn = document.getElementById('temp-btn-13');
    console.log(pipe_R_3);
    let inp1 = document.getElementById('a1-inp3');
    let sp1 = document.getElementById('dsp-inp3');
    if (!verify_values(parseFloat(inp1.value), pipe_R_3)) {
        alert('R3 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(pipe_R_3).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol4();
}
function sol4() {
    let btn_text = get_collapse_btn_text("Resistance of Second Layer", "tb1-st4");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st4'>


        <p> 
                Resistance of Second Layer
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_4 = \\frac{ln\\frac{r_4}{r_3}}{2 \\pi L K_{insulator2}}  \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                r<sub>4</sub> = r<sub>3</sub> + thickness of second insulator (in meters)  <br>
                K<sub>insulator2</sub> = Thermal conductivity of second insulator
        </p>

        <p style='text-align: center;'> 
                R<sub>4</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp4' /><span id='dsp-inp4'></span></span> k/w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol4();'  id='temp-btn-14' >Verify</button></div>


    </div>

    `;
    pipe_r_4 = pipe_r_3 + pipe_insulator2_thickness / 100;
    pipe_R_4 = Math.log(pipe_r_4 / pipe_r_3) / (2 * Math.PI * pipe_length * pipe_insulator2_conductivity);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st4'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol4() {
    let btn = document.getElementById('temp-btn-14');
    console.log(pipe_R_4);
    let inp1 = document.getElementById('a1-inp4');
    let sp1 = document.getElementById('dsp-inp4');
    if (!verify_values(parseFloat(inp1.value), pipe_R_4)) {
        alert('R4 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(pipe_R_4).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol5();
}
function sol5() {
    let btn_text = get_collapse_btn_text("Outside Convective Resistance", "tb1-st5");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st5'>


        <p> 
                Outside Convective Resistance
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_5 = \\frac{1}{h_2 A_2} = \\frac{1}{h_2 \\times 2 \\pi r_4 L} \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                h<sub>2</sub> = Outside Heat Transfer Coefficient of pipe <br>
                A<sub>2</sub> = Curved surface area of Steel Pipe <br>
                r<sub>4</sub> = ${pipe_r_4} m
        </p>

        <p style='text-align: center;'> 
                R<sub>5</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp5' /><span id='dsp-inp5'></span></span> k/w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol5();'  id='temp-btn-15' >Verify</button></div>


    </div>

    `;
    pipe_R_5 = 1 / (outside_htc_pipe * Math.PI * pipe_r_4 * pipe_length);
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st5'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol5() {
    let btn = document.getElementById('temp-btn-15');
    console.log(pipe_R_5);
    let inp1 = document.getElementById('a1-inp5');
    let sp1 = document.getElementById('dsp-inp5');
    if (!verify_values(parseFloat(inp1.value), pipe_R_5)) {
        alert('R5 is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(pipe_R_5).toFixed(8)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    sol6();
}
function sol6() {
    let btn_text = get_collapse_btn_text("Total Resistance and Outside Surface Temperature", "tb1-st6");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st6'>


        <p> 
                Total Resistance
        </p>

        <div style='text-align: center;'>
        <img src='images/sim2.webp' style='width: 30vw;' />
        </div>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{total} = R_1 + R_2 + R_3 + R_4 + R_5 \\ \\ k/w $$
                </span>
                
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{1} = ${pipe_R_1.toFixed(9)} \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{2} = ${pipe_R_2.toFixed(9)} \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{3} = ${pipe_R_3.toFixed(9)} \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{4} = ${pipe_R_4.toFixed(9)} \\ \\ k/w $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ R_{5} = ${pipe_R_5.toFixed(9)} \\ \\ k/w $$
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
                T<sub>1</sub> = Hot air temperature (in celcius) <br>
                T<sub>2</sub> = Ambient Temperature <br>
        </p>

        <p style='text-align: center;'> 
                Q = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp6' /><span id='dsp-inp6'></span></span> w
        </p>

        <p> 
                Temperature at outside surface
        </p>

        <p style='text-align: center;'> 
            <span style='display: inline-block;' >
                $$ Q = \\frac{T_s - T_2}{R_5} w $$
            </span>
            <span style='display: inline-block;' >
                $$ T_s = (QR_5 + T_2) \\deg C $$
            </span>
        </p>

        <p style='text-align: center;'> 
                T<sub>s</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp7' /><span id='dsp-inp7'></span></span>&deg; C 
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol6();'  id='temp-btn-16' >Verify</button></div>


    </div>

    `;
    pipe_R_T = pipe_R_1 + pipe_R_2 + pipe_R_3 + pipe_R_4 + pipe_R_5;
    Q_pipe = (t1_pipe_temp - t2) / pipe_R_T;
    T_s_pipe = (Q_pipe * pipe_R_5) + t2;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st6'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol6() {
    let btn = document.getElementById('temp-btn-16');
    console.log(`Q_s = ${Q_pipe} and T_s = ${T_s_pipe}`);
    let inp1 = document.getElementById('a1-inp6');
    let sp1 = document.getElementById('dsp-inp6');
    let inp2 = document.getElementById('a1-inp7');
    let sp2 = document.getElementById('dsp-inp7');
    if (!verify_values(parseFloat(inp1.value), Q_pipe)) {
        alert('Q is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), T_s_pipe)) {
        alert('Outside surface temperature is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(Q_pipe).toFixed(8)}`;
    inp2.remove();
    sp2.innerHTML = `${(T_s_pipe).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map