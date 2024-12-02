const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;


ctx.fillStyle = 'lightpink';
ctx.fillRect(0, 0, canvas.width, canvas.height);  //(x, y, widht, haigh)

let telaAtual = 'menu';

//desenhando cada tela
function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    if (drawMenuId){
        window.cancelAnimationFrame(drawMenuId)
    } if (drawCapitulosId){
        window.cancelAnimationFrame(drawCapitulosId)
    } if (drawConfigsId){
        window.cancelAnimationFrame(drawConfigsId)
    }

    switch (telaAtual){
        case 'menu':
        drawMenu();
        Mostrabotoes(true);
        break;
        case 'capitulos':
            drawCapitulos();
            Mostrabotoes(false);
            break;
            case 'capitulo1':
            drawCapitulo1();
            musica.musicaCapitulo1.stop()
            Mostrabotoes(false);
            break;
            default:
                drawMenu();
    }
    drawCaixaSom()
}
// musica 


//botoes menuuuuuuuuuuuuu
const comecarbotao = document.getElementById("comecar")
const capitulosbotao = document.getElementById("capitulos")

comecarbotao.addEventListener('click', function(){
    telaAtual = 'capitulo1';
    draw()
    if(musica.musicaFundoMenu.playing()){
        musica.musicaFundoMenu.stop()
    }
})


capitulosbotao.addEventListener('click', function(){
    telaAtual = 'capitulos';

        capituloscaixa.style.display='inline-block';
    
    draw();
    musica.musicaCapitulo1.play()

    if(musica.musicaFundoMenu.playing()){
        musica.musicaFundoMenu.stop()
    }
})

//configuraçõessssssssss
window.addEventListener('keypress', (e) => {
    if (e.key === 120 || e.key === "x" && telaAtual==='capitulo1'){
        
       drawConfigs();
        console.log("who are you?")}
})

const voltarmenuconfigs = document.getElementById('voltarmenuconfigs')
voltarmenuconfigs.addEventListener('click', function(){
    telaAtual='menu';
    configscaixa.style.display='none';
    draw()
})


//capitulossssssssss
const capitulo1botao = document.getElementById('capitulo1botao')

capitulo1botao.addEventListener('click', function(){
    capituloscaixa.style.display='none';
    telaAtual='capitulo1';
    draw()
    
})

const voltarmenu = document.getElementById('voltarmenu')

voltarmenu.addEventListener('click', function(){
    telaAtual ='menu'
    capituloscaixa.style.display='none';
    draw()
    musica.musicaCapitulo1.stop()
})

draw()


