// When the user scrolls down, hide the navbar.
//When the user scrolls up, show the navbar.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

// Close responsive hamburger menu when click on menu item
var menu = document.getElementById('responsive-menu');
    var closeIcon = document.getElementById("closeIcon");

    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        closeIcon.checked = false;
      }
    }

// Erase unnecessary <a> tags generated in .social-buttons class
const buttons = document.querySelectorAll(".social-buttons a");
buttons[0].parentNode.removeChild(buttons[0])

// Add animations on mouse hover to main-info-section <span> contents
const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
	span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
	span.classList.remove('animated', 'rubberBand')
}))

// Animate skills bar with ScrollMagic
const pythonBar = document.querySelector('.bar-python')
const sqlBar = document.querySelector('.bar-sql')
const tfBar = document.querySelector('.bar-tf')
const kerasBar = document.querySelector('.bar-keras')
const webdesignBar = document.querySelector('.bar-web-design')

var t1 = new TimelineLite()

t1.fromTo(pythonBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
	.fromTo(sqlBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(80% - 6px)', ease: Power4.easeOut})
	.fromTo(tfBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(95% - 6px)', ease: Power4.easeOut})
	.fromTo(kerasBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(75% - 6px)', ease: Power4.easeOut})
	.fromTo(webdesignBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(70% - 6px)', ease: Power4.easeOut})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
	triggerElement: '.skills',
	triggerHook: 0,
	offset: -200,
})
.setTween(t1)
.addTo(controller)

// Filter contents in project categories
const showRequiredCategory = event => {
	const getId = event.id
	const links = document.querySelectorAll('.projects-category button')
	for(i = 0; i < links.length; i++) {
		if(links[i].hasAttribute('class')) {
			links[i].classList.remove('active')
		}
	}

	event.classList.add('active')
	const getCategory = document.querySelector('.category-'+getId)
	const categories = document.querySelectorAll('div[class^= "category-"]')
	for(i = 0; i < categories.length; i++) {
		if(categories[i].hasAttribute('class')) {
			categories[i].classList.remove('showCategory')
			categories[i].classList.add('hideCategory')
		}
	}
	getCategory.classList.remove('hideCategory')
	getCategory.classList.add('showCategory')
}

// end
