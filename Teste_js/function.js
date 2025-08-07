function somar() {
    
    const v1 = parseFloat(document.getElementById ("valor1").value);
    const v2 = parseFloat(document.getElementById ("valor2").value);

    const soma = v1 + v2;

    document.getElementById("resultado").innerText = "resultado " + soma;
}