

window.addEventListener("load", () => {
    let button = document.getElementById("button").addEventListener("click", () => {
        
        //Tempo em segundos
        let sec = 360;

        const countDiv = document.getElementById("timer");

        const secpass = () => {

            let min = Math.floor(sec / 60);
            let segundosRestantes = sec % 60;

            if (segundosRestantes < 10) {
                segundosRestantes = "0" + segundosRestantes;
            }

            if (min < 10) {
                min = "0" + min;
            }

            //Gera o formato da contagem
            countDiv.innerHTML = `${min}:${segundosRestantes}`;


            //Condição final
            if (sec > 0) {
                sec = sec - 1;
            } else {
                countDiv.innerHTML = "Acabou!";
            }

        }

        const countDown = setInterval(() => {
            secpass();
        }, 1000);
    })

})


