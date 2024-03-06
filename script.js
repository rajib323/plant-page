//hero carousel
const carouselNextBtn = document.getElementById("carouselNextBtn");
const carouselBackBtn = document.getElementById("carouselBackBtn");
const carouselContainer = document.getElementById("carouselContainer");

//collections carousel
const collectionsCarousel = document.getElementById("collectionsCarousel");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");


// testimony slider
const testimonySlider = document.getElementById("testimonyCarouselContainer");
const items = document.querySelectorAll(".carouselTestimony .item");
const progress = document.getElementById("progressBar");

const imageCarouselItems = [
    './src/hero/flower.png',
    './src/hero/vase.png',
    './src/hero/leaf.webp',
    './src/hero/scenery.png',
    './src/hero/flowersun.png',
    './src/hero/waterfall.png',
];

const testimonies = [
    {
        imgUrl: './src/testimonials/testimonial-mary.svg',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when It is a long .It is a long .It is a long established fact that a reader will be . It is a long established fact that a reader .'
    },
    {
        imgUrl: './src/testimonials/testimonial-mary.svg',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when It is a long .It is a long .It is a long established fact that a reader will be . It is a long established fact that a reader .'
    },
    {
        imgUrl: './src/testimonials/testimonial-mary.svg',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when It is a long .It is a long .It is a long established fact that a reader will be . It is a long established fact that a reader .'
    }

]

const collectionsImage = [
    {
        title: "Bird Of Paradise",
        imgUrl: './src/collections/plant-1.svg'
    },
    {
        title: "Rubber Plants",
        imgUrl: './src/collections/plant-2.svg'
    },
    {
        title: "String of pearls",
        imgUrl: './src/collections/plant-3.svg'
    },
    {
        title: "Bird Of Paradise",
        imgUrl: './src/collections/plant-1.svg'
    },
    {
        title: "Rubber Plants",
        imgUrl: './src/collections/plant-2.svg'
    },
    {
        title: "String of pearls",
        imgUrl: './src/collections/plant-3.svg'
    },
    {
        title: "Bird Of Paradise",
        imgUrl: './src/collections/plant-1.svg'
    },
    {
        title: "Rubber Plants",
        imgUrl: './src/collections/plant-2.svg'
    },
    {
        title: "String of pearls",
        imgUrl: './src/collections/plant-3.svg'
    },
];




let count = 0;
let currSlide = 0;
let currentTestimonySlide = 0;

const calcCurrentOffset = () => {
    if (window.screen.width > 1000) {
        return 3;
    }
    else if (window.screen.width > 572) {
        return 2;
    } else {
        return 1;
    }
}

const timer = setInterval(() => {
    count = (count + 1) % 11;

    progress.style.width = `${count * 10}%`
    if (count == 10) {
        carouselNextBtn.click();
        nextBtn.click();

    }
}, 500)

const sliderFunc = (type) => {
    let items = carouselContainer.querySelectorAll('.carouselContainer .item');
    count = -1;

    if (type === 'back') {
        const item = items[items.length - 1]
        carouselContainer.removeChild(item);
        carouselContainer.prepend(item);
    } else {
        const item = items[0]
        carouselContainer.removeChild(item);
        carouselContainer.append(item);
    }
}

const nextSlide = () => {
    const currOffset = calcCurrentOffset();
    currSlide = (currSlide + 1) % (collectionsImage.length + 1 - currOffset);

    const parentLeft = collectionsCarousel.getBoundingClientRect().left;

    const cardWidth = card.getClientRects()[0].width;
    collectionsCarousel.style.transform = `translateX(-${currSlide * cardWidth}px)`
}

const backSlide = () => {
    currSlide--;
    const currOffset = calcCurrentOffset();

    const parentLeft = collectionsCarousel.getBoundingClientRect().left
    const cardWidth = Math.round(card.getClientRects()[0].width);

    let movetoRight = currSlide >= 0 ? parentLeft + cardWidth : -cardWidth * (collectionsImage.length - currOffset);

    if (currSlide < 0) {
        currSlide = collectionsImage.length - currOffset;
    }


    collectionsCarousel.style.transform = `translateX(${movetoRight}px)`

}

const slidetoNextTestimony = () => {
    const itemWidth = items[0].getClientRects()[0].width;
    const buttonWidth = testimonySlider.getElementsByTagName("button")[0].getClientRects()[0].width;


    items[currentTestimonySlide].classList.remove("active");
    currentTestimonySlide = (currentTestimonySlide + 1) % testimonies.length;
    items[currentTestimonySlide].classList.add("active");
    testimonySlider.style.transform = `translateX(-${currentTestimonySlide * (itemWidth + buttonWidth + 50)}px)`
    console.log(testimonySlider);
}


const parentLeft = collectionsCarousel.getBoundingClientRect().left;

(() => {
    imageCarouselItems.forEach((item, index) => {
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("item");
        imageDiv.style.backgroundImage = `url(${item})`;
        imageDiv.style.backgroundSize = "cover";
        imageDiv.style.backgroundRepeat = "no-repeat";

        carouselContainer.append(imageDiv);
    });


    collectionsImage.forEach((element, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.setAttribute("class", "item p-3")

        const card = document.createElement("div");
        card.setAttribute("class", "card border border-0 flex-shrink-0");
        // card.style.width = "32%";

        const imgDiv = document.createElement("img");
        imgDiv.src = element.imgUrl;
        imgDiv.setAttribute("class", "card-img-top")
        // imgDiv.dataset.id = index;

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        const title = document.createElement("h3");
        title.setAttribute("class", "card-text playfair font-dark font-30");
        title.textContent = element.title;

        cardBody.append(title)

        card.append(imgDiv, cardBody);

        itemDiv.append(card);

        collectionsCarousel.append(itemDiv);
    });
})();

const card = document.querySelector(".collectionsCarouselContainer .item");
const countCards = document.querySelector(".collectionsCarouselContainer .item").length;

backBtn.addEventListener("click", backSlide);
nextBtn.addEventListener("click", nextSlide);
carouselBackBtn.addEventListener("click", () => sliderFunc('back'));
carouselNextBtn.addEventListener("click", () => sliderFunc('next'));
