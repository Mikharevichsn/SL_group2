// const h1 = document.querySelector('h1');
// const plusBtn = document.querySelector('.btn-plus');
// const minusBtn = document.querySelector('.btn-minus');

// const incrementFunc = () => {
//     console.log('случился click');
//     let counter = h1.innerText;
//     counter = Number(counter);
//     // counter = counter + 1;
//     counter += 1;
//     // counter++;
//     h1.innerText = counter;
//     console.log(counter);
// };

// const decrementFunc = () => {
//     console.log('случился click');
//     let counter = h1.innerText;
//     counter = Number(counter);
//     counter -= 1;
//     h1.innerText = counter;
//     console.log(counter);
// }

// plusBtn.addEventListener('click', incrementFunc)

// minusBtn.addEventListener('click', decrementFunc)



const h1 = document.querySelector('h1');
const plusBtn = document.querySelector('.btn-plus');
const minusBtn = document.querySelector('.btn-minus');

const changeCounter = (type) => {
    console.log('случился click');
    let counter = h1.innerText;
    counter = Number(counter);

    if (type === 'increment') {
        counter += 1;
    }
    if (type === 'decrement') {
        counter -= 1;
    }

    h1.innerText = counter;
    console.log(counter);
};

plusBtn.addEventListener('click', () => changeCounter('increment'))
minusBtn.addEventListener('click', () => changeCounter('decrement'))
