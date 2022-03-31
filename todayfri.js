Function GETaLLsTUDENCOLOR(){

//let ListaDeNumeros=[];
for(let i=0; i<10;i++){
    ListaDeNumeros.push(Math.floor(Math.random()*4)+1);

}
let listaColores=ListaDeNumeros.map{
    (numero) =>{
        return getColor(numero);
    }
}.forEach((color) => {
    console.log(color);
});
// let listaDeColores[];
// for (let numero of ListaDeNumeros){
    // listaDeColores.push(getcolor(numero));
    // console.log(listaDeColores)
// }
   console.log(listaColores);
   getallStudentcolofr();

}

