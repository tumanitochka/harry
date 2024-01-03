function closeLetter(){
    document.getElementById('letter').style.display = 'none'
}

function onLetter(){
    document.getElementById('letter').style.display = 'flex'
}



// Факультет



function onFucult(){
    let random = Math.floor(Math.random() * 2)
    random === 1 ? alert('Грифендор!') : alert('Слизарин!')
}


