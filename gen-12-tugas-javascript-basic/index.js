// const imgContainer = document.querySelector('.img-container');

const imgs = document.getElementsByTagName('img')
const img = imgs[0]

// for(let i=1; i<imgs.length; i++){
//   imgs[i].style.display = 'none';
// }
const buttons = document.getElementsByTagName('button');

buttons[0].addEventListener('click', (event)=>{
  biasaAja();
})

buttons[1].addEventListener('click', (event)=>{
  jurusSeribuBayangan();
})

buttons[2].addEventListener('click', (event)=>{
  jurusApi();
})

buttons[3].addEventListener('click', (event)=>{
  sedih();
})


function jurusSeribuBayangan(){
  // const img = document.createElement('img');
  // img.setAttribute('src', './img/jurus-seribu-bayangan.png')
  // imgContainer.appendChild(img)
  // console.log(img);
  img.setAttribute('src', './img/jurus-seribu-bayangan.png')
  // document.body.appendChild(img)
}

function jurusApi(){
  img.setAttribute('src', './img/full-api.png')
}

function biasaAja(){
  img.setAttribute('src', './img/naruto-awal.png')
}

function sedih(){
  img.setAttribute('src', './img/naruto-sedih.png')
}