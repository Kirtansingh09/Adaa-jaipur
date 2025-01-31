// document.getElementById('payment-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const cardHolder = document.getElementById('card-holder').value;
//     const cardNumber = document.getElementById('card-number').value;
//     const expiryDate = document.getElementById('expiry-date').value;
//     const cvv = document.getElementById('cvv').value;

//     if (cardHolder && cardNumber && expiryDate && cvv) {
//         alert('Payment Successful! Your payment has been processed.');
//     } else {
//         alert('Please fill out all fields correctly.');
//     }
// });

document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const email = document.getElementById('email').value;

    if (cardNumber.length !== 16 || expiryDate.length !== 5 || cvv.length !== 3 || email === '') {
        alert("Please fill out all fields correctly.");
        return;
    }

    alert("Payment Successful! Your order has been processed.");
});

