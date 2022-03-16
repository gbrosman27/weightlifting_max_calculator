const calculator = document.getElementById('calculator');


function calc_max(weight_lifted, reps_lifted) {
        console.log("clicked");
        console.log(weight_lifted);
        console.log(reps_lifted);

        const result = (weight_lifted * 0.033) * reps_lifted;
        const max = Math.round(Number(weight_lifted + result));
        const max_weight_result = document.getElementById('max_weight');

        return max_weight_result.innerHTML = max ;
};


calculator.addEventListener("submit", function(e) {
    e.preventDefault();

    const weight_lifted = Number(document.getElementById('weight_lifted').value);
    const reps_lifted = Number(document.getElementById('reps_lifted').value);

    calc_max(weight_lifted, reps_lifted);
    
});


// Reset button clears to 0
calculator.addEventListener("reset", function() {
    return document.getElementById("max_weight").innerHTML = 0;

});