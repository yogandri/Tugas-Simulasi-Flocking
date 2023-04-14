const flock = []; //array yg akan diisikan banyak kendaraan
let alignSlider, cohesionSlider, separationSlider;
let population;

let Nyamuk
let Rawa

function preload(){
  Nyamuk = loadImage("Mosquito.png")
  Rawa = loadImage("Rawa.jpg")
}

function setup() {
  createCanvas(600, 400);
  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  
  //menambahkan jumlah populasi 
  p = createInput(10)
  p.position(5, 30)
  p.changed(population)
  
  population ();
  
function population(){
  pop = (p.value())
  for (let i=0; i<pop;i++){
    flock.push(new Boid());
  }
 }
}

function draw() {
  image(Rawa, 0, 0, 600, 400)
  //background(20);
  text("Masukkan Jumlah Populasi Yang Ingin Ditambahkan", 0, 15)
  text("AlignSlider", 0, 395)
  text("CohesionSlider", 140, 395)
  text("SeparationSlider", 270, 395)
  
  
  for (let boid of flock){
    boid.edges();
    boid.flock(flock)
    boid.update();
    boid.show();
    
  }
}