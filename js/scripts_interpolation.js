let fiValue = [0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5, 5.2, 5.4, 5.6, 5.8, 6, 6.2, 6.4, 6.6, 6.8, 7, 7.2, 7.4, 7.6, 7.8, 8, 8.5, 9, 9.5, 10];
let aSection = [1000, 994, 981, 968, 953, 938, 920, 900, 877, 851, 821, 786, 747, 704, 660, 616, 572, 526, 475, 431, 393, 359, 330, 304, 281, 261, 242, 226, 211, 198, 186, 174, 164, 155, 147, 139, 132, 125, 119, 105, 94, 84, 76];
let bSection = [1000, 986, 967, 948, 927, 905, 881, 855, 826, 794, 760, 723, 683, 643, 602, 562, 524, 487, 453, 422, 392, 359, 330, 304, 281, 261, 242, 226, 211, 198, 186, 174, 164, 155, 147, 139, 132, 125, 119, 105, 94, 84, 76];
let cSection = [984, 956, 929, 901, 872, 842, 811, 778, 744, 709, 672, 635, 598, 562, 527, 493, 460, 430, 402, 375, 351, 329, 308, 289, 271, 255, 241, 226, 211, 198, 186, 174, 164, 155, 147, 139, 132, 125, 119, 105, 94, 84, 76];

var btn = document.getElementById('btn');

function tret() {
    var section = document.getElementById('section');
    var selectedSection = section.selectedIndex;
    var inputValue = document.getElementById('fiValue');
    var outPut;
    var resultDiv = document.getElementById('result');
    var resultDescription = document.createElement('div');
    var resultTotal = document.createElement('div');
    var x0, x1, xCurr, y0, y1;


    for (var i=0; i<fiValue.length; i++) {
        if (fiValue[i]*10 < inputValue.value*10) {
            console.log(fiValue[i])
        } else if (fiValue[i]*10 > inputValue.value*10) {
            console.log('STOP');
            console.log(i);
            break;
        }
    }

    if (section[selectedSection].text == 'a') {
        outPut = aSection[i-1] + ((aSection[i] - aSection[i-1]) * (Number(inputValue.value) - fiValue[i-1])) / (fiValue[i] - fiValue[i-1]);
        y0 = aSection[i-1];
        y1 = aSection[i];
        x0 = fiValue[i-1];
        x1 = fiValue[i];
        xCurr = Number(inputValue.value);
    } else if (section[selectedSection].text == 'b') {
        outPut = bSection[i-1] + ((bSection[i] - bSection[i-1]) * (Number(inputValue.value) - fiValue[i-1])) / (fiValue[i] - fiValue[i-1]);
        y0 = aSection[i-1];
        y1 = aSection[i];
        x0 = fiValue[i-1];
        x1 = fiValue[i];
        xCurr = Number(inputValue.value);
    } else {
        outPut = cSection[i-1] + ((cSection[i] - cSection[i-1]) * (Number(inputValue.value) - fiValue[i-1])) / (fiValue[i] - fiValue[i-1]);
        y0 = aSection[i-1];
        y1 = aSection[i];
        x0 = fiValue[i-1];
        x1 = fiValue[i];
        xCurr = Number(inputValue.value);
    }

    console.log(outPut);

    resultDiv.innerHTML = '';
    resultDescription.classList = 'description';
    resultDescription.innerHTML = y0 + ' + ' + '[' + '(' + y1 + '-' + y0 + ')' +  ' * ' + '(' + xCurr + ' - ' + x0 + ')' + ']' + ' / ' + '(' + x1 + ' - ' + x0 + ')';
    resultDiv.appendChild(resultDescription);
    resultTotal.classList = 'total';
    resultTotal.innerHTML = 'Коэффициент фи равен: ' + outPut.toFixed(2);
    resultDiv.appendChild(resultTotal);




    // console.log(inputValue.value);
    // console.log(section[selectedSection].text);
}

btn.onclick = tret;


console.log(fiValue[7]*2);