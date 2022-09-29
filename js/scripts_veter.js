var addBtn, calcBtn, allGround, aTop, bTop, corner;

addBtn = document.getElementById('add');
calcBtn = document.getElementById('calculate');
allGround = document.getElementById('all_ground');
aTop = document.getElementById('aTop');
bTop = document.getElementById('bTop');
angle = document.getElementById('angle');

addBtn.onclick = function() {

var addGroundDiv = document.createElement('div');
var addGroundInputOne = document.createElement('input');
var deleteBtn = document.createElement('button');
addGroundDiv.classList.add('ground_item');
addGroundInputOne.setAttribute('placeholder', 'Мощность в миллиметрах');
addGroundInputOne.setAttribute('type', 'Number');
addGroundInputOne.classList.add('height');
addGroundDiv.classList.add('delete_ground');
deleteBtn.innerText = 'Удалить';


addGroundDiv.appendChild(addGroundInputOne);
addGroundDiv.appendChild(deleteBtn);

allGround.appendChild(addGroundDiv);

deleteBtn.onclick = function() {
  this.parentElement.remove()
}
}

calcBtn.onclick = function() {
  var localDeepth = document.getElementsByClassName('height')
  var totalDeepth = 0;
  var localDeepthMassive = [];
  var localMassiveA = [];
  var localMassiveB = [];
  var totalMassiveSquare = []
  var aLocal = aTop.value;
  var bLocal = bTop.value;


// Здесь перебираем мощности грунта
  for (var i = 0; i < localDeepth.length; i++){
    var minusDeepth = (parseInt(localDeepth[i].value)*2*parseInt(angle.value*10))/10;
    aLocal = aLocal - minusDeepth;
    bLocal = bLocal - minusDeepth;
    totalDeepth = totalDeepth + parseInt(localDeepth[i].value);
    localDeepthMassive.push(localDeepth[i].value);
    localMassiveA.push(aLocal);
    localMassiveB.push(bLocal);
    }



    // console.log(localMassiveB.length);


// Здесь производим расчет площади для каждой мощности

    for (i = 0; i<localDeepthMassive.length; i++) {
      var localSquare = localMassiveA[i]*localMassiveB[i];
      totalMassiveSquare.push(localSquare);
    }

// Здесь добавляем в начало массива верхнюю площадь котлована

    var topSquare = parseInt(aTop.value)*parseInt(bTop.value);
    totalMassiveSquare.unshift(topSquare);



    var totalVolume = [];
    for (i = 0; i < (totalMassiveSquare.length-1); i++) {
      var volume = (localDeepthMassive[i]/3)*(totalMassiveSquare[i]+(Math.sqrt(totalMassiveSquare[i]*totalMassiveSquare[i+1]))+totalMassiveSquare[i+1]);
      totalVolume.push(volume)
    }


  console.log('Массив по глубинам: ' + localDeepthMassive);
  console.log('Массив по а низ: ' + localMassiveA);
  console.log('Массив по б низ: ' + localMassiveB);
  console.log('Массив по площадям: ' + totalMassiveSquare);
  console.log(totalVolume);
  console.log(totalDeepth);

  var alkol = document.getElementById('result');
  alkol.innerHTML = '';
  for (i = 0; i < localDeepthMassive.length; i++) {
    var loloker = document.createElement('div');
    loloker.className = 'result';
    loloker.innerText = 'Грунт №' + (i+1) + ' мощностью ' + (localDeepthMassive[i]/1000) + 'м имеет объем V=' + (totalVolume[i]/1000000000).toFixed(2) + ' куб.м.';
    alkol.append(loloker)
  }

}