let starContainer = document.querySelectorAll('.star-container');
const submitButton = document.querySelector('#submit');
const message = document.querySelector('#message');
const submitSection = document.querySelector('#submit-section');
const return_msg = document.getElementById('return');

//events for touch and mouse

let events = {
    mouse: {
        over: "click"
    },

    touch: {
        over: "touchstart"
    },
};

let deviceType = "";
let rate;

//detect touch device

const isTouchDevice = () => {
    try {
        //try to create TouchEvent (throw error for desktops)
        document.createEvent('TouchEvent');
        deviceType = "touch";
        return true;
    } catch(e) {
        deviceType = "mouse";
        return false;
    };
};

isTouchDevice();

starContainer.forEach((element, index) => {
    element.addEventListener(events[deviceType].over, () => {
        submitButton.disabled = false;
        
        if(element.classList.contains('inactive')) {
            //fill star
            ratingUpdate(0, index, true);
        } else {
            //regular stars (remove color)
            ratingUpdate(index, starContainer.length - 1, false);
        };
    });
});

const ratingUpdate = (start, end, active) => {
    for(let i = start; i <= end; i++) {
        if(active) {
            starContainer[i].classList.add('active');
            starContainer[i].classList.remove('inactive');
            starContainer[i].firstElementChild.className = "fa-star fa-solid";
        } else {
            starContainer[i].classList.remove('active');
            starContainer[i].classList.add('inactive');
            starContainer[i].firstElementChild.className = "fa-star fa-regular";
        };
    };

    let activeElements = document.getElementsByClassName('active');

    if(activeElements.length > 0) {
        switch(activeElements.length) {
            case 1:
                message.innerText = "Terrible";
                rate = 1;
                break;
            case 2:
                message.innerText = "Bad"
                rate = 2;
                break;
            case 3:
                message.innerText = "Satisfied";
                rate = 3;
                break;
            case 4:
                message.innerText = "Good";
                rate = 4;
                break;
            case 5:
                message.innerText = "Excellent";
                rate = 5;
                break;
        };
    } else {
        message.innerText = "";
        rate = 0;
    };
};

submitButton.addEventListener('click', () => {
    submitSection.classList.remove('hide');
    submitSection.classList.add('show');
    submitButton.disabled = true;

    let msg = "Your feedback has been received, you have chosen : "
    
    if(rate === 0) {
        alert(msg + `0 stars`);
    } else if(rate === 1) {
        alert(msg + `1 star. We are sorry that the experience you had did not suit you at all. Your feedback is important and we will improve this.`);
    } else if(rate === 2) {
        alert(msg + `2 stars. Well, we tried but from your feedback, we can see that this didn't work out as well as we thought. So we will improve this in the future.`);
    } else if(rate === 3) {
        alert(msg + `3 stars. We are delighted to know that you were satisfied with your experience. Have a nice day`);
    } else if(rate === 4) {
        alert(msg + `4 stars ! We are happy to know that this experience has suited you! We will continue to offer you such good experiences in the future, don't doubt it ! :)`);
    } else if(rate === 5) {
        alert(msg + `5 stars !! I don't know what to say. We have worked for days and weeks to meet your expectations and we see that you like it. We can only be happy to have you in our clientele, we hope that your loyalty is as great as ours towards you. Have a nice day, may the world be with you !`)
    };

    setTimeout(() => {
        return_msg.style.opacity = 1;
    }, 750);

    setTimeout(() => {
        return_msg.innerText = "Back to the home page in 3 seconds...";
    }, 2750);

    setTimeout(() => {
        return_msg.innerText = "Back to the home page in 2 seconds...";
    }, 3750);

    setTimeout(() => {
        return_msg.innerText = "Back to the home page in 1 second...";
    }, 4750);

    setTimeout(() => {
        location.reload();
    }, 5750);
});

window.onload = () => {
    submitButton.disabled = true;
    submitSection.classList.add('hide');
};