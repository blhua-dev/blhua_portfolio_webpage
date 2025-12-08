//sidebar navigation//
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show'))
  closeAllSubMenus()

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.previousElementSibling.classList.remove('rotate')
  })
}

//Creating VideoPlayer Gallery//

document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () =>{
        document.querySelector('.popup-video').style.display = 'block'
        document.querySelector('.popup-video video').src = vid.getAttribute('src');
    }
    });
document.querySelector('.popup-video span').onclick = () =>{
    document.querySelector('.popup-video').style.display = 'none'
    document.querySelector('.popup-video video').audioElement.pause();
}
