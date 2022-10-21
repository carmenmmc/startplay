const analisis = [
    {
        imagen: `IMAGENES/descarga.jpg`,
        subtitulo: `MARIO PARTY SUPERSTARS`,
        urlBoton:'./ANALISIS-MARIO/analisis_mario.html'

    },
    {
        imagen: `IMAGENES/elden.jpg`,
        subtitulo: `ELDEN RING`,
        urlBoton:'./ANALISIS-ELDEN-RING/analisis_elden_ring.html'
    },
    {
        imagen: `IMAGENES/ghostwire.jpg`,
        subtitulo: `GHOSTWIRE`,
        urlBoton:'./ANALISIS-GHOSTWIRE/analisis_ghostwire.html'
    }
];

let dataNum = 0; /* el resto e indice de cada imagen*/

const imagenportada = document.querySelector('.slider');
const subtitulo = document.querySelector('.box-letras div h1');
const urlBoton = document.querySelector('.box-letras div a');

//los botones

const analisismario = document.querySelector('.mario')
const analisiselden = document.querySelector('.elden')
const analisisghost = document.querySelector('.ghostwire')

//overlay

const overlayelden = document.querySelector('.overlay-elden')
const overlayghost = document.querySelector('.overlay-ghost')
const overlaymario = document.querySelector('.overlay-mario')

    if (analisismario){

        analisismario.addEventListener('click', () => {

            overlayelden.setAttribute('style', 'display: inline-block;')
            overlayghost.setAttribute('style', 'display: inline-block;')
            overlaymario.setAttribute('class', 'overlay-mario')

        })   
    };


    if (analisiselden){

        analisiselden.addEventListener('click', () => {

            overlayelden.setAttribute('style', 'display: none;')
            overlayghost.setAttribute('style', 'display: inline-block;')
            overlaymario.setAttribute('class', 'display')

        })   
    };

    if (analisisghost){

        analisisghost.addEventListener('click', () => {

            overlayelden.setAttribute('style', 'display: inline-block;')
            overlayghost.setAttribute('style', 'display: none;')
            overlaymario.setAttribute('class', 'display')

        })   
    };






analisismario.addEventListener('click', function () {

    imagenportada.setAttribute('style', `background-image: url('${analisis[`${0}`].imagen}');`);
    subtitulo.textContent = analisis[0].subtitulo;
    urlBoton.setAttribute("href",analisis[0].urlBoton);
});

analisiselden.addEventListener('click', function () {

    imagenportada.setAttribute('style', `background-image: url('${analisis[`${1}`].imagen}');`);
    subtitulo.textContent = analisis[1].subtitulo;
    urlBoton.setAttribute("href",analisis[1].urlBoton);
});

analisisghost.addEventListener('click', function () {

    imagenportada.setAttribute('style', `background-image: url('${analisis[`${2}`].imagen}');`);
    subtitulo.textContent = analisis[2].subtitulo;
    urlBoton.setAttribute("href",analisis[2].urlBoton);
});


//versión movil

const textoelden = document.querySelector('.elden-container')
const textoghost = document.querySelector('.ghost-container')
const textomario = document.querySelector('.mario-container')

 if (textoelden){

        textoelden.addEventListener('click', () => {
            
        imagenportada.setAttribute('style', `background-image: url('${analisis[`${1}`].imagen}');`);
        subtitulo.textContent = analisis[1].subtitulo;
        urlBoton.setAttribute("href",analisis[1].urlBoton);

        textoelden.setAttribute('style', 'display: none;')
        textoghost.setAttribute('style', 'z-index: 1;')

    })}

 if (textoghost){

        textoghost.addEventListener('click', () => {
            
        imagenportada.setAttribute('style', `background-image: url('${analisis[`${2}`].imagen}');`),('style', 'background-position: 50%;');
        subtitulo.textContent = analisis[2].subtitulo;
        urlBoton.setAttribute("href",analisis[2].urlBoton);

        textoelden.setAttribute('style', 'display: none;')
        textoghost.setAttribute('style', 'display: none;')
        textomario.setAttribute('style', 'z-index: 1;')

    })

if (textomario){

        textomario.addEventListener('click', () => {
            
        imagenportada.setAttribute('style', `background-image: url('${analisis[`${0}`].imagen}');`);
        subtitulo.textContent = analisis[0].subtitulo;
        urlBoton.setAttribute("href",analisis[0].urlBoton);

        textomario.setAttribute('style', 'display: none;')
        textoelden.setAttribute('style', 'z-index: 1;')

    })}}