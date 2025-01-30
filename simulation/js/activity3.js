function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Find the temperature at given distance for alpha = ${alpha3}</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate Q", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <h5>A plane wall of thickness (b) ${thickness}cm, length ${len}m and height ${height}m. The temperature at the left and is maintained at ${left_temp}&deg; C and right end at ${right_temp}&deg; C. The conductivity is given by: </h5>

        <br>

        <p style='text-align: center;'> 
            <span style='display: inline-block;' >
                $$ K = K_0(1 + \\alpha T) $$
            </span>
        </p>

        <p style='text-align: center;'> 
            Where K<sub>0</sub> = ${k_0} and &alpha; = <span style='display: inline-block;' > $$ ${alpha3} $$
            </span>
        </p>

        <h5>Find the temperature at x = ${x}cm from left end.</h5>

       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='calculate_at_x3();'  id='temp-btn-0' >Verify</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function calculate_at_x3() {
    let btn_text = get_collapse_btn_text("Calculate temperature at x", "tb3-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-st2'>

        <p> 
            Now to get temperature at x = ${x}cm = ${(x / 100).toFixed(2)}m and b = ${thickness}cm = ${(thickness / 10).toFixed(1)}m          
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{1}{x} \\left[1 + \\frac{\\alpha}{2}(T_1 + T_x) \\right] (T_1 - T_x)  = \\frac{1}{b} \\left[1 + \\frac{\\alpha}{2}(T_1 + T_2) \\right] (T_1 - T_2) $$
                </span>
        </p>

        <p> 
            let's take R.H.S as a constant value c        
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{1}{b} \\left[1 + \\frac{\\alpha}{2}(T_1 + T_2) \\right] (T_1 - T_2) = c $$
                </span>
        </p>

        <p> 
            Now equation can be shown as:        
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ \\left[ T_1 + \\frac{\\alpha}{2}(T_1^{2} + T_1 T_x) \\right] - \\left[ T_x + \\frac{\\alpha}{2}(T_x^{2} + T_1 T_x) \\right] = cx $$
                </span> 
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ T_1 + \\frac{\\alpha}{2} T_1^2 = a $$
                </span>
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{\\alpha}{2} T_x^2 + T_x + (cx - a) = 0 $$
                </span> 
        </p>

        <p> 
            we will only consider positive root for this equation         
        </p>

        <p style='text-align: center; font-size: 22px;'> 
                <span style='display: inline-block;' >
                    $$ T_x = \\frac{-1 + \\sqrt{1^2 - 4 \\times \\frac{\\alpha}{2} \\times (cx - a)}}{2 \\times \\frac{\\alpha}{2}} $$
                </span> 
        </p>

        <div>
            Calculate: 

            <p style='text-align: center; font-size: 22px;'>
            c = <span style='display: inline-block; width: 80px;'><input type='text' id='inp-c3' class='form-control'  /></span>
            <span style='display: inline-block; width: 80px;' id='dsp-c3'></span>
            </p>

            <p style='text-align: center; font-size: 22px;'>
            T_x = <span style='display: inline-block; width: 80px;'><input type='text' id='inp-tx3' class='form-control'  /></span>
            <span style='display: inline-block; width: 80px;' id='dsp-tx3'></span>
            </p>
        </div>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify03();'  id='temp-btn-03' >Verify</button></div>


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb3-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations3();
}
function internal_calculations3() {
    c3 = (1 / (thickness / 100)) * (1 + (alpha3 / 2) * (left_temp + right_temp)) * (left_temp - right_temp);
    a3 = left_temp + (Math.pow(left_temp, 2)) * (alpha3 / 2);
    t_x3 = (-1 + Math.sqrt(1 - (4 * (alpha3 / 2) * (c3 * (x / 100) - a3)))) / (2 * (alpha3 / 2));
    console.log(`c = ${c3}, a = ${a3}, tx = ${t_x3}`);
}
function verify03() {
    let btn = document.getElementById('temp-btn-03');
    console.log(`c = ${c3}, a = ${a3}, tx = ${t_x3}`);
    let inp1 = document.getElementById('inp-c3');
    let sp1 = document.getElementById('dsp-c3');
    let inp2 = document.getElementById('inp-tx3');
    let sp2 = document.getElementById('dsp-tx3');
    if (!verify_values(parseFloat(inp1.value), c3)) {
        alert('c is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), t_x3)) {
        alert('Tx is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(c3).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(t_x3).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    start_act4();
}
//# sourceMappingURL=activity3.js.map