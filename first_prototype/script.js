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

let langSelect = document.querySelector('.lang-select');
let algorithmStepDescription = document.querySelector('.algorithm-step p');
let ruText = 'distance(start, v) - длинна кратчайшего из (известных нам на данный момент)\n' +
    '                    путей от начальной вершины start до вершины v. По ходу работы алгоритма\n' +
    '                    значения в distance  будут обновляться. Изначально distance(start, v) = 0,\n' +
    '                    а для всех остальных вершин длинна пути равна бесконечности.\n' +
    '                    Синим цветом обозначим номера вершин. Внутри каждой вершины v будем записывать\n' +
    '                    текущее значение distance(start, v).\n' +
    '                    Обработанными будем называть вершины, для которых distance больше не будет\n' +
    '                    обновляться. То есть те, для которых мы уже нашли кратчайший возможный путь.\n' +
    '                    В начале, конечно, все вершины необработанные.';
let enText = 'distance(start, v) - the length of the shortest (currently known to us)' +
    ' path from the initial vertex start to the vertex v. As the algorithm works,' +
    ' the values in distance will be updated. Initially distance(start, v) = 0,' +
    ' and for all other vertices the path length is equal to infinity.\n' +
    '    In blue we denote the numbers of vertices.' +
    ' Inside each vertex v we will write the current value of distance(start, v).\n' +
    '    Processed vertices are vertices for which distance is no longer updated.' +
    ' That is, those for which we have already found the shortest possible path.' +
    ' In the beginning, of course, all vertices are unprocessed.';

langSelect.onchange = function () {
    if (langSelect.value === 'en') {
        algorithmStepDescription.setAttribute('lang', 'en');
        algorithmStepDescription.textContent = enText;
    } else {
        algorithmStepDescription.setAttribute('lang', 'ru');
        algorithmStepDescription.textContent = ruText;
    }
};