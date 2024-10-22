
const dialogo1 =[
    {texto: "..."},
    {texto: "...zzZ"},
   {  texto: "AHHHHHHHHH"}, 
    {texto: "NÃO, DE NOVO NÃO!!!!!!!!!!😢😢😢"}];

const dialogo2 =[
    {  texto: "..."}, 
    {texto: "CADÊ"},
    {texto: "CADÊ"},
    {texto: "..."},]

const dialogo3 = [
    {  texto: "QUE PORRA, TOMEI O ULTIMO ESSA NOITE"},
    {  texto: " O QUE VOU FAZER AGORA?"}]

 // cena janela pega discman   
const dialogo4 = [
    {  texto: "tá, vou pegar a água"},
    {  texto: "glub, glub"},
    {  texto: "aahh, a música sempre me acalmou..."},
    {  texto: "vou pegar meu discman"},
]
// dialogo respiração
const dialogo5 = [
    {  texto: "ok... ugh... vou tentar fazer o controle de respiração que a doutora Andréia ensinou"}
]
const dialogo6 = [
    {  texto: "ta passando..."},
    {  texto: " ..."},
    {  texto: "...zzZZZ"},
    {  texto: "...!"},]

    const dialogo7 = [
        {  texto: "AAARRRGGGhhhhhh"},
        {  texto: " Meu Deus... Que noite foi essa!?"},
        {  texto: "Eu não entendo o porque o remédio dessa vez não funcionou"},
        {  texto: "Depois vou ter mandar mensagem pra doutora Andreia"},
       { texto: "Mas agora, vamos começar a se arrumar pro dia"},
       { texto: "snif... snif..."},
       { texto: "Mas se bem que um banho agora seria bom!"},]

const dialogo8 = [
    {  personagem: "Rick",
        texto: "BTS, também conhecido como Bangtan Boys é um grupo masculino sul-coreano formado pela empresa Big Hit Music, uma subsidiária da HYBE Corporation, em 2013. Ele é composto por sete membros: RM, Jin, SUGA, J-Hope, Jimin, V e Jungkook."},
    {  personagem: "Juliana",
        texto: " Meu deus, que noite foi essa"}, 
    {  personagem: "Juliana",
        texto: "Loremisusoaos absjasjas"},
    {  personagem: "Juliana",
        texto: "fim"}
]

const dialogo9 = [
    {  texto: "Nãoocarai, o que eu tomei ontem foi o último"},
    {  texto: " O que voufazer agora?"},
    {  texto: "Nãoocarai, o que eu tomei ontem foi o último"},
    {  texto: " O que voufazer agora?"}
]






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

