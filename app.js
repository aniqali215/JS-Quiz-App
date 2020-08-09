var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var container4 = document.getElementById('container4');
var container5 = document.getElementById('container5');

function ques1Func(){
    container1.style.display = 'none';
    container2.style.display = 'block';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
}
function ques2Func(){
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'block';
    container4.style.display = 'none';
    container5.style.display = 'none';
}
function ques3Func(){
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'block';
    container5.style.display = 'none';
}
function ques4Func(){
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'block';
}

function ques5Func(){
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';

    var num = 0;
    var q1_corr_ans = document.getElementById('q1_opt1');
    var q1_ans2 = document.getElementById('q1_opt2');
    var q1_ans3 = document.getElementById('q1_opt3');
    var q1_ans4 = document.getElementById('q1_opt4');

    if (q1_corr_ans.checked == true) {
        num++;

    }

    var q2_corr_ans = document.getElementById('q2_opt2');
    var q2_ans1 = document.getElementById('q2_opt1');
    var q2_ans3 = document.getElementById('q2_opt3');
    var q2_ans4 = document.getElementById('q2_opt4');

    if (q2_corr_ans.checked == true) {
        num++;

    }

    var q3_corr_ans = document.getElementById('q3_opt2');
    var q3_ans1 = document.getElementById('q3_opt1');
    var q3_ans3 = document.getElementById('q3_opt3');
    var q3_ans4 = document.getElementById('q3_opt4');

    if (q2_corr_ans.checked == true) {
        num++;

    }

    var q4_corr_ans = document.getElementById('q4_opt3');
    var q4_ans1 = document.getElementById('q4_opt1');
    var q4_ans2 = document.getElementById('q4_opt2');
    var q4_ans4 = document.getElementById('q4_opt4');

    if (q4_corr_ans.checked == true) {
        num++;

    }

    var q5_corr_ans = document.getElementById('q5_opt1');
    var q5_ans2 = document.getElementById('q5_opt2');
    var q5_ans3 = document.getElementById('q5_opt3');
    var q5_ans4 = document.getElementById('q5_opt4');

    if (q5_corr_ans.checked == true) {
        num++;

    }
    
    alert("Your Score is: "+ num++ +" & Your Percentage is: "+ (num/5)*100 +"%");

    
}
