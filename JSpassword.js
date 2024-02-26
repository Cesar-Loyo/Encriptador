let psword=""  
function generarPasword(){
    let palabra = (document.getElementById("textoUsuario")).value;
console.log(palabra)
    psword=palabra.replaceAll("e","enter")
    psword=psword.replaceAll("i","imes")
    psword=psword.replaceAll("o","ober")
    psword=psword.replaceAll("a","ai")
    psword=psword.replaceAll("u","ufat")
    console.log(psword)
    let pswordshow = document.getElementById("cajaresultado");
    pswordshow.innerHTML = psword;
}
function decifrarPasword(){
    let pswordb = (document.getElementById("textoUsuario")).value;
    console.log(pswordb)
    let pswordrev=pswordb.replaceAll("ober","o")
    pswordrev=pswordrev.replaceAll("ai","a")
    pswordrev=pswordrev.replaceAll("enter","e")
    pswordrev=pswordrev.replaceAll("imes","i")
    pswordrev=pswordrev.replaceAll("ufat","u")
    console.log(pswordrev)
    let pswordshow = document.getElementById("cajaresultado");
    pswordshow.innerHTML = pswordrev;
}
function copiado(){
    let copiado = document.getElementById("cajaresultado");
    copiado.select();
    copiado.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copiado.value);
    document.getElementById("textoUsuario").value = '';
}