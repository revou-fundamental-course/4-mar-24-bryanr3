

function BMI(){/*fungsi untuk menghitung BMI*/
    event.preventDefault(); 
    let boy = document.getElementById("sex-pria").value;
    let girl = document.getElementById("sex-wanita").value;
    let bb = document.getElementById("brbd").value;
    console.log(bb.value)
    if(isNaN(parseInt(bb))){
        alert('isi berat badan ')
    }
    let age = document.getElementById("usia-id").value;
    console.log(age.value)
    if(isNaN(parseInt(age))){
        alert('isi usia')
    }
    let t = document.getElementById("tinggi-id").value;
    console.log(t.value)
    if(isNaN(parseFloat(t))){
        alert('isi tinggi badan ')
    }
    let bmi = parseInt(bb) / Math.pow(parseFloat(t),2);
    const resultDiv = document.querySelector(".result_div .result h2");
    resultDiv.textContent = bmi;
    /* javascript mendapatkan value dari perisian form dan dimasukan ke formula yang dikemudian dioutput di query tsb*/
    
    let bmicat = ''
    if(bmi <18.5) bmicat = "Underweight";
    else if(bmi <25) bmicat = "Normal";
    else if(bmi <=30) bmicat = "Overweight";
    else if(bmi > 30) bmicat ="Obese";
    const catdiv = document.querySelector(".cat_div .intepret h2");
    catdiv.textContent = bmicat;
    /*kemudian bmi category dianalisa dari bmi yang sudah dihitungkan dan dioutput ke query tersebut*/

    if (bmicat == "Underweight"){
        const catdiv = document.querySelector(".cat_div .intepret h2")
        catdiv.textContent='BMI anda di tingkat Underweight, maka dianjurkan untuk melakukan peningkatan berat badan'
        }
    else if(bmicat == "Normal"){
        const catdiv = document.querySelector(".cat_div .intepret h2")
        catdiv.textContent='BMI anda di tingkat Normal'
        }
    else if (bmicat =='Overweight'){
        const catdiv = document.querySelector(".cat_div .intepret h2")
        catdiv.textContent='BMI anda di tingkat Overweight, maka dianjurkan untuk melakukan penurunan berat badan'
        }
    else if(bmicat == "Obese"){
        const catdiv = document.querySelector(".cat_div .intepret h2")
        catdiv.textContent='BMI anda di tingkat Obese, maka dianjurkan untuk melakukan penurunan berat badan segera'
        }
}/*penjelasan dan saran dengan hasil BMI tsb*/

function Reset(){
    document.getElementById("sex-pria").value = '';
    document.getElementById("sex-wanita").value = '';
    document.getElementById("brbd").value = '';
    document.getElementById("usia-id").value = '';
    document.getElementById("tinggi-id").value = '';
}/* Kode untuk tombol ulang*/