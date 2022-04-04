const elList = document.querySelector('.slide__list');


for (let i = 0; i < objects.length; i++) {
    let li = document.createElement("li");
    li.className = "slide__item";
    li.innerHTML = `
    <span class="slide__lines">----------</span>
    <div class="slide__header row">
        <img class="slide__avatar" src="images/avatarka.jpg" alt="" width="30" height="30">
        <a class="avatar__text" href="#">Culture</a>
        <p class="avatar__days">69 нед</p>
        <div class="slide__btns row">
            <button class="btn__social"><i class='bx bx-pause'></i></button>
            <button class="btn__social"><i class='bx bx-volume-mute'></i></button>
            <button class="btn__social"><i class='bx bx-dots-horizontal-rounded'></i></button>
        </div>
    </div>
    <div class="slide__media">
        <video class="slide__media__vid" src="${objects[0].media[0]}" alt="video">
    </div>
    <div class="slide__footer row">
      
      <input class="slide__input" type="text" placeholder="answer apple">
      
      <svg aria-label="Direct" class="_8-yf5  messageIcon" color="#dbdbdb" fill="#dbdbdb" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
    </div>
    <button class="right__btn sliderBtn">
      <i class='bx bxs-chevron-right'></i>
    </button>
    <button class="left__btn sliderBtn">
      <i class='bx bxs-chevron-left'></i>
    </button>

    `
    elList.appendChild(li);
}