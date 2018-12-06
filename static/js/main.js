function healthPrediction() {
    var sex = document.getElementsByName("sex").value;
    var flSex = 0;
    if(sex="male"){
        flSex=1;
    } 
    
    var age = parseInt(document.getElementById("age").value);
    var ekg = parseInt(document.getElementById("ekg").value);
    var chestpain = parseInt(document.getElementById("chestpain").value);
    var numVessels = parseInt(document.getElementById("vessels").value);
    var peakExercise = parseInt(document.getElementById("peak-exercise").value);
    var restingBP = parseInt(document.getElementById("resting-bp").value);
    var fastingBloodSugar = document.querySelector('input[name="bloodsugar"]:checked').value;

    var sugarGT120 = 0;
    if (fastingBloodSugar = "gt120"){
        sugarGT120 = 1;
    }

    var depression = parseInt(document.getElementById("depression").value);
    var cholestrol = parseInt(document.getElementById("cholestrol").value);
    var heartRate = parseInt(document.getElementById("heart-rate").value);
    var angina = document.querySelector('input[name="angina"]:checked').value;
    var anginaValue = 0;
    if (angina = "yes"){
        anginaValue = 1;
    }
    
    var heartDiseaseProb = 0;
    heartDiseaseProb = (0.35281083 * peakExercise) + 
                        (0.00134272 * restingBP) + 
                        (0.61461895 * chestpain) +
                        (0.97321156 * numVessels) - 
                        (0.21758949 * sugarGT120) + 
                        (0.15992521 * ekg) + 
                        (0.00381237 * cholestrol) + 
                        (0.54244358 * depression) + 
                        (1.33501651 * flSex) - 
                        (0.04351537 * age) - 
                        (0.02687004 * heartRate) + 
                        (1.04901422 * anginaValue);

    document.getElementById("results").classList.remove('hidden');
    if (heartDiseaseProb<0){
        document.getElementById("heartdisease").classList.add('hidden');
        document.getElementById("noheartdisease").classList.remove('hidden');
    } else {
        document.getElementById("noheartdisease").classList.add('hidden');
        document.getElementById("heartdisease").classList.remove('hidden');  
    }


}
