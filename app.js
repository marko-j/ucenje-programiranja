



function izracunajdane() {
  const satiEkspert = 10000
  const satiPocetnik = 2000
  brojSatiDnevno=document.getElementById("broj").value;
  const radnoVreme = 8
  const godina = 365

  const brojDanaPocetnik = satiPocetnik / brojSatiDnevno
  const brojRadnihDana = (satiEkspert - satiPocetnik) / radnoVreme
  const brojGodinaPocetnik = brojDanaPocetnik / godina
  const brojRadnihGodina = brojRadnihDana / godina
  const brojGodinaEkspert = brojGodinaPocetnik + brojRadnihGodina


p1.innerText= ("BROJ GODINA UCENJA DO POCETNIKA JE:") + brojGodinaPocetnik.toFixed()
p2.innerText= ("BROJ GODINA UCENJA DO EKSPERTA JE:") + brojGodinaEkspert.toFixed()
}

const dugme = document.getElementById("gumb")
dugme.addEventListener("click",izracunajdane);

const p1 = document.getElementById("pasus1")
const p2 = document.getElementById("pasus2")
