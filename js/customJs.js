//loader

$(window).on('load', function(){
  setTimeout(hideLoader, 2000); //wait for page load PLUS two seconds.
});
function hideLoader(){
    $( "#preloader" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#preloader" ).remove(); //makes page more lightweight 
  });  
}

//function to toggle dark mode
function toggleTheme() {
  if (localStorage.theme === undefined) {
    localStorage.theme = "light";
  }
  localStorage.theme === "light"
    ? (localStorage.theme = "dark")
    : (localStorage.theme = "light");
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  console.log(localStorage.theme);
}

//toggle handling
//const checkbox = document.getElementById("toggleBox");



new TypeIt("#about-me", {
  strings: ["Dileep Kumar T","Learner", "Programmer", "JS Developer", "Tutor"],
  speed: 200,
  lifeLike: true,
  breakLines: false,
  loop: true,
}).go();

// //function to toggle dark mode
// function toggleTheme() {
//   if (localStorage.theme === undefined) {
//     localStorage.theme = "dark";
//   }
//   localStorage.theme === "light"
//     ? (localStorage.theme = "dark")
//     : (localStorage.theme = "light");
//   if (
//     localStorage.theme === "dark" ||
//     (!("theme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
//   console.log(localStorage.theme);
// }

//abot me button toggler

document.getElementById('toAboutB').addEventListener('click',scrollToAbout,false);
//scroll to about me section
function scrollToAbout(event){
  event.preventDefault();
  const targetPage=document.getElementById('about-section');
  targetPage.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

function scrollToSkills(event){
  event.preventDefault();
  const targetPage=document.getElementById('skills-section');
  targetPage.scrollIntoView({behavior: "smooth"});
}

//scroll to projects

function scrollToProjects(event){
  event.preventDefault();
  const targetPage=document.getElementById('projects-section');
  targetPage.scrollIntoView({behavior: "smooth"});
}

//progress bar
const progress=document.querySelectorAll('.progress-done');

setTimeout(()=>{
  for(let i=0;i<progress.length;i++){
    progress[i].style.opacity=1;
    progress[i].style.width=progress[i].getAttribute('data-done')+'%';
  }
},500)