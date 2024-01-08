
const stickySections = [...document.querySelectorAll('.sticky_wrap')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  console.log("offsetTop   -   "+offsetTop);
  const scrollSection = section.querySelector('.horizontal_scroll')
  console.log(window.scrollY+" - "+window.innerHeight);
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  console.log("percentage   -   "+percentage);
  percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
  console.log("percentage finalle   -   "+percentage);
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}