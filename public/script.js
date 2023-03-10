document.querySelector('#btnload').addEventListener('click', () => { 
    getDinoName();
    getDinoImage();
});

async function getDinoName(){
    const response = await fetch('/dinoname');
    const data = await response.json();
    let dinoName = data.join(' ');
    console.log(dinoName);
    document.querySelector('#dinoName').textContent = dinoName;
}

async function getDinoImage(){
    const response = await fetch('/dinoimage');
    const data = await response.json();
    let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
    let dinoImageUrl = dinoImage.thumbnailUrl;
    let dinoAlt = dinoImage.name;
    console.log(dinoImage);

if(document.querySelector('#dinoImage') !== null){
    document.querySelector('#dinoImage').remove();
}

let img = document.createElement('img');
img.id = 'dinoImage';
img.src = dinoImageUrl;
img.alt = dinoAlt;
document.querySelector('#dinoWrapper').appendChild(img);

}
