function addingEventListener() {
const input = document.getElementById('button');

    function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}

addingEventListener()

//const addingEventListener = document.getElementById('button');
//  addingEventListener.addEventListener('click', () => 
//  alert('I was clicked'));