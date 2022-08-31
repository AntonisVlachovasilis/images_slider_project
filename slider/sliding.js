const sliderContainer = document.querySelector('.container');
const rightSlide = document.querySelector('.right-side');
const leftSlide = document.querySelector('.left-side');
const uppButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = rightSlide.querySelectorAll('div').length;


let activeSlideIndex = 0;
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`


uppButton.addEventListener('click', () =>
    changeSlide('up')
)
downButton.addEventListener('click', () =>
    changeSlide('down')
)
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        };
    };
    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};