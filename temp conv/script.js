function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let resultText = '';

    if (isNaN(temperature)) 
        {
        resultText = 'Please enter a valid temperature.';
    } 
    else 
    {
        switch (unit) 
        {
            case 'C':
                const toF = (temperature * 9/5) + 32;
                const toK = temperature + 273.15;
                resultText = `${temperature}°C is equal to ${toF.toFixed(2)}°F and ${toK.toFixed(2)}K.`;
                break;
            case 'F':
                const toCFromF = (temperature - 32) * 5/9;
                const toKFromF = toCFromF + 273.15;
                resultText = `${temperature}°F is equal to ${toCFromF.toFixed(2)}°C and ${toKFromF.toFixed(2)}K.`; 
                break;
            case 'K':
                const toCFromK = temperature - 273.15;
                const toFFromK = (toCFromK * 9/5) + 32;
                resultText =`${temperature}K is equal to ${toCFromK.toFixed(2)}°C and ${toFFromK.toFixed(2)}°F.`; 
                break;
        }
    }
    document.getElementById('result').innerText = resultText;
}


// function convertTemperature() {
//     const temperature = parseFloat(document.getElementById('temperature').value);
//     const unit = document.getElementById('unit').value;
//     let resultText = '';

//     if (isNaN(temperature)) {
//         resultText = 'Please enter a valid temperature.';
//     } else {
//         switch (unit) {
//             case 'C':
//                 const toF = (temperature * 9/5) + 32;
//                 const toK = temperature + 273.15;
//                 resultText = `${temperature}°C is equal to ${toF.toFixed(2)}°F and ${toK.toFixed(2)}K.`;
//                 break;
//             case 'F':
//                 const toCFromF = (temperature - 32) * 5/9;
//                 const toKFromF = toCFromF + 273.15;
//                 resultText = `${temperature}°F is equal to ${toCFromF.toFixed(2)}°C and ${toKFromF.toFixed(2)}K.`; 
//                 break;
//             case 'K':
//                 const toCFromK = temperature - 273.15;
//                 const toFFromK = (toCFromK * 9/5) + 32;
//                 resultText = `${temperature}K is equal to ${toCFromK.toFixed(2)}°C and ${toFFromK.toFixed(2)}°F.`; 
//                 break;
//         }
//     }
//     document.getElementById('result').innerText = resultText;
// }
