const calculator = document.getElementById('calculator');
const weight_lifted = document.getElementById('weight-lifted');
const reps_lifted = document.getElementById('reps-lifted');
const max_weight = document.getElementById('max-weight');
const submit_button = document.getElementById('submit');


function calc_max(weight_lifted, reps_lifted) {
        alert("clicked");
        const result = (Number(weight_lifted) * 0.033) * Number(reps_lifted);
        const max = Number(weight_lifted) + result;
        alert(max);
}


submit_button.addEventListener('click', calc_max(weight_lifted, reps_lifted));

