const video1 = document.getElementById('project-video1');
const video2 = document.getElementById('project-video2');
const video3 = document.getElementById('project-video3');
const hoverSign = document.querySelector('.hover-sign')

// sidebar elements 
const sidebar = document.querySelector('.side-bar');
const menu = document.querySelector('.menu-icon');
const closing = document.querySelector('.close-icon');

const videoList = [video1,video2,video3];
videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
        hoverSign.classList.add('active')
    })
    video.addEventListener('mouseout',function(){
        video.pause()
        hoverSign.classList.remove('active')
    })
}) 


menu.addEventListener("click",function(){
    sidebar.classList.remove('close-sidebar')
    sidebar.classList.add('open-sidebar')
})

closing.addEventListener("click",function(){
    sidebar.classList.remove('open-sidebar')
    sidebar.classList.add('close-sidebar')
})
