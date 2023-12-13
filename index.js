const delayPromise = delay => new Promise(resolve => {setTimeout(resolve, delay)})


var container = document.querySelector('.container')
var benefits = [].slice.call(container.children)
var visibleArea;

const checkBenefitsEnd = (element, relativeTop) => {
    if(element == benefits[4] && relativeTop < 1){
        document.querySelector('#footer').style.display = "flex";
    }else {
        document.querySelector('#footer').style.display = "none";
    }
}

const changeColors = (benefit, visibleArea) => {
    if(benefit == benefits[0]){
        document.querySelector('.blue').style.opacity = `${visibleArea}`
    }
    if(benefit == benefits[1]){
        document.querySelector('.pink').style.opacity = `${visibleArea}`
    }
    if(benefit == benefits[2]){
        document.querySelector('.orange').style.opacity = `${visibleArea}`
    }
    if(benefit == benefits[3]){
        document.querySelector('.blue').style.opacity = `${visibleArea}`
    }
    if(benefit == benefits[4]){
        document.querySelector('.gray').style.opacity = `${visibleArea}`
    }
}

const calculateArea = (element) => {
    var elementRect = element.getBoundingClientRect();
    var containerRect = container.getBoundingClientRect();
    var relativeTop = elementRect.top - containerRect.top - 10;
    var visiblePercentage = (elementRect.height - relativeTop) / elementRect.height;

    if(visiblePercentage > 1) visiblePercentage = 2 - visiblePercentage;
    if(visiblePercentage < 0) visiblePercentage = 0;

    checkBenefitsEnd(element, relativeTop);

    return visiblePercentage;
}

container.addEventListener("scroll", () => {
    benefits.forEach(benefit => {
        visibleArea = calculateArea(benefit);
        changeColors(benefit, visibleArea);
    })
})

document.querySelector('#footer').style.display = "none";








var arrowIcon = document.querySelector('.arrow')
var benefit0 = document.querySelector('.benefit-0')

const arrowOptions = {
    threshold: 1
}

const arrowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            arrowIcon.classList.remove('transparent')
        }else {
            arrowIcon.classList.add('transparent')
        }
    })
}, arrowOptions)

arrowObserver.observe(benefit0);



const benefitsContainer = document.querySelector('.benefits')

const containerOptions = {
    threshold: .75
}

const containerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.overflow = "scroll";
        }else {
            entry.target.style.overflow = "hidden";
        }
    })
}, containerOptions)

containerObserver.observe(container);



const scrollFooter = () => {
    var container = document.querySelector(".container")

    hideMenu();    
    window.scrollTo({ top: 2000, behavior: "smooth" })

    setTimeout(() => {
        container.scrollTo({ top: 10000, behavior: "smooth" })
    }, 400)

    setTimeout(() => {
        window.scrollTo({ top: 3000, behavior: "smooth" })
    }, 1200)
}

for(let link of document.querySelectorAll('.contacto-link')){
    link.addEventListener('click', () => {
        scrollFooter();
    })
}







const lines = document.querySelector('.lines');
var tracker = {
    loop: 0,
    linesOffset: 22.6,    

    looped: () => {
        tracker.loop++;
        tracker.linesOffset += 22.6
        if(tracker.loop == 5) tracker.reset();
    },

    reset: () => {
        tracker.loop -= 5
        tracker.linesOffset -= 22.6 * 5
        lines.style.transition = 'none'
        lines.style.translate = '0px 0px'
        for(var line of lines.children){
            line.style.translate = `0px 0px`
        }
    }
}


const openingAnimation = async () => {

    for(i = 0; i < lines.childElementCount; i++){
        let line = lines.children[i].children
        consoleLogMobile('ran mobile')

        for(let element of line) {
            element.style.opacity = '1';
            await delayPromise(40);
        }
    }
}



const phoneAnimation = () => {
    document.querySelector('.phone-cover').style.opacity = 0;
}



const hideBottomRow = async () => {
    let lastRow = lines.children[lines.childElementCount - 1 - tracker.loop];
    for(let element of lastRow.children){
        element.style.opacity = 0;
        await delayPromise(100);
    }
}

const placeBottomRowTop = () => {
    let lastRow = lines.children[lines.childElementCount - 1 - tracker.loop];

    lines.style.transition = 'translate 0.3s ease-in-out'

    lastRow.style.translate = `0px -${ 22.6 * 5 }%`
}

const moveRows = () => {
    lines.style.translate = `0px ${ tracker.linesOffset }%`
}

const showTopRow = async () => {
    let firstRow = lines.children[lines.childElementCount - 1 - tracker.loop];
    for(let element of firstRow.children){
        element.style.opacity = 1;
        await delayPromise(100);
    }
    await delayPromise(300);
}




const perpetualAnimation = async (stop) => {
    await hideBottomRow();
    await delayPromise(300);
    placeBottomRowTop();

    moveRows();
    await delayPromise(500);

    showTopRow();
    await delayPromise(300);

    tracker.looped();
    await delayPromise(800);

    perpetualAnimation();
    if (stop) return;
}

const fireAnimations = async () => {
    let ilustration = document.querySelector('.pc-copy');
    ilustration.addEventListener('load', async () => {
        await delayPromise(700);
        await openingAnimation();
        await delayPromise(300);
        phoneAnimation();
        await delayPromise(500);
        perpetualAnimation();
    })
}








setIndicator(0);
fireAnimations();
