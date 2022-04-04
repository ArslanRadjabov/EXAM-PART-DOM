const story = [{
        id: 1,
        userName: 'Beatudil',
        vid: ['../images/landscape3.mp4'],
        userImg: '../images/avatarka3.jpg',
    },
    {
        id: 2,
        userName: 'Scarelet',
        vid: [
            '../images/landscape4.mp4'
        ],
        userImg: '../images/avatarka4.webp',
    },
    {
        id: 3,
        userName: 'Helena',
        vid: ['../images/landscape5.mp4', ],
        userImg: '../images/avatarka4.webp',
    },
    {
        id: 5,
        userName: 'Ruby',
        vid: ['../images/landscape6.mp4', ],
        userImg: '../images/avatarka3.jpg',
    },
    {
        id: 6,
        userName: 'Helloween',
        vid: ['../images/landscape4.mp4'],
        userImg: '../images/avatarka2.jpg',
    }
];


content.innerHTML = stories;
let i = 0;
let playedid = '';
let currentId = 0;

function clickstory(id) {
    currentId = id;
    if (i == 1) {
        let clickedstory = document.querySelector('.clickedstory');
        clickedstory.classList.remove('clickedstory');
        let usermainimage = document.querySelector('.usermainimage');
        usermainimage.classList.remove('usermainimage');
        let underclass = document.querySelector('.under');
        underclass.classList.remove('under');
        let elvid = document.querySelector('.elvid' + playedid);
        elvid.pause();
        i--;
    }
    let under = document.querySelector('.under' + id);
    under.classList.add('under');
    let elvid = document.querySelector('.elvid' + id);
    elvid.play();
    playedid = id;
    let moreimg = document.querySelector('.stimg' + id);
    moreimg.classList.add('usermainimage');
    let clickedel = document.querySelector('.ell' + id);
    clickedel.classList.add('clickedstory');
    i++;

    //   move
    if (id == 1) {
        content.style.marginLeft = '470px';
    } else if (id == 2) {
        content.style.marginLeft = '235px';
    } else if (id == 3) {
        content.style.marginLeft = '0px';
    } else if (id == 5) {
        content.style.marginLeft = '-235px';
    } else if (id == 6) {
        content.style.marginLeft = '-470px';
    } else if (id == 7) {
        content.style.marginLeft = '-705px';
    } else if (id == 8) {
        content.style.marginLeft = '-940px';
    } else if (id == 9) {
        content.style.marginLeft = '-1175px';
    } else if (id == 9) {
        content.style.marginLeft = '-1410px';
    } else {
        content.style.marginLeft = '-1410px';
    }
}
setInterval(interval, 15000);

function interval() {
    if (currentId !== 0) {
        if (currentId > 1) {
            currentId++;
        } else if (currentId == 9) {
            clickstory(id);
            currentId--;
        }
    }
}
interval();