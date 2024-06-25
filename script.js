
function calculateGrade() {
    let grade1 = parseFloat(document.getElementById('grade1').value);
    let grade2 = parseFloat(document.getElementById('grade2').value);
    let grade3 = parseFloat(document.getElementById('grade3').value);

    if (isNaN(grade1) || isNaN(grade2)) {
        document.getElementById('result').innerText = "Por favor, insira todas as notas.";
        return;
    }

    let mean = (grade1 + grade2) / 2;
    let passingGrade = 7.0;
    let resultText = `Sua média é ${mean.toFixed(2)}. `;

    if (mean >= passingGrade) {
        resultText += `Parabéns! Você passou direto!`;
    } else if (mean >= 4 && mean < 7) {
        if (document.getElementById('useFinalExam').checked && !isNaN(grade3)) {
            let meanWithPF = (mean + grade3) / 2;
            resultText = `Sua média final é ${meanWithPF.toFixed(2)}. `;
            if (meanWithPF >= 5) {
                resultText += `Parabéns! Você passou!`;
            } else {
                resultText += `Infelizmente você reprovou.`;
            }
        } else {
            let neededPoints = (10 - mean)
            resultText += `Quase lá! Você terá que tirar ${neededPoints.toFixed(2)} na PF.`;
        }
    } else {
        resultText += `Infelizmente você reprovou.`;
    }

    document.getElementById('result').innerText = resultText;
}
