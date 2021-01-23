//Mes/Dia/Ano
window.onload = function idade() {
    var today = new Date();
    var birthDate = new Date("04/06/1994");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    document.getElementById("idade").innerHTML = age;
    return age;
} 