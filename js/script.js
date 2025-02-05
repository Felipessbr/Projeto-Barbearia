let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overley-menu");
const slideContainer = document.querySelector(".paginas-slide");

// Duplicar dinamicamente os itens do carrossel
function duplicarItens(slide) {
  if (slide) { // Verificar se o slide existe
    const clone = slide.cloneNode(true);
    slide.parentElement.appendChild(clone);
  }
}

duplicarItens(slideContainer);

const btnAbrirMenu = document.querySelector(".btn-abrir-menu");
const menuMobile = document.querySelector(".menu-mobile");
const overlayMenu = document.querySelector(".overley-menu");
const btnFecharMenu = document.querySelector(".btn-fechar");

btnAbrirMenu.addEventListener("click", () => {
    menuMobile.classList.add("abrir-menu");
    overlayMenu.style.display = "block";
});

btnFecharMenu.addEventListener("click", () => {
    menuMobile.classList.remove("abrir-menu");
    overlayMenu.style.display = "none";
});

overlayMenu.addEventListener("click", () => {
    menuMobile.classList.remove("abrir-menu");
    overlayMenu.style.display = "none";
});

// Fechar menu ao clicar nos links
document.querySelectorAll('.menu-mobile nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove("abrir-menu");
        overlayMenu.style.display = "none";
    });
});

// Botão Voltar ao Topo
const btnTop = document.getElementById("btnTop");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
};

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Vincular a função ao botão
btnTop.addEventListener("click", backToTop);

//TODO PARTE DE ANIMATION

window.revelar = ScrollReveal({reset:false})

//? TOPO DO SITE

revelar.reveal('.efeito-txt-topo',{
  duration: 2000,
  distance: '50px'
})

//!SERVIÇO

revelar.reveal('.title-1',{
  duration: 1000,
  distance: '150%',
  delay: 1,
  origin: 'left',
})

revelar.reveal('.card-1',{
  duration: 800,
  distance: '90px',
  delay: 200,
  origin: 'left'
})
revelar.reveal('.card-2',{
  duration: 800,
  distance: '50px',
  delay:200,
  origin: 'right'
})
revelar.reveal('.card-3',{
  duration: 800,
  distance: '90px',
  delay:200,
  origin: 'left'

})
revelar.reveal('.card-4',{
  duration: 800,
  distance: '90px',
  delay:200,
  origin: 'right'

})
revelar.reveal('.agend',{
  duration: 800,
  distance: '150%',
  delay: 1,
  easing: 'cubic-bezier(0.0, 0.3, 0.0, 0.5)' 
})


//* SOBRE

revelar.reveal('.texto_anima',{
  duration: 1000,
  distance: '50px',
  delay:100

})

revelar.reveal('.imag-1',{
  duration: 1000,
  origin: 'top',
  delay:300,
  distance: '100px'
})


//! FORMULARIO

revelar.reveal('.fornom',{
  duration: 1000,
  distance: '50px',
  delay:500

})

revelar.reveal('.whatsApp',{
  duration: 1000,
  distance: '50px',
  delay:300,

})

revelar.reveal('.email',{
  duration: 1000,
  distance: '50px',
  delay:200,

})

revelar.reveal('.msg',{
  duration: 1000,
  distance: '50px',
  delay:100,

})
revelar.reveal('.env',{
  duration: 1000,
  distance: '50px',
  delay:50,

})

//? SOCIAL

revelar.reveal('.face',{
  duration: 1000,
  distance: '50px'

})
revelar.reveal('.insta',{
  duration: 1000,
  distance: '50px',
  delay:200

})
revelar.reveal('.link',{
  duration: 1000,
  distance: '50px',
  delay:400

})
revelar.reveal('.phone',{
  duration: 1000,
  distance: '50px',
  delay:200,
  origin: 'top'

})
revelar.reveal('.evelope',{
  duration: 1000,
  distance: '50px',
  delay:200,

})
revelar.reveal('.online',{
  duration: 1000,
  distance: '50px',
  delay:200,
  origin: 'right'

})
revelar.reveal('.what',{
  duration: 1000,
  distance: '50px',
  delay: 200,
  origin: 'left'
})

//!FOOTER

revelar.reveal('.fot',{
  duration: 1000,
  distance: '50px',
  delay: 200,
  origin: 'left'
})


