let images = document.querySelectorAll('source, img');

if ('IntersectionObserver' in window) {
  // IntersectionObserver Supported
  let config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      };

  let observer = new IntersectionObserver(onChange, config);
  images.forEach(img => observer.observe(img));

  function onChange(changes, observer) {
    changes.forEach(change => {
      if (change.intersectionRatio > 0) {
        // Stop watching and load the image
        loadImage(change.target);
        observer.unobserve(change.target);
      }
    });
  }

} else {
  // IntersectionObserver NOT Supported
  images.forEach(image => loadImage(image));
}

function loadImage(image) {
  image.classList.add('fade-in');
  if(image.dataset && image.dataset.src) {
    image.src = image.dataset.src;
  }

  if(image.dataset && image.dataset.srcset) {
    image.srcset = image.dataset.srcset;
  }
}


paceOptions = {
	ajax: false,
	document: true,
	eventLag: false
};






Pace.on('done', function () {
	$('#fullpage').delay(500).fadeOut(800);
	$('#loader-container').addClass('active');
	setTimeout(function () {
		document.documentElement.className += " is-ready";
		var hT = $('html');
		if (hT.hasClass("is-ready")) {
			var tl = gsap.timeline();
			var ty = gsap.timeline(),
				mySplitText = new SplitText(".reveal-text", { type: "words,chars" });
			mySplitTextLines = new SplitText(".lines", { type: "lines" }),
				chars = mySplitText.chars;
			lines = mySplitTextLines.lines;
			gsap.set(".reveal-text", { perspective: 400 });
			gsap.set(".lines", { perspective: 800 });
			tl.from(chars, { delay: 0.350, duration: 0.7, opacity: 0, scale: 2, y: 80, rotationX: 25, transformOrigin: "0% 50% 0", ease: "back", stagger: 0.01 }, "+=0");
			ty.from(lines, { delay: 0.650, duration: 1, opacity: 0, scale: 1, y: '50%', ease: 'Circ.easeOut', stagger: 0.25 }, "+=0");
		} // if.has.class
	}, 1000);

	//Init the carousel
	initSlider();

	function initSlider() {
		var owl = $('.home-slides').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			autoplay: true,
			navText: ["<img class='ready img-fluid' src='home/images/arrow-left.svg'>", "<img class='ready img-fluid' src='home/images/arrow-right.svg'>"],
			items: 1,
			autoplayTimeout: 5000,
			dots: false,
			lazyLoad: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			onInitialized: startProgressBar,
			onTranslate: resetProgressBar,
			onTranslated: startProgressBar
		});

		$(".owl-item").each(function (i) {
			if (i > 3 && i < 8 && $('#owl-item' + (i)).hasClass('active')) {
				$('.banner__background').addClass('item' + (i));
				if (i == 4) {
					addRemoveClass("sandcastle");
				}
			}
		});

		owl.on('change.owl.carousel', function (e) {
			$(".owl-item").each(function (i) {
				if (i > 3 && i < 10 && !($('#owl-item' + (i)).hasClass('active'))) {
					$('.banner__background').removeClass('item' + (i));
				}
			});

			$(".owl-item").each(function (i) {
				if (i > 3 && i < 9 && $('#owl-item' + (i)).hasClass('active')) {
					$('.banner__background').addClass('item' + (i));
					if (i == 4) {
						addRemoveClass("greenish");
					} else if (i == 5) {
						addRemoveClass("reddish");
					} else if (i == 6) {
						addRemoveClass("blueish");
					} else if (i == 7) {
						addRemoveClass("yellowish");
					} else if (i == 8) {
						addRemoveClass("sandcastle");
					}
				}
			});
		});
	}

	function addRemoveClass(param) {
		(param == "sandcastle") ? $('.sandcastle, .el-website-bg-elements').addClass('is-show') : $('.sandcastle, .el-website-bg-elements, .yellowish, .el-cms-bg-elements').removeClass('is-show');
		(param == "greenish") ? $('.greenish, .el-mobile-bg-elements').addClass('is-show') : $('.greenish, .el-mobile-bg-elements').removeClass('is-show');
		(param == "reddish") ? $('.reddish, .el-ecommerce-bg-elements').addClass('is-show') : $('.reddish, .el-ecommerce-bg-elements').removeClass('is-show');
		(param == "blueish") ? $('.blueish, .el-marketing-bg-elements').addClass('is-show') : $('.blueish, .el-marketing-bg-elements').removeClass('is-show');
		(param == "yellowish") ? $('.yellowish, .el-cms-bg-elements').addClass('is-show') && $('html').addClass('cms-slide-active') : $('.yellowish, .el-cms-bg-elements').removeClass('is-show') && $('html').removeClass('cms-slide-active');
	}

	$(document).ready(function () {
		$(".owl-item").each(function (i) {
			$(this).attr('id', "owl-item" + (i + 1));
			if (i > 3 && i < 9 && $('#owl-item' + (i)).hasClass('active')) {
				$('.banner__background').addClass('item' + (i));
				if (i == 4) {
					addRemoveClass("sandcastle");
				}
			}
		});
	});

	function startProgressBar() {
		// apply keyframe animation
		$(".slide-progress").css({
			width: "100%",
			transition: "width 5000ms"
		});
	}

	function resetProgressBar() {
		$(".slide-progress").css({
			width: 0,
			transition: "width 0s"
		});
	}

});




const $menu = $('.overlay-menu, .reveal-section');
$(document).mouseup(e => {
	if (!$menu.is(e.target) // if the target of the click isn't the container...
		&& $menu.has(e.target).length === 0) {
		$menu.removeClass('is-open');
		$('html').removeClass('overlay-action-open overlay-lock overlay-sidebar-open');
	}
});

$('.overlay-button').on('click', () => {
	$menu.toggleClass('is-open');
	$('html').addClass('overlay-action-open overlay-lock overlay-sidebar-open');
});


// FIXED HEADER
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 450) {
		$(".header-fixed").addClass("is-show");
		$('html').addClass('fixed-header-enabled');
	} else {
		$(".header-fixed").removeClass("is-show");
		$('html').removeClass('fixed-header-enabled');
	}
});

$(window).resize(function () {
	if ($(window).width() > 650) {
		$('ul.menu li').removeAttr('style');
	}
});

var isShown = false;
function showRevealSection() {
	$('#reveal-section').addClass('is-show');
}
function hideRevealSection() {
	$('#reveal-section').removeClass('is-show');
}

// $("[data-technologies]").on('mouseover', function () {
// 	$('#reveal-section').addClass('is-show');
// })

// $("[data-technologies]").on('mouseleave', function () {
// 	$('#reveal-section').removeClass('is-show');
// })

// $("[data-technologies]").hover(function() {
// 	console.log("BEFORE "+isShown);
// 	if(!isShown){
// 		$('#reveal-section').toggleClass('is-show');
// 		isShown = true;
// 	}
// 	console.log("AFTER "+isShown);
// });

$("#more-menu-button").click(function () {
	$('#more-menu').toggleClass('is-show');
});

$(".modal-button").click(function () {
	$('.menu-button').addClass('is-hide');
});
$(".close-btn").click(function () {
	$('.menu-button').removeClass('is-hide');
});

$(".services-menu").hover(function () {
	$('.navbar-dropdown').toggleClass('active');
});

$("[data-menu-hidden]").hover(function () {
	$('.home-slides').toggleClass('hide');
});

// TRANSITION ANIMATION
// --------------------
$('.transition').on('click', function (e) {
	e.preventDefault(); // prevent default anchor behavior
	var goTo = this.getAttribute("href"); // store anchor href
	// TRANSITION
	var transition = $('.PageTransitions__mainWrapper ');
	transition.css({ 'display': '' });
	transition.addClass('PageTransitions__mainWrapperAnimation--onboard');
	setTimeout(function () {
		transition.css({ 'display': 'none' });
		transition.removeClass('PageTransitions__mainWrapperAnimation--onboard');
	}, 2000);

	setTimeout(function () {
		window.location = goTo;
	}, 500); // time in ms
});

$("[data-services]").click(function () {
	$('.navbar-dropdown').addClass('is-show');
	$('body').addClass('stickToWindow');
});

$(".dropdown-section-close").click(function () {
	$('.navbar-dropdown').removeClass('is-show');
	$('body').removeClass('stickToWindow');
});

var accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var details = this.nextElementSibling;
		if (details.style.maxHeight) {
			details.style.maxHeight = null;
		} else {
			details.style.maxHeight = details.scrollHeight + "px";
		}
	});
}

var TxtRotate = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 5000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 150 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}

	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-color: #345344}";
	document.body.appendChild(css);
};

// Timeline Scroll Section
// --------------------------------------------------------------
var items = $(".timeline li"),
	timelineHeight = $(".timeline ul").height(),
	greyLine = $('.default-line'),
	lineToDraw = $('.draw-line');

// sets the height that the greyLine (.default-line) should be according to `.timeline ul` height

// run this function only if draw line exists on the page
if (lineToDraw.length) {
	$(window).on('scroll', function () {

		// Need to constantly get '.draw-line' height to compare against '.default-line'
		var redLineHeight = lineToDraw.height(),
			greyLineHeight = greyLine.height(),
			windowDistance = $(window).scrollTop(),
			windowHeight = $(window).height() / 2,
			timelineDistance = $(".timeline").offset().top;

		if (windowDistance >= timelineDistance - windowHeight) {
			line = windowDistance - timelineDistance + windowHeight;

			if (line <= greyLineHeight) {
				lineToDraw.css({
					'height': line + 20 + 'px'
				});
			}
		}

		// This takes care of adding the class in-view to the li:before items
		var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
		items.each(function (index) {
			var circlePosition = $(this).offset();

			if (bottom > circlePosition.top) {
				$(this).addClass('in-view');
			} else {
				$(this).removeClass('in-view');
			}
		});
	});
}





















jQuery(function ($) {

	'use strict';
	loader();
	animateReveal();

});


var loader = function () {
	setTimeout(function () {
		TweenMax.to('.site-loader-wrap', 1, { marginTop: 50, autoAlpha: 0, ease: Power4.easeInOut });
	}, 10);
	$(".site-loader-wrap").delay(200).fadeOut("slow");
	$("#unslate_co--overlayer").delay(200).fadeOut("slow");
}

var animateReveal = function () {
	var controller = new ScrollMagic.Controller();
	var greveal = $('.gsap-reveal');
	// gsap reveal
	$('.gsap-reveal').each(function () {
		$(this).append('<span class="cover"></span>');
	});
	if (greveal.length) {
		var revealNum = 0;
		greveal.each(function () {
			var cover = $(this).find('.cover');

			var tl = new TimelineMax();

			setTimeout(function () {
				tl
					.fromTo(cover, 1, { skewX: 0 }, { xPercent: 101, transformOrigin: "0% 100%", ease: power2.out })
			}, revealNum * 0);

			var scene = new ScrollMagic.Scene({
				triggerElement: this,
				duration: "0%",
				reverse: false,
				offset: "-300%",
			})
				.setTween(tl)
				.addTo(controller);

			revealNum++;

		});
	}

	// gsap reveal hero
	$('.gsap-reveal-hero').each(function () {
		var html = $(this).html();
		$(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">' + html + '</span></span>');
	});
	var grevealhero = $('.gsap-reveal-hero');
	if (grevealhero.length) {
		var heroNum = 0;
		grevealhero.each(function () {
			var cover = $(this).find('.cover'),
				revealContent = $(this).find('.reveal-content');
			var tl2 = new TimelineMax();
			setTimeout(function () {
				tl2
					.to(cover, 1, {
						marginLeft: '0', ease: "power2.inOut", onComplete() {
							tl2.set(revealContent, { x: 0 });
							tl2.to(cover, 1, { marginLeft: '102%', ease: "power2.inOut" });
						}
					})
			}, heroNum * 0);
			var scene = new ScrollMagic.Scene({
				triggerElement: this,
				duration: "0%",
				reverse: false,
				offset: "-900%",
			})
				.setTween(tl2)
				.addTo(controller);

			heroNum++;
		});
	}

}






