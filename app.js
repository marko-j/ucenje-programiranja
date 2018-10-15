



function izracunajdane() {
  
  const satiEkspert = 10000
  const satiPocetnik = 2000
  brojSatiDnevno = document.getElementById("broj").value;
  const radnoVreme = 8
  const godina = 365
  const mesec = 30

  const brojDanaPocetnik = satiPocetnik / brojSatiDnevno
  const brojRadnihDana = (satiEkspert - satiPocetnik) / radnoVreme
  const brojDanaEkspert = brojDanaPocetnik + brojRadnihDana

  const brojGodinaPocetnik = brojDanaPocetnik / godina
  const finGodinaPocetnik = Math.floor (brojGodinaPocetnik)
  const brojGodinaEkspert = brojDanaEkspert / godina
  const finGodinaEkspert = Math.floor(brojGodinaEkspert)


  const meseciPocetnik = (brojDanaPocetnik % godina) / mesec
  const finMeseciPocetnik = Math.floor(meseciPocetnik)
  const ukupniDaniPocetnik = (brojDanaPocetnik % godina) % mesec

  const meseciEkspert = (brojDanaEkspert % godina) / mesec
  const finMeseciEkspert = Math.floor(meseciEkspert)
  const ukupnoDanaEkspert = (brojDanaEkspert % godina) % mesec





  p1.innerText = ("VREME POTREBNO DA BUDETE FUNKCIONALNI POCETNIK U PROGRAMIRANJU JE:") + finGodinaPocetnik + "\xa0" + "godina/e" + "\xa0" + "i" + "\xa0" + finMeseciPocetnik + "\xa0" + "meseci" + "\xa0" + "i" + "\xa0" + ukupniDaniPocetnik.toFixed() + "\xa0" + "dana";

  p2.innerText = ("VREME POTREBNO DA BUDETE EKSPERT U PROGRAMIRANJU JE:") + finGodinaEkspert + "\xa0" + "godina" + "\xa0" + "i" + "\xa0" + finMeseciEkspert + "\xa0" + "meseci" + "\xa0" + "i" + "\xa0" + ukupnoDanaEkspert.toFixed() + "\xa0" + "dana";
}
const dugme = document.getElementById("gumb")
dugme.addEventListener("click", izracunajdane);

const p1 = document.getElementById("pasus1")
const p2 = document.getElementById("pasus2")
