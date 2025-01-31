(function(){

    var pricePounds;
    var exchangeRate;
    var priceEuros;

    var convertForm = document.getElementById('myForm');
    var msg = document.getElementById('msg');

    convertForm.addEventListener('submit', function(ev){
    ev.preventDefault();
    })

    priceEuros = 0;
    exchangeRate = 0.87;
    pricePounds = parseFloat(document.getElementById('pounds').value);

    if(isNaN(pricePounds)){
    msg.style.display = "block";
    msg.innerHTML = "You must enter a number";
    msg.setAttribute('class', 'error');
    }

    if(pricePounds === 0){
    msg.style.display = "block";
    msg.innerHTML = "You must enter more than zero."
    msg.setAttribute('class', 'error');
    }
    else{
    priceEuros = pricePounds * exchangeRate;
    msg.style.display = "block";
    priceEuros = priceEuros.toFixed(2);
    msg.innerHTML = "You will get &euro;"+priceEuros;
    msg.removeAttribute('class');
    }

    document.getElementById('pounds').addEventListener('focus', function(ev){
    ev.target.value = "";
    msg.innerHTML = "";
    msg.removeAttribute('class');
    })

    document.getElementById('pounds').value;


})();