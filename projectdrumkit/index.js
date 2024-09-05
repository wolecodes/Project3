//keys 
const keyEl = document.querySelectorAll('.key');


/*
function that takes the key 
and play corresponding sound of the key pressed;
*/

const playSound = (e) =>{

    //keyboard keys specified in key data
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    //get sound present in sound corresponding to key
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    //check if key is not associated with key pressed
    if(!audio) return;

    audio.currentTime =0;
    //play audio
    audio.play();

    //add class play to add transform effect in css;
    key.classList.add("playing");

}

//remove transition effect
const removeTranstion = function(e){
    if(e.propertyName !== 'transform'){
        this.classList.remove("playing");
    }
}
//remove of transition property for keys
keyEl.forEach(keys => keys.addEventListener('transitionend', removeTranstion));
window.addEventListener('keydown', playSound);