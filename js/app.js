const adviceNum = document.querySelector('#advice-id');
const adviceText = document.querySelector('#advice-advice');
const button = document.querySelector('.advice__button');

const getAdvice = async() => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const advice = await response.json();
    return advice;
}

const changeAdvice = async() => {
    const advice = await getAdvice(); 
    console.log(advice.slip);
    adviceNum.innerText = advice.slip.id;
    adviceText.innerText = advice.slip.advice;
}


changeAdvice();



button.addEventListener('click', changeAdvice);