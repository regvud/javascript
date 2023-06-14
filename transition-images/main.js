const images = document.getElementsByClassName('image')

function expand(item) {
    item.style.width = '70%'
    item.style.transition = '200ms'

}

function collapse(item) {
    item.style.width = '10%'
    item.style.transition = '200ms'
}

for (const image of images) {
    image.onclick = () => {
        if (image.style.width === '' || image.style.width === '10%') {
            expand(image)
        } else {
            collapse(image)
        }
    }
}


