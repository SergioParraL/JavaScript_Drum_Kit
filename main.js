function playSound (e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if (!audio) return;
	audio.currenTime = 0
	audio.play()	
	key.classList.add('key-Press')
}

function remove_Key_Press(e){
	if(e.propertyName !== 'transform') return
	this.classList.remove('key-Press')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',remove_Key_Press))
window.addEventListener('keydown',playSound)

