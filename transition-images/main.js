const images = document.querySelectorAll('.image');


images.forEach(img => {
    function expand() {
        img.style.width = '50%'
        img.style.transition = '100ms'
        counter++;
    }

    function collapse() {
        img.style.width = '10%'
        img.style.transition = '100ms'
        counter--;
    }

    let counter = 0;

    switch (counter) {
        case 0:
            img.onclick = () => {
                expand();
                console.log(counter)
            }
            break;

        case 1:
            img.onclick = () => {
                collapse();
                console.log(counter)
            }
            break;
    }


})
