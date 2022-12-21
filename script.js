const CARD_HOLDER_NAME_ID = '#cardholdername';
const SUBMIT_CARD_DETAILS = '#submitcarddetails';
const CARD_NUMBER = '#cardnumber';
const EXPIRATION_MONTH = '#expirationmonth';
const EXPIRATION_YEAR = '#expirationyear';
const CVC = '#cvc';
const DISPLAY_CARD_NUMBER = '.credit-card--number';
const DISPLAY_CARD_NAME = '.credit-card--name';
const DISPLAY_EXPIRATION_DATE = '.credit-card--date';
const DISPLAY_CVC = '.credit-card--cvc';
const DISPLAY_CONFIRMATION = '.c-confirmation';
const ERROR_EMPTY_CARD_HOLDER_NAME = '.error_cardholdername';
const ERROR_EMPTY_CARD_NUMBER = '.error_cardnumber';
const ERROR_FORMAT = '.error_format';
const ERROR_EMPTY_EXPIRATION_DATE= '.error_expirationdate';
const ERROR_EMPTY_CVC = '.error_cvc';


const cardNumber = document.querySelector(CARD_NUMBER);
const cardHolderName = document.querySelector(CARD_HOLDER_NAME_ID);
const expirationMonth = document.querySelector(EXPIRATION_MONTH);
const expirationYear = document.querySelector(EXPIRATION_YEAR);
const cvcInput = document.querySelector(CVC);
const confirmationMessage = document.querySelector(DISPLAY_CONFIRMATION);

const init = () => {
    onClickHandler();
    displayCCnumber();
    displayCCname();
    displayMonth();
    displayCVC();
}

const onClickHandler = () => {
    const submitBtn = document.querySelector(SUBMIT_CARD_DETAILS);
    submitBtn.addEventListener('click', () => {
        console.log('click');
        validateCardHolderName();
        validateCardNumber();
        validateDateSection();
        hideForm();
    });

}
const validateCardHolderName = () => {


    if (cardHolderName.value.length < 1) {
        document.querySelector(ERROR_EMPTY_CARD_HOLDER_NAME).classList.remove('u-hidden'); 
        document.querySelector(CARD_HOLDER_NAME_ID).classList.add('error');
    } else {
        document.querySelector(ERROR_EMPTY_CARD_HOLDER_NAME).classList.add('u-hidden'); 
        document.querySelector(CARD_HOLDER_NAME_ID).classList.remove('error');
    }
};

const validateCardNumber = () => {
    
    if (cardNumber.value.length < 1) {
        document.querySelector(ERROR_EMPTY_CARD_NUMBER).classList.remove('u-hidden'); 
        document.querySelector(CARD_NUMBER).classList.add('error');
    }

  
    if (cardNumber.value.length > 0) {
        document.querySelector(ERROR_EMPTY_CARD_NUMBER).classList.add('u-hidden'); 
        document.querySelector(CARD_NUMBER).classList.remove('error'); 
    }

    if (cardNumber.value.length > 0 && !Number(cardNumber.value)) {
        document.querySelector(ERROR_EMPTY_CARD_NUMBER).classList.add('u-hidden');
    }

    if (Number(cardNumber.value)) {
        document.querySelector(ERROR_FORMAT).classList.add('u-hidden'); 
    }
};

const validateDateSection = () => {

    const cvc = document.querySelector(CVC);

    if (expirationMonth.value.length < 1 || expirationYear.value.length < 1 ) {
        document.querySelector(ERROR_EMPTY_EXPIRATION_DATE).classList.remove('u-visibility-hidden'); 
    }

    if (expirationMonth.value.length > 0 && expirationYear.value.length > 0 ) {
        document.querySelector(ERROR_EMPTY_EXPIRATION_DATE).classList.add('u-visibility-hidden'); 
    }
    
    if (expirationMonth.value.length < 1 ) {
        document.querySelector(EXPIRATION_MONTH).classList.add('error');
    } else {
        document.querySelector(EXPIRATION_MONTH).classList.remove('error');
    }

    if (expirationYear.value.length < 1 ) {
        document.querySelector(EXPIRATION_YEAR).classList.add('error');
    } else {
        document.querySelector(EXPIRATION_YEAR).classList.remove('error');
    }

    if (cvc.value.length < 1 ) {
        document.querySelector(CVC).classList.add('error');
        document.querySelector(ERROR_EMPTY_CVC).classList.remove('u-visibility-hidden');
    } else if (cvc.value.length > 0) {
        document.querySelector(CVC).classList.remove('error');
        document.querySelector(ERROR_EMPTY_CVC).classList.add('u-visibility-hidden');
    }
};

const displayCCnumber = () => {
    cardNumber.addEventListener('input', (e) => {
        const displayCardNumber = document.querySelector(DISPLAY_CARD_NUMBER);
        const formatDigits = e.target.value.match(/.{1,4}/g)
        displayCardNumber.innerHTML = formatDigits.join(' ');
    });
};

const displayCCname = () => {
    cardHolderName.addEventListener('input', (e) => {
        const displayCardName = document.querySelector(DISPLAY_CARD_NAME);
        displayCardName.innerHTML = e.target.value;
    });
};

const displayMonth = () => {
    const expirationDate = document.querySelector(DISPLAY_EXPIRATION_DATE);
    const date = {
        month: '00',
        year: '00',
    };

    expirationMonth.addEventListener('input', (e) => {
        date.month = e.target.value;
        expirationDate.innerHTML = `${date.month} / ${date.year}`;
    });

    expirationYear.addEventListener('input', (e) => {
        date.year = e.target.value;
        expirationDate.innerHTML = `${date.month} / ${date.year}`;
    });
}

const displayCVC = () => {
    const cvc = document.querySelector(DISPLAY_CVC);

    cvcInput.addEventListener('input', (e) => {
        cvc.innerHTML = e.target.value;
    })

}

const hideForm = () => {
   const inputFields = document.querySelector('.c-input-card');

   if (cardNumber.value.length > 0 &&  cardHolderName.value.length && expirationMonth.value.length > 0 && expirationYear.value.length > 0 && cvcInput.value.length > 0 ) {
    inputFields.classList.add('u-hidden');
    confirmationMessage.classList.remove('u-hidden');
   }

}




init();
