function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

//step 1 include js file inside of html file. 
//step 2 correctly select the hamburger icon
//step 3 add event listener
const navDiv = document.getElementById('myLinks');
  window.addEventListener('resize', () => {
    if(window.innerWidth > 667) {
        navDiv.style.display = 'flex';
    } else {
      navDiv.style.display = 'none';
    }
});