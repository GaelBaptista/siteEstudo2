var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if( counter > 3){
        counter = 1;
    }
}, 4000);





function menuToggle(){
    let menuArea = document.getElementById('mn-op');
    if(menuArea.style.display == 'block'){
        menuArea.style.display = 'none';
    }else{
        menuArea.style.display = 'block';

    }
}

