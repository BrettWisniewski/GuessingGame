let playerscore = 0
// playerscore will be increased by one for every win the player gets
function hide (elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  
  }

}
function show (elements, specifiedDisplay ) { // second param allows you to set a specific value to change it to
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = specifiedDisplay || 'block';
  }
}
function pressed(numero){
  numberStrings = ['1','2','3']
  console.log("HEY!")
  const randomElement = numberStrings[Math.floor(Math.random() * numberStrings.length)];
  console.log(randomElement)
  console.log(numero)
  if (numero == randomElement){
    console.log("WINNER!")
    playerscore += 1
  }
  document.getElementById("n1").innerHTML = playerscore;
  //hide(document.querySelectorAll('.heading'))

}