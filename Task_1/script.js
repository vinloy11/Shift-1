(function () {
    let items = document.querySelectorAll('.card-md, .card-lg, .card-sm');
    let item = null;
    let intervalId = setInterval(function() {
        if (item != null){item.style.boxShadow = "";}
        
        item = items[Math.floor(Math.random() * items.length)];
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        item.style.boxShadow = `0 0 20px #${randomColor}`;
    }, 2000);
 }());