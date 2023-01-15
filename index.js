let switch_btn = document.querySelector(".switch_light_container button");
let light = document.querySelector(".light_container");
let light_sound = document.querySelector(".light_sound");
switch_btn.addEventListener('click', () => {
    switch_btn.classList.toggle('move_left');
    light.classList.toggle('on');
    light_sound.play()
})