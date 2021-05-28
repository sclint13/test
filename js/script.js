
//Header Change
let header = document.querySelector("header");
let sticky = header.offsetTop;
let width = $(window).width();
let socials = document.querySelector("#socials");

$(window).resize(function() {
  width = window.innerWidth;
  // console.log(width);
  return width;
})
// console.log('global ' + width);

$(window).ready(function() {
  if (width < 803) {
    // $('#socials').text('Socials');
    addSticky
  };
})

window.onscroll = function() {
  addSticky()
};


function addSticky() {
  if (window.pageYOffset > sticky) {
      socials.innerHTML = 'Socials';
      header.classList.add("sticky");
      
  } else {
    header.classList.remove("sticky");
    socials.innerHTML = "Social Media";
  }
}

//Nav Collapse
const nav = $('nav');
const menuToggle =$('#checkbox-menu');

$('nav').on('click', function() {
  if(menuToggle.is(':checked')) {
    // console.log(menuToggle.is(':checked'));
    menuCollapse();
  } else {
    return;
}})

$('nav').on('blur', function() {
  if(menuToggle.is(':checked')) {
    console.log(menuToggle.is(':checked'));
    menuCollapse();
  } else {
    return;
}})

function menuCollapse() {
  menuToggle.prop('checked', false);
}

// navLinks.on('click', function() {
//   menuToggle.attr("checked", false);
// })

//Footer Date
const foot = document.querySelector("#footer");
let today = new Date();
let year = today.getFullYear();

foot.innerHTML = "<p>Image Credit: Charla Hand. Copyright &copy;" + year + "</p>";