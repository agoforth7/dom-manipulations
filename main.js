
document.querySelector("#thanks button").addEventListener('click',function(){
  alert('yowch! don\'t click me so hard!');
})

document.querySelector("#double button").addEventListener('click',function(){
	// compoundInvestment.textContent = (+ compoundInvestment.textContent) * 2;
  compoundInvestment.textContent *= 2;
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  var circle = document.getElementById('circle-bw');
  if (!circle.style.backgroundColor || circle.style.backgroundColor === 'white') {
  	circle.style.backgroundColor = 'black';
  } else {
  	circle.style.backgroundColor = 'white';
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  var circle = document.getElementsByClassName('circle-red')[0];
  circle.style.width = circle.clientWidth * 2 + 'px';
  circle.style.height = circle.clientHeight * 2 + 'px';
  if (circle.style.width === 320 + 'px') {
  	circle.style.width = 40 + 'px';
  }
  if (circle.style.height === 320 + 'px') {
  	circle.style.height = 40 + 'px';
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  var list = document.querySelectorAll('#userList > li');
  for (var i = 0; i < list.length; i++) {
  	if (list[i].className === 'inactive') {
  		list[i].parentElement.removeChild(list[i]);
  	}
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  var box = document.querySelector('#reverse-squares .answer-box');
  var boxList = document.querySelectorAll('#reverse-squares .square');
  var boxArray = Array.prototype.slice.call(boxList);
  
  boxArray.reverse();
  
  for (var i = 0; i < boxArray.length; i++) {
  	// box.removeChild(boxArray[i]);
  	box.appendChild(boxArray[i]);
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  var list = document.querySelectorAll('#tasks > li');
  var result;

  for (var j = 0; j < list.length; j++) {
  	result = '';
  	for (var i = list[j].textContent.length - 1; i >= 0; i--) {
  		result += list[j].textContent[i];
  	}
  	list[j].textContent = result;
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  var image = document.getElementById('city-img');
  var url = image.getAttribute('src');
  var base = url.slice(0, 35);
  var num = parseInt(url.slice(35));

  image.setAttribute('src', base + ((num + 1) % 10));
})