let story_container = document.querySelector('.container-story');
let content = document.querySelector('.content');

let stories = `
`;

story.forEach((item) => {
    stories += `
            <div class="story ell${item.id}">
            <div class="moreimg stimg${item.id}"" onclick="clickstory(${item.id})">
              <div class="userstoryimg st${item.id}">
                <img src="${item.userImg}" alt="videos" />
              </div>
              <h4>${item.userName}</h4>
              
            </div>
            <div class="container_video" onclick="clickstory(${item.id})">
            <div class="video__main">
            <video src="${item.vid[0]}" class="elvid${item.id} height=""></video>
            
            </div>
             
            </div>

            <div class="under_video under${item.id}">
            <div class="progress__bar">

                <div class="progress">
                    <span class="progress__item"></span>
                </div>

                <div class="progress">
                    <span class="progress__item progress_2"></span>
                </div>

                <div class="progress ">
                    <span class="progress__item progress_3"></span>
                </div>
            </div>
            <div class="story-top">
              <div class="videotime-top-story">
              <div class="video_count">
              </div>
              </div>
              <div class="story-top-userimg">
                <div class="userImgtop d-flex">
                <img src="${item.userImg}" alt=""/>
                </div>
                <p class="title__youtube">${item.title}</p>
                <p class="days__publish">16 нед</p>
                <div class="story-control">
                  <span><i class="bx bx-play"></i></span>
                  <span><i class="bx bxs-volume-mute"></i></span>
                  <span><i class="bx bx-dots-horizontal-rounded"></i></span>
                </div>
              </div>
            </div>
            <div class="story-bottom">
              <form>
                <input class="input__comment" type="text" placeholder="add comment" />
                </form>
                <span><i class="bx bxl-telegram"></i></span>
            </div>
            </div>
          </div>
            `;
});


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


    if (id == 1) {
        content.style.marginLeft = '470px';
    } else if (id == 2) {
        content.style.marginLeft = '235px';
    } else if (id == 3) {
        content.style.marginLeft = '0px';
    } else if (id == 5) {
        content.style.marginLeft = '-235px';
    } else {
        content.style.marginLeft = '-500px';
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