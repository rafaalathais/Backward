
const dialogo1 =[
    {  texto: "Zezinho acorda de uma noite extremamente conturbada, ele sempre tem um pesadelo recorrente que sempre a assombra, ele tem que utilizar remédios para dormir para que ela se “esquive” desse pesadelo, mas naquela noite o remédio não conseguiu dar conta e o pesadelo veio pior. "}, 
    {texto: "Zezinho levanta da cama desesperado tendo uma crise de ansiedade, sua mãe estava no quarto dormindo, e seu pai não via há muito tempo..."},
    {  texto: " Ele não quis acordar a mãe pois ela estava extremamente cansada por conta do trabalho exaustivo dela, então zezinho pega um copo d'água na mesa de cabeceira dele e pega seu discman que era a única coisa que ele tinha de seu pai com a “música favorita” e começa a ouvir, isso vai o deixando mais calmo até que começa a ficar bem..."},
    {  texto: "Com isso zezinho volta para cama mas fica vendo o luar e as estrelas de sua janela se perguntando o porque ele sempre tem isso pois ele não sabe uma explicação e começa até pegar no sono novamente"}];

const dialogo2 =[
    {  texto: "Peixonauta e Rosa percebem um arco-íris na superfície do lago, e ele está se espalhando rapidamente pelas águas! Eles descobrem que o arco-íris é, na verdade, uma mancha de óleo. Com a ajuda das pistas da POP, da Marina e do Zico, eles começam uma investigação para descobrir de onde este óleo está vindo."}, 
    {texto: "olá"},
    {  texto: "BTS, também conhecido como Bangtan Boys é um grupo masculino sul-coreano formado pela empresa Big Hit Music, uma subsidiária da HYBE Corporation, em 2013. Ele é composto por sete membros: RM, Jin, SUGA, J-Hope, Jimin, V e Jungkook."},
    {  texto: " Meu deus, que noite foi essa"}, 
    {  texto: "Loremisusoaos absjasjas"},
    {  texto: "fim"}
];





// quebrando linhas do dialogo
function quebraTexto(ctx, texto, maxWidth){
    const words = texto.split(' ');
    let line = '';
    let lines = [];

    words.forEach((word) => {
        let testLine = line + word + ' ';

        let metrics = ctx.measureText(testLine);
        let testWidht = metrics.width;

        if (testWidht > maxWidth && line !== ''){
            lines.push(line);
            line = word + ' ';
        } else {
            line = testLine;
        }
    });
    lines.push(line.trim());
   
    return lines;
}

export {dialogo1, quebraTexto, dialogo2};