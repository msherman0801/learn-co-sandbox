var div = document.querySelectorAll('div');

function test() {
  console.log('blahblah!!!')
}

for(var i = 0; i < div.length; i++) {
  div[i].addEventListener('click', test)
}