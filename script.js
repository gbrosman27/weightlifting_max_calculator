const calculator = document.getElementById('calculator');


function calc_max(weight_lifted, reps_lifted) {
        console.log("clicked");
        console.log(weight_lifted);
        console.log(reps_lifted);

        const result = (weight_lifted * 0.033) * reps_lifted;
        const max = Math.round(Number(weight_lifted + result));
        const max_weight_result = document.getElementById('max_weight');

        calc_percentages(max);

        return max_weight_result.innerHTML = max;
};

function calc_percentages(max) {
    const percent90 = Math.round(max * .90);
    const percent80 = Math.round(max * .80);
    const percent70 = Math.round(max * .70);

    const resultpercent90 = document.getElementById("percent90");
    const resultpercent80 = document.getElementById("percent80");
    const resultpercent70 = document.getElementById("percent70");



    return resultpercent90.innerHTML = percent90, resultpercent80.innerHTML = percent80, resultpercent70.innerHTML = percent70;
}


calculator.addEventListener("submit", function(e) {
    e.preventDefault();

    const weight_lifted = Number(document.getElementById('weight_lifted').value);
    const reps_lifted = Number(document.getElementById('reps_lifted').value);

    calc_max(weight_lifted, reps_lifted);
    
});


// Reset button clears to 0
calculator.addEventListener("reset", function() {
    return document.getElementById("max_weight").innerHTML = 0, 
    document.getElementById("percent90").innerHTML = 0, 
    document.getElementById("percent80").innerHTML = 0, 
    document.getElementById("percent70").innerHTML = 0;

});