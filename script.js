function closeLetter(){
    document.getElementById('letter').style.display = 'none'
}

function onLetter(){
    document.getElementById('letter').style.display = 'flex'
}



// Факультет

let random = Math.floor(Math.random() * 2)

function onFucult(){
    if(random = 1){
        document.getElementById('gryffindor').style.transform = 'scale(1)'
    } else if(random = 0) {
        document.getElementById('slytherin').style.transform = 'scale(1)'
    } else {
        document.getElementById('slytherin').style.transform = 'scale(0)'
        document.getElementById('gryffindor').style.transform = 'scale(0)'
    }
}


console.log(random)