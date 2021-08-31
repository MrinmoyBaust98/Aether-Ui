// jshint esversion: 6
// variables
let togglers = select('all', '.toggler');
let sideBarContent = select('all', '.side-bar-content');

// a simple function that selects element based on the parameter passed
function select(n, element) {
    element = document.querySelectorAll(element);
    n = n == ('all' || 'every') ? n : isNaN(n) ? Number(n.slice(0, -2)) : n;
    return n == ('all' || 'every') ? element : element[n - 1];
}

// adds interactivity to navbar
togglers.forEach((element, i) => {
    element.addEventListener('click', eventLog => {
        togglers.forEach(elem => {
            elem.classList.remove('active');
        });
        sideBarContent.forEach(elem => {
            elem.classList.add('w3-hide');
        });
        element.classList.add('active');
        sideBarContent[i].classList.remove('w3-hide');
    });
});

// toggles chat option (smaller devices)
let chatToggler = select('1st', '.chat-toggler');
let chatSection = select('1st', '.chat');
chatToggler.addEventListener('click', eventLog => {
    chatSection.classList.toggle('hide');
    // chatSection.classList.toggle('show');
});