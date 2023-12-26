
// Paypal Stuff
PayPal.Donation.Button({
    env: 'production',
    hosted_button_id: 'UQ83EASDKERUU',
    image: {
        src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
        alt: 'Donate with PayPal button',
        title: 'PayPal - The safer, easier way to pay online!',
    }
}).render('#donate-button');



var clickMeBtn = document.querySelector('div button');

if (!localStorage.getItem('totalClixStorage')) {
    var totalClixVal = 1;
    var totalClixObj = {
        "name": 'totalClixObj',
        "clicks": totalClixVal,
    }
    totalClixObj = JSON.stringify(totalClixObj); //make it into string
    localStorage.setItem("totalClixStorage", totalClixObj); //store object as string
    console.log("True: There was no value.");
    var totalClixObj = JSON.parse(localStorage.getItem('totalClixStorage')); //reverse string to obtain original object
} else {
    var totalClixObj = JSON.parse(localStorage.getItem('totalClixStorage')); //reverse string to obtain original object
    var totalClixVal = totalClixObj.clicks;
}


clickMeBtn.addEventListener('click', () => {
    totalClixVal = totalClixVal + 1;
    alert("This button has been pressed " + totalClixVal + " times!");
    totalClixObj = {
        "name": 'totalClixObj',
        "clicks": totalClixVal,
    }
    totalClixObj = JSON.stringify(totalClixObj); //make it into string
    localStorage.setItem("totalClixStorage", totalClixObj); //store object as string
});


// fetch('./clicks.txt')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.text();
//     })
//     .then(text => {
//         console.log('File contents:', text);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     }); 
