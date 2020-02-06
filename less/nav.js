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
//step 3 add event listener that
const navDiv = window.getElementById('id');
window.addEventListener('resize', () => {
    if(window.innerwidth > 667) {
        navDiv.style.display = 'block';
    }
});

const navDiv1 = window.getElementById('id');
window.addEventListener('resize', () => {
    if(window.innerwidth < 667) {
        navDiv1.style.display = 'block';
    }
});