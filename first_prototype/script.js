let helpOpenButton = document.querySelector('.help-open-button');
let helpPopup = document.querySelector('.help-popup');
let helpCloseButton = document.querySelector('.help-popup-close');

helpOpenButton.onclick = function(evt) {
    evt.preventDefault();
    helpPopup.style.display = 'block';
};

helpCloseButton.onclick = function () {
    helpPopup.style.display = 'none';
}

let speedPopup = document.querySelector('.speed-popup');
let speedOpenButton = document.querySelector('.speed-open-button');
let speedRange = speedPopup.querySelector('input');
let speedValue = speedPopup.querySelector('.speed-value');
let isSpeedOpen = false;

speedOpenButton.onclick = function (evt) {
    evt.preventDefault();
    speedPopup.style.display = 'flex';
    isSpeedOpen = true;
};

speedRange.oninput = function() {
    speedValue.textContent = speedRange.value;
};

document.addEventListener('click', function (evt) {
    if (isSpeedOpen && !evt.target.classList.contains('dont-close-speed')) {
        speedPopup.style.display = 'none';
        isSpeedOpen = false;
    }
});

let implementationPopup = document.querySelector('.implementation-popup');
let implementationOpenButton = document.querySelector('.open-implementation-button');
let isImplementationOpen = false;

implementationOpenButton.onclick = function (evt) {
    evt.preventDefault();
    implementationOpenButton.classList.add('with-options');
    implementationOpenButton.classList.remove('can-hover');
    implementationPopup.style.display = 'block';
    isImplementationOpen = true;
}

document.addEventListener('click', function (evt) {
    if (!isImplementationOpen) {
        return;
    }

    let target = evt.target;
    let isOpenButton = (target === implementationOpenButton);
    let isPopup = (target === implementationPopup) ||
        (implementationPopup.contains(target));

    if (!isOpenButton && !isPopup) {
        implementationOpenButton.classList.remove('with-options');
        implementationOpenButton.classList.add('can-hover');
        implementationPopup.style.display = 'none';
        isImplementationOpen = false;
    }
});

let playButton = document.querySelector('.play');
let isOnPause = true;

playButton.onclick = function(evt) {
    evt.preventDefault();
    if (isOnPause) {
        playButton.setAttribute('src', 'img/pause.svg');
        playButton.setAttribute('alt', 'pause');
        isOnPause = false;
    } else {
        playButton.setAttribute('src', 'img/play.svg');
        playButton.setAttribute('alt', 'play');
        isOnPause = true;
    }
};