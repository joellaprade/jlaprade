var container = document.querySelector('.container')
var benefits = [].slice.call(container.children)
var visibleArea;

const checkBenefitsEnd = (element, relativeTop) => {
    console.log(relativeTop)
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