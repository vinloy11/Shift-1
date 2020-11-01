(function () {
    let items = document.querySelectorAll('.card-md, .card-lg, .card-sm');
    let intervalId = setInterval(function() {
        let item_1 = items[Math.floor(Math.random() * items.length)];
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        item_1.style.boxShadow = `0 0 20px #${randomColor}`;
        let item_2 = items[Math.floor(Math.random() * items.length)];
        item_2.style.boxShadow = "";
    }, 2000);
 }());