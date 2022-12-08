var classifier

function iniciar() {
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3ZvlZrK_D/model.json", modelReady)
}



function modelReady() {
    classifier.classify(goResults)
    
}

function goResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        var random_number_r = Math.floor(Math.random() * 255) + 1;
        var random_number_g = Math.floor(Math.random() * 255) + 1;
        var random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "Posso ouvir: "+ results[0].label 
        document.getElementById("result_confidence").innerHTML = "Precisão: "+ (results[0].confidence * 100).toFixed(2) + "%" 
    
        document.getElementById("result_label").style.color = "rgb(" + random_number_r+","+ random_number_g +","+ random_number_b+")"
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r+","+ random_number_g +","+ random_number_b+")"

        var img1 = document.getElementById("aliens-01")
        var img2 = document.getElementById("aliens-02")
        var img3 = document.getElementById("aliens-03")
        var img4 = document.getElementById("aliens-04")

        if (results[0].label=="Ruído de fundo") {
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if (results[0].label=="estalar dedos") {
            img2.src = "aliens-02.gif"
            img1.src = "aliens-01.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if (results[0].label=="palmas") {
            img3.src = "aliens-03.gif"
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img4.src = "aliens-04.png"
        } else {
            img4.src = "aliens-04.gif"
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
        }
    
    }
}