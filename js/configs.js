let drawConfigsId;

function drawConfigs(){
 drawConfigsId =  window.requestAnimationFrame(drawConfigs)
   // ctx.clearRect(0,0, canvas.width, canvas.height);


   ctx.fillStyle = 'rgba(0,0,0,0.7)';
   ctx.fillRect(0, 0, canvas.width, canvas.height);
    
configscaixa.style.display='inline-block';


const sairconfigs = document.getElementById('sairconfigs')


sairconfigs.addEventListener('click', function(){
    configscaixa.style.display='none';
    window.cancelAnimationFrame(drawConfigsId)
});

const salvarbotao = document.getElementById('salvarbotao')

salvarbotao.addEventListener('click', function(){
    salvarProgresso()
});

}