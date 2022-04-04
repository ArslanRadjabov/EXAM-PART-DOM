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
              <video src="${item.vid[0]}" class="elvid${item.id}"></video>
            </div>

            <div class="under_video under${item.id}">
            <div class="story-top">
              <div class="videotime-top-story">
              <div class="video_count">
              </div>
              </div>
              <div class="story-top-userimg">
                <div class="userImgtop">
                <img src="${item.userImg}" alt="" />
                </div>
                <div class="story-control">
                  <span><i class="bx bx-play"></i></span>
                  <span><i class="bx bxs-volume-mute"></i></span>
                  <span><i class="bx bx-dots-horizontal-rounded"></i></span>
                </div>
              </div>
            </div>
            <div class="story-bottom">
              <form action="">
                <input class="input__comment" type="text" placeholder="add comment" />
                </form>
                <span><i class="bx bxl-telegram"></i></span>
            </div>
            </div>
          </div>
            `;
});