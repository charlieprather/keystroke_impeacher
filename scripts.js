const pressed = [];
secretCode = 'impeach trump';

window.addEventListener('keyup', (e) => {
console.log(e.key);

pressed.push(e.key);

pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

if(pressed.join('').includes(secretCode)){

	console.log("you did it!")

	var img = document.createElement('img');
    img.src = "https://media1.fdncms.com/portmerc/imager/u/original/18841656/1486747605-gettyimages-634384672.jpg";
    document.body.appendChild(img);




	

return "http://i.imgur.com/4ILisqH.jpg";
}

console.log(pressed);

})


