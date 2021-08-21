
// no cost 
function costNone(Service, cost) {
    const ExtraCost = document.getElementById(Service);
    ExtraCost.innerText = cost;
    totalCost();
}

//  calculate overall cost 

function totalCost() {
    const initialPrice = document.getElementById('initial-price');
    const initialPriceNumber = parseInt(initialPrice.innerText);

    const promoTotalText = document.getElementById('promo-total');
    const promoTotalNumber = parseInt(promoTotalText);

    const memory = document.getElementById('extra-cost-memory');
    const costForMemory = parseInt(memory.innerText);


    const storage = document.getElementById('extra-Cost-Storage');
    const costForStorage = parseInt(storage.innerText);


    const delivery = document.getElementById('extra-Cost-delivery');
    const costForDelivery = parseInt(delivery.innerText)


    const total = document.getElementById('total');
    const totalCost = costForMemory + costForStorage + costForDelivery + initialPriceNumber;


    total.innerText = parseInt(totalCost);
    promoTotalText.innerText = totalCost;

}

// memory button 
document.getElementById('memory-8GB').addEventListener('click', function () {
    costNone('extra-cost-memory', 0)
});
document.getElementById('16GB').addEventListener('click', function () {
    costNone('extra-cost-memory', 180)
})

// Storage button 
document.getElementById('ssd-256').addEventListener('click', function () {
    costNone('extra-Cost-Storage', 0);

});

document.getElementById('ssd-512').addEventListener('click', function () {
    costNone('extra-Cost-Storage', 100);

})
document.getElementById('ssd-1tb').addEventListener('click', function () {
    costNone('extra-Cost-Storage', 180);

})

// delivery  
document.getElementById('delivery-none').addEventListener('click', function () {
    costNone('extra-Cost-delivery', 0);

})

document.getElementById('delivery-cost').addEventListener('click', function () {
    costNone('extra-Cost-delivery', 20);

});

document.getElementById('promo-Button').addEventListener('click', function () {
    // input value 
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;
    const promoCode = 'stevekaku';
    // promo fielt total 
    const promoTotalText = document.getElementById('promo-total');
    const promoTotalNumber = promoTotalText.innerText;
    // final total 

    const totalcost = document.getElementById('total').innerText;
    const totalNumber = parseFloat(totalcost)

    if (promoInputValue == promoCode) {

        promoTotalText.innerText = totalNumber - (totalNumber * .2);
        promoInput.value = '';
    }
    else if (promoInputValue != promoCode) {
        promoInput.value = '';
    }


})




