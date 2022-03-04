let btnAll = document.getElementById("btnAll");
let btnOrgn = document.getElementById("btnOrgn");
let btnFncy = document.getElementById("btnFncy");
let btnAntq = document.getElementById("btnAntq");
let imgs = document.getElementById("GalleryImgs");
let imgOrgn = document.getElementsByClassName("imgOrgn");
let imgFncy = document.getElementsByClassName("imgFncy");
let imgAntq = document.getElementsByClassName("imgAntq");

btnAll.onclick = function() {
	btnAll.classList.add("active")
  btnOrgn.classList.add("active")
  btnFncy.classList.add("active")
  btnAntq.classList.add("active")
};
btnOrgn.onclick = function() {
	btnOrgn.classList.add("active")
  btnAll.classList.remove("active")
  btnFncy.classList.remove("active")
  btnAntq.classList.remove("active")
};
btnFncy.onclick = function() {
	btnFncy.classList.add("active")
  btnAll.classList.remove("active")
  btnOrgn.classList.remove("active")
  btnAntq.classList.remove("active")
};
btnAntq.onclick = function() {
	btnAntq.classList.add("active")
  btnAll.classList.remove("active")
  btnOrgn.classList.remove("active")
  btnFncy.classList.remove("active")
};

document.onclick = function() {
  if(btnOrgn.classList.contains("active") == true) {
    for(i=0;i<imgOrgn.length;i++){
      imgOrgn[i].style.display = "block";
    }
    for(i=0;i<imgFncy.length;i++){
      imgFncy[i].style.display = "none";
    }
    for(i=0;i<imgAntq.length;i++){
      imgAntq[i].style.display = "none";
    }
  } else if (btnFncy.classList.contains("active") == true) {
    for(i=0;i<imgFncy.length;i++){
      imgFncy[i].style.display = "block";
    }
    for(i=0;i<imgOrgn.length;i++){
      imgOrgn[i].style.display = "none";
    }
    for(i=0;i<imgAntq.length;i++){
      imgAntq[i].style.display = "none";
    }
  }
    else if (btnAntq.classList.contains("active") == true) {
      for(i=0;i<imgAntq.length;i++){
        imgAntq[i].style.display = "block";
      }
      for(i=0;i<imgOrgn.length;i++){
        imgOrgn[i].style.display = "none";
      }
      for(i=0;i<imgFncy.length;i++){
        imgFncy[i].style.display = "none";
      }
    }
};
