const home = document.querySelector('.home')
const chisiamo = document.querySelector('.chisiamo')
const storia = document.querySelector('.storia')
const cultura = document.querySelector('.cultura')
const musica = document.querySelector('.musica')
const gadget = document.querySelector('.gadget')
const homecontainer = document.querySelector('.home-page')
const chisiamocontainer = document.querySelector('.chisiamo-page')
const storiacontainer = document.querySelector('.storia-page')
const culturacontainer = document.querySelector('.cultura-page')
const musicacontainer = document.querySelector('.musica-page')
const merchcontainer = document.querySelector('.gadget-page')
const scopridipiuhome = document.querySelector('#morebutton')
const scopridipiucultura = document.querySelector('#moreculture')

const mobilemenu = document.querySelector('aside')
const buttonmenu = document.querySelector('.buttonmenu')
const menuopenedopacity = document.querySelector('.menuopenedopacity')
const homemb = document.querySelector('.homemb')
const chisiamomb = document.querySelector('.chisiamomb')
const storiamb = document.querySelector('.storiamb')
const culturamb = document.querySelector('.culturamb')
const musicamb = document.querySelector('.musicamb')
const gadgetmb = document.querySelector('.gadgetmb')

mobilemenu.style.width = "0rem"
buttonmenu.style.left = "0rem"

function menu() {
    menuopenedopacity.classList.toggle('display-none')
    if (mobilemenu.style.width == "0rem" && buttonmenu.style.left == "0rem") {
        mobilemenu.style.width = "12rem"
        buttonmenu.style.left = "11.6rem"
    } else {
        mobilemenu.style.width = "0rem"
        buttonmenu.style.left = "0rem"
    }
}

home.addEventListener('click', () => {
    home.classList.add('Active');
    chisiamo.classList.remove('Active');
    storia.classList.remove('Active');
    cultura.classList.remove('Active');
    musica.classList.remove('Active');
    gadget.classList.remove('Active');
    homemb.classList.add('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.remove('Active');
    homecontainer.classList.remove('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.add('display-none')
})

chisiamo.addEventListener('click', () => {
    home.classList.remove('Active');
    chisiamo.classList.add('Active');
    storia.classList.remove('Active');
    cultura.classList.remove('Active');
    musica.classList.remove('Active');
    gadget.classList.remove('Active');
    homemb.classList.remove('Active');
    chisiamomb.classList.add('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.remove('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.remove('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.add('display-none')
})

storia.addEventListener('click', () => {
    home.classList.remove('Active');
    chisiamo.classList.remove('Active');
    storia.classList.add('Active');
    cultura.classList.remove('Active');
    musica.classList.remove('Active');
    gadget.classList.remove('Active');
    homemb.classList.remove('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.add('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.remove('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.remove('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.add('display-none')
})

scopridipiuhome.addEventListener('click', () => {
    home.classList.remove('Active');
    chisiamo.classList.remove('Active');
    storia.classList.add('Active');
    cultura.classList.remove('Active');
    musica.classList.remove('Active');
    gadget.classList.remove('Active');
    homemb.classList.remove('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.add('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.remove('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.remove('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.add('display-none')
})

scopridipiucultura.addEventListener('click', () => {
    home.classList.remove('Active');
    chisiamo.classList.remove('Active');
    storia.classList.remove('Active');
    cultura.classList.remove('Active');
    musica.classList.add('Active');
    gadget.classList.remove('Active');
    homemb.classList.remove('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.add('Active');
    gadgetmb.classList.remove('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.remove('display-none')
    merchcontainer.classList.add('display-none')
})


cultura.addEventListener('click', () => {
    home.classList.remove('Active');
    chisiamo.classList.remove('Active');
    storia.classList.remove('Active');
    cultura.classList.add('Active');
    musica.classList.remove('Active');
    gadget.classList.remove('Active');
    homemb.classList.remove('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.add('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.remove('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.remove('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.add('display-none')
})

musica.addEventListener('click', () => {
    home.classList.remove('Active');
    chisiamo.classList.remove('Active');
    storia.classList.remove('Active');
    cultura.classList.remove('Active');
    musica.classList.add('Active');
    gadget.classList.remove('Active');
    homemb.classList.remove('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.add('Active');
    gadgetmb.classList.remove('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.remove('display-none')
    merchcontainer.classList.add('display-none')
})

gadget.addEventListener('click', () => {
    home.classList.remove('Active');
    chisiamo.classList.remove('Active');
    storia.classList.remove('Active');
    cultura.classList.remove('Active');
    musica.classList.remove('Active');
    gadget.classList.add('Active');
    homemb.classList.remove('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.add('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.remove('display-none')
})

homemb.addEventListener('click', () => {
    homemb.classList.add('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.remove('Active');
    home.classList.add('Active');
    chisiamo.classList.remove('Active');
    storia.classList.remove('Active');
    cultura.classList.remove('Active');
    musica.classList.remove('Active');
    gadget.classList.remove('Active');
    homecontainer.classList.remove('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.add('display-none')
    mobilemenu.style.width = "0rem";
    buttonmenu.style.left = "0rem";
    menuopenedopacity.classList.toggle('display-none')
})

chisiamomb.addEventListener('click', () => {
    homemb.classList.remove('Active');
    chisiamomb.classList.add('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.remove('Active');
    home.classList.remove('Active');
    chisiamo.classList.add('Active');
    storia.classList.remove('Active');
    cultura.classList.remove('Active');
    musica.classList.remove('Active');
    gadget.classList.remove('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.remove('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.add('display-none')
    mobilemenu.style.width = "0rem";
    buttonmenu.style.left = "0rem";
    menuopenedopacity.classList.toggle('display-none')
})

storiamb.addEventListener('click', () => {
    homemb.classList.remove('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.add('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.remove('Active');
    home.classList.remove('Active');
    chisiamo.classList.remove('Active');
    storia.classList.add('Active');
    cultura.classList.remove('Active');
    musica.classList.remove('Active');
    gadget.classList.remove('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.remove('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.add('display-none')
    mobilemenu.style.width = "0rem";
    buttonmenu.style.left = "0rem";
    menuopenedopacity.classList.toggle('display-none')
})

culturamb.addEventListener('click', () => {
    homemb.classList.remove('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.add('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.remove('Active');
    home.classList.remove('Active');
    chisiamo.classList.remove('Active');
    storia.classList.remove('Active');
    cultura.classList.add('Active');
    musica.classList.remove('Active');
    gadget.classList.remove('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.remove('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.add('display-none')
    mobilemenu.style.width = "0rem";
    buttonmenu.style.left = "0rem";
    menuopenedopacity.classList.toggle('display-none')
})

musicamb.addEventListener('click', () => {
    homemb.classList.remove('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.add('Active');
    gadgetmb.classList.remove('Active');
    home.classList.remove('Active');
    chisiamo.classList.remove('Active');
    storia.classList.remove('Active');
    cultura.classList.remove('Active');
    musica.classList.add('Active');
    gadget.classList.remove('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.remove('display-none')
    merchcontainer.classList.add('display-none')
    mobilemenu.style.width = "0rem";
    buttonmenu.style.left = "0rem";
    menuopenedopacity.classList.toggle('display-none')
})

gadgetmb.addEventListener('click', () => {
    homemb.classList.remove('Active');
    chisiamomb.classList.remove('Active');
    storiamb.classList.remove('Active');
    culturamb.classList.remove('Active');
    musicamb.classList.remove('Active');
    gadgetmb.classList.add('Active');
    home.classList.remove('Active');
    chisiamo.classList.remove('Active');
    storia.classList.remove('Active');
    cultura.classList.remove('Active');
    musica.classList.remove('Active');
    gadget.classList.add('Active');
    homecontainer.classList.add('display-none')
    chisiamocontainer.classList.add('display-none')
    storiacontainer.classList.add('display-none')
    culturacontainer.classList.add('display-none')
    musicacontainer.classList.add('display-none')
    merchcontainer.classList.remove('display-none')
    mobilemenu.style.width = "0rem";
    buttonmenu.style.left = "0rem";
    menuopenedopacity.classList.toggle('display-none')
})