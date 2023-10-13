const squares = document.querySelectorAll('.square');
let animationDuration = 4; 

function selectSquare() {
    const choice = parseInt(prompt("Divi seçin  (1: Birinci Div, 2: İkinci Div, 3: Üçüncü Div)"));

    if (choice === 1 || choice === 2 || choice === 3) {
        const selectedSquare = squares[choice - 1];
        performAnimation(selectedSquare);
    } else {
        alert("Olmadi.");
    }
}


function performAnimation(selectedSquare) {
    const animationType = parseInt(prompt("Hərəkəti seçin (1: Hereket etmek, 2: Döndürmek, 3: Random renk almaq, 4: Butun divler butun animasyalari edecek)"));

    selectedSquare.style.animation = "none"; 

    if (animationType === 1) {
        selectedSquare.style.animation = moveAnimation ${animationDuration}s linear alternate;
    } else if (animationType === 2) {
        selectedSquare.style.animation = rotateAnimation ${animationDuration}s linear alternate;
    } else if (animationType === 3) {
        selectedSquare.style.animation = colorAnimation ${animationDuration}s linear;
    } else if (animationType === 4) {
        performAllAnimations();
    } else {
        alert("Olmadi.");
        return;
    }
}

function performAllAnimations() {
    squares.forEach((square) => {
        square.style.animation = moveAnimation ${animationDuration}s linear alternate, rotateAnimation ${animationDuration}s linear alternate, colorAnimation ${animationDuration}s linear;
    });
}

const customDuration = parseInt(prompt("Bu animasya nece saniye islesin? (1 ile 10 arasinda bir reqem yazin)"));

if (customDuration >= 1 && customDuration <= 10) {
    animationDuration = customDuration;
} else {
    alert("Saniye 1-10 arasinda olmalidi. Oz yazdigimiz saniye isleyecekdir!.");
}

selectSquare();