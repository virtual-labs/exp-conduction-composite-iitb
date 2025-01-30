function start_act4() {
    let btn_text = get_collapse_btn_text("Plot", "tb4-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb4-box'>
        </br>
        <canvas id='myChart'></canvas>
    </div>

    `;
    maindiv.innerHTML += text;
    setTimeout(() => {
        show_step('tb4-box');
        //load_x_values(); 
        plot();
    }, 400);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function load_x_values() {
    //tab4_x = [];
    tab4_x[0] = [
        (-1 + Math.sqrt(1 + (4 * (alpha / 2) * (a)))) / (2 * (alpha / 2)),
        t_x,
        (-1 + Math.sqrt(1 - (4 * (alpha / 2) * (c * (10 / 100) - a)))) / (2 * (alpha / 2))
    ];
    tab4_x[1] = [
        a2,
        t_x2,
        a2 - c2 * (10 / 100)
    ];
    tab4_x[2] = [
        (-1 + Math.sqrt(1 + (4 * (alpha3 / 2) * (a3)))) / (2 * (alpha3 / 2)),
        t_x3,
        (-1 + Math.sqrt(1 - (4 * (alpha3 / 2) * (c3 * (10 / 100) - a3)))) / (2 * (alpha3 / 2))
    ];
}
function plot() {
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: tab4_y,
            datasets: [
                {
                    label: `alpha = ${alpha}`,
                    data: tab4_x[0],
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true
                },
                {
                    label: `alpha = ${alpha2}`,
                    data: tab4_x[1],
                    fill: false,
                    borderColor: 'red',
                    tension: 0.5,
                    showLine: true
                },
                {
                    label: `alpha = ${alpha3}`,
                    data: tab4_x[2],
                    fill: false,
                    borderColor: 'green',
                    tension: 0.5,
                    showLine: true
                },
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Temperature (celcius)',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Thickness (cm)',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `Temperature variation with Thickness`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
}
//start_act4();
//# sourceMappingURL=activity4.js.map