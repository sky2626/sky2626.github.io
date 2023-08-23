
const observer = new intervalObservable((enteries) => {
    enteries.forEach(entery => {
        console.log(entery)
        if (entery.isIntersecting) {
            entery.targets.classList.add('show');
        } else{
            entery.target.classList.remove('show');
        }
    });
});
const hiddenElement = document.querySelectorAll('.hero-image');
hiddenElement.forEach((el) => observer.observer(el));