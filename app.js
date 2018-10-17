

function izracunajPocetnik() {

  let satiDnevno = document.getElementById("broj").value;
  return  satiPocetnik / satiDnevno;

}

function izracunajEkspert() {

  const radnihDana = (satiEkspert - satiPocetnik) / 8;
  return izracunajPocetnik() + radnihDana;


}



function formatirajIspis(danaPocetnik, danaEkspert) {

  const godinaPocetnik = Math.floor(danaPocetnik / 365);
  const meseciPocetnik = Math.floor((danaPocetnik % 365) / 30);
  const ostatakDanaPocetnik = (danaPocetnik % 365) % 30

  const godinaEkspert = Math.floor(danaEkspert / 365)
  const meseciEkspert = Math.floor((danaEkspert % 365) / 30)
  const ostatakDanaEkspert = (danaEkspert % 365) % 30

  p1.innerText = `Do funkcionalnog početnika potrebno vam je ${godinaPocetnik} godina, ${meseciPocetnik} mesec/i, ${ostatakDanaPocetnik} dana učenja.`
  p2.innerText = `Do eksperta vam je potrebno ${godinaEkspert} godina, ${meseciEkspert} mesec/i, ${ostatakDanaEkspert} dana učenja.`

}

function pozivanje() {

  
  formatirajIspis(izracunajPocetnik(), izracunajEkspert())

}


const satiPocetnik = 2000
const satiEkspert = 10000


const p1 = document.getElementById("pasus2")
const p2 = document.getElementById("pasus3")

const dugme = document.getElementById("gumb")
dugme.addEventListener("click", pozivanje);









