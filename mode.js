const mode = ["clockMode", "calcMode", "timerMode"];
let currentMode = 0;

function toggleMode(){
    currentMode = (currentMode + 1) % 3;
    switch(currentMode){
        case 0:
            updateTime();
            setInterval(updateTime,1000);
            console.log("currentMode: ", mode[currentMode]);
            break;
        case 1:
            clearInterval(myInterval);
            console.log("currentMode: ", mode[currentMode]);
            clearDasplay();
            break;
        case 2:
            
            console.log("timerMode");
            break;
    }
}


