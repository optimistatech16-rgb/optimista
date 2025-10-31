"use strict";
!function () {

    window.Element.prototype.removeClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.remove(className);
        }
        return this;
    }, window.Element.prototype.addClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.add(className);
        }
        return this;
    }, window.Element.prototype.toggleClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.toggle(className);
        }
        return this;
    }, window.Element.prototype.isVariableDefined = function () {
        return !!this && typeof (this) != 'undefined' && this != null;
    }
}();

var e = {
    init: function () {
        e.preLoader(),
        e.dropdownHover(),
        e.stickyHeader(),
        e.stickyBar(),
        e.toolTipFunc(),
        e.popOverFunc(),
        e.backTotop(),
        e.lightBox(),
        e.aosFunc(),
        e.stepper(),
        e.pricing(),
        e.stickyElement(),
        e.pswMeter(),
        e.fakePwd(),
        e.autoTabinput(),
        e.parallaxBG(),
        e.typeText(),
        e.enableIsotope(),
        e.swiperSlider(),
        e.mouseMove(),
        e.pCounter(),
        e.bootstrapValidation()
        
    },
    isVariableDefined: function (el) {
        return typeof !!el && (el) != 'undefined' && el != null;
    },
    getParents: function (el, selector, filter) {
        const result = [];
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        // match start from parent
        el = el.parentElement;
        while (el && !matchesSelector.call(el, selector)) {
            if (!filter) {
                if (selector) {
                    if (matchesSelector.call(el, selector)) {
                        return result.push(el);
                    }
                } else {
                    result.push(el);
                }
            } else {
                if (matchesSelector.call(el, filter)) {
                    result.push(el);
                }
            }
            el = el.parentElement;
            if (e.isVariableDefined(el)) {
                if (matchesSelector.call(el, selector)) {
                    return el;
                }
            }

        }
        return result;
    },
    getNextSiblings: function (el, selector, filter) {
        let sibs = [];
        let nextElem = el.parentNode.firstChild;
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        do {
            if (nextElem.nodeType === 3) continue; // ignore text nodes
            if (nextElem === el) continue; // ignore elem of target
            if (nextElem === el.nextElementSibling) {
                if ((!filter || filter(el))) {
                    if (selector) {
                        if (matchesSelector.call(nextElem, selector)) {
                            return nextElem;
                        }
                    } else {
                        sibs.push(nextElem);
                    }
                    el = nextElem;

                }
            }
        } while (nextElem = nextElem.nextSibling)
        return sibs;
    },
    on: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors);
            }
            selectors.addEventListener(type, listener);
        });
    },
    onAll: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(selectors).forEach((element) => {
                if (type.indexOf(',') > -1) {
                    let types = type.split(',');
                    types.forEach((type) => {
                        element.addEventListener(type, listener);
                    });
                } else {
                    element.addEventListener(type, listener);
                }


            });
        });
    },
    removeClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.removeClass(className);
        }
    },
    removeAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors) && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.removeClass(className);
            });
        }

    },
    toggleClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.toggleClass(className);
        }
    },
    toggleAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors)  && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.toggleClass(className);
            });
        }
    },
    addClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.addClass(className);
        }
    },
    select: function (selectors) {
        return document.querySelector(selectors);
    },
    selectAll: function (selectors) {
        return document.querySelectorAll(selectors);
    },

    preLoader: function () {
        window.onload = function () {
            var preloader = e.select('.preloader');
            if (e.isVariableDefined(preloader)) {
                preloader.className += ' animate__animated animate__fadeOut';
                setTimeout(function(){
                    preloader.style.display = 'none';
                }, 200);
            }
        };
    },

    dropdownHover: function () {
      if (window.matchMedia('(min-width: 992px)').matches) {
        (function($bs) {
          document.querySelectorAll('.dropdown-hover .dropdown').forEach(function(dd) {
              dd.addEventListener('mouseenter', function(e) {
                  let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
                  if (!toggle.classList.contains('show')) {
                      $bs.Dropdown.getOrCreateInstance(toggle).toggle();
                  }
              });
              dd.addEventListener('mouseleave', function(e) {
                  let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
                  if (toggle.classList.contains('show')) {
                      $bs.Dropdown.getOrCreateInstance(toggle).toggle();
                  }
              });
          });
        })(bootstrap);
      }
    },

    stickyHeader: function () {
      if (window.matchMedia('(min-width: 1200px)').matches) {
          var stickyNav = e.select('.header-sticky');
          if (e.isVariableDefined(stickyNav)) {
              document.addEventListener('scroll', function (event) {
                  var scTop = window.pageYOffset || document.documentElement.scrollTop;
                  if (scTop >= 400) {
                      stickyNav.addClass('header-sticky-on');
                  } else {
                      stickyNav.removeClass("header-sticky-on");
                  }
              });
          }
      }
    },  

    stickyBar: function () {
        var sb = e.select('[data-sticky]');
        if (e.isVariableDefined(sb)) {
            var sticky = new Sticky('[data-sticky]');
        }
    },

    toolTipFunc: function () {
        var tooltipTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    },

    popOverFunc: function () {
        var popoverTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl)
        })
    },

    backTotop: function () {
        var scrollpos = window.scrollY;
        var backBtn = e.select('.back-top');
        if (e.isVariableDefined(backBtn)) {
            var add_class_on_scroll = () => backBtn.addClass("back-top-show");
            var remove_class_on_scroll = () => backBtn.removeClass("back-top-show");

            window.addEventListener('scroll', function () {
                scrollpos = window.scrollY;
                if (scrollpos >= 800) {
                    add_class_on_scroll()
                } else {
                    remove_class_on_scroll()
                }
            });

            backBtn.addEventListener('click', () => window.scrollTo({
                top: 0,
                behavior: 'smooth',
            }));
        }
    },

    lightBox: function () {
        var light = e.select('[data-glightbox]');
        if (e.isVariableDefined(light)) {
            var lb = GLightbox({
                selector: '*[data-glightbox]',
                openEffect: 'fade',
                closeEffect: 'fade'
            });
        }
    },

    aosFunc: function () {
        var aos = e.select('.aos');
        if (e.isVariableDefined(aos)) {
            AOS.init({
                duration: 500,
                easing: 'ease-out-quart',
                once: true
            });
        }
    },

    stepper: function () {
        var stp = e.select('#stepper');
        if (e.isVariableDefined(stp)) {
          var nxtBtn = document.querySelectorAll('.next-btn');
          var prvBtn = document.querySelectorAll('.prev-btn');

          var stepper = new Stepper(document.querySelector('#stepper'), {
            linear: false,
            animation: true
          });

          nxtBtn.forEach(function (button) {
            button.addEventListener("click", () =>{
            stepper.next()
          })
          });

          prvBtn.forEach(function (button) {
            button.addEventListener("click", () =>{
            stepper.previous()
          })
          });
        }
    },

    pricing: function () {
        var p = e.select('.price-wrap');
        if (e.isVariableDefined(p)) {
          var pWrap = e.selectAll(".price-wrap");
          pWrap.forEach(item => {

            var priceSwitch = item.querySelector('.price-toggle'),
            priceElement = item.querySelectorAll('.plan-price');

            priceSwitch.addEventListener('change', function () {
              if (priceSwitch.checked) {
                priceElement.forEach(pItem => {
                  var dd = pItem.getAttribute('data-annual-price');
                  pItem.innerHTML = dd;
                });
              } else {
                priceElement.forEach(pItem => {
                  var ee = pItem.getAttribute('data-monthly-price');
                  pItem.innerHTML = ee;
                });
              }
            });
          });
        }
    },

    stickyElement: function () {
    var scrollpos = window.scrollY;
    var sp = e.select('.sticky-element');
    if (e.isVariableDefined(sp)) {
        var add_class_on_scroll = () => sp.addClass("sticky-element-sticked");
        var remove_class_on_scroll = () => sp.removeClass("sticky-element-sticked");

        window.addEventListener('scroll', function () {
            scrollpos = window.scrollY;
            if (scrollpos >= 800) {
                add_class_on_scroll()
            } else {
                remove_class_on_scroll()
            }
        });
    }
    },

    pswMeter: function () {
      if (e.isVariableDefined(e.select('#pswmeter'))) {
        const myPassMeter = passwordStrengthMeter({
          containerElement: '#pswmeter',
          passwordInput: '#psw-input',
          showMessage: true,
          messageContainer: '#pswmeter-message',
          messagesList: [
            'Write your password...',
            'Easy peasy!',
            'That is a simple one',
            'That is better',
            'Yeah! that password rocks ;)'
          ],
          height: 8,
          borderRadius: 4,
          pswMinLength: 8,
          colorScore1: '#dc3545',
          colorScore2: '#f7c32e',
          colorScore3: '#4f9ef8',
          colorScore4: '#0cbc87'
        });
      }
    },

    fakePwd: function () {
      if (e.isVariableDefined(e.select('.fakepassword'))) {
        var password = document.querySelector('.fakepassword');
        var toggler = document.querySelector('.fakepasswordicon');
      
        var showHidePassword = () => {
          if (password.type == 'password') {
            password.setAttribute('type', 'text');
            toggler.classList.add('fa-eye');
          } else {
            toggler.classList.remove('fa-eye');
            password.setAttribute('type', 'password');
          }
        };
      
        toggler.addEventListener('click', showHidePassword);
      }
    },

    autoTabinput: function () {
      var autb = document.getElementsByClassName("autotab")[0];
      if (e.isVariableDefined(autb)) {
        autb.onkeyup = function (e) {
          var target = e.srcElement;
          var maxLength = parseInt(target.attributes["maxlength"].value, 10);
          var myLength = target.value.length;
          if (myLength >= maxLength) {
            var next = target;
            while (next = next.nextElementSibling) {
              if (next == null)
                break;
              if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
              }
            }
          }
        }
      }
    },

    parallaxBG: function () {
      var parBG = e.select('.bg-parallax');
      if (e.isVariableDefined(parBG)) {
          jarallax(e.selectAll('.bg-parallax'), {
              speed: 0.6
          });
      }
    },

    typeText: function () {
      var t = e.select('.typed');
      if (e.isVariableDefined(t)) {
          var type = e.selectAll('.typed');
          type.forEach(el => {
              var strings = el.getAttribute('data-type-text');
              var split_strings = strings.split("&&");
              var typespeed = el.getAttribute('data-speed') ? el.getAttribute('data-speed') : 200;
              var typeBackSpeed = el.getAttribute('data-back-speed') ? el.getAttribute('data-back-speed') : 50;

              ityped.init(el, {
                  strings: split_strings,
                  showCursor: true,
                  typeSpeed: typespeed,
                  backSpeed: typeBackSpeed
              });
          });
      }
  },
    enableIsotope: function () {
    var isGridItem = e.select('.grid-item');
    if (e.isVariableDefined(isGridItem)) {
        var onlyGrid = e.select('[data-isotope]');
        if (e.isVariableDefined(onlyGrid)) {
            var allGrid = e.selectAll("[data-isotope]");
            allGrid.forEach(gridItem => {
                var gridItemData = gridItem.getAttribute('data-isotope');
                var gridItemDataObj = JSON.parse(gridItemData);
                var iso = new Isotope(gridItem, {
                    itemSelector: '.grid-item',
                    layoutMode: gridItemDataObj.layoutMode
                });

                imagesLoaded(gridItem).on('progress', function () {
                    iso.layout();
                });
            });
        }

        var onlyGridFilter = e.select('.grid-menu');
        if (e.isVariableDefined(onlyGridFilter)) {
            var filterMenu = e.selectAll('.grid-menu');
            filterMenu.forEach(menu => {
                var filterContainer = menu.getAttribute('data-target');
                var a = menu.dataset.target;
                var b = e.select(a);
                var filterContainerItemData = b.getAttribute('data-isotope');
                var filterContainerItemDataObj = JSON.parse(filterContainerItemData);
                var filter = new Isotope(filterContainer, {
                    itemSelector: '.grid-item',
                    transitionDuration: '0.7s',
                    layoutMode: filterContainerItemDataObj.layoutMode
                });

                var menuItems = menu.querySelectorAll('li a');
                menuItems.forEach(menuItem => {
                    menuItem.addEventListener('click', function (event) {
                        var filterValue = menuItem.getAttribute('data-filter');
                        filter.arrange({filter: filterValue});
                        menuItems.forEach((control) => control.removeClass('active'));
                        menuItem.addClass('active');
                    });
                });

                imagesLoaded(filterContainer).on('progress', function () {
                    filter.layout();
                });
            });
        }

        }
    },

  swiperSlider: function () {

    var swpr = e.select('[data-swiper-options]');
    if (e.isVariableDefined(swpr)) {

      let defaults = {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        autoplay:{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
        freeMode: false,
      };

      initSwipers(defaults);
      
      function initSwipers(defaults = {}, selector = ".swiper") {
        let swipers = document.querySelectorAll(selector);

        swipers.forEach((swiper) => {
          let optionsData = swiper.getAttribute("data-swiper-options")
            ? JSON.parse(swiper.getAttribute("data-swiper-options"))
            : {};

          let options = {
            ...defaults,
            ...optionsData
          };

          new Swiper(swiper, options);
        });
      }
    }
  },

   mouseMove: function () {
    document.addEventListener("mousemove", parallax);
        function parallax(event) {
            this.querySelectorAll(".parallax-wrap .layer").forEach((shift) => {
                const position = shift.getAttribute("data-depth");
                const x = (window.innerWidth - event.pageX * position) / 90;
                const y = (window.innerHeight - event.pageY * position) / 90;

                shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }
    },
    pCounter: function () {
        var pCounter = e.select('.purecounter');
        if (e.isVariableDefined(pCounter)) {
          new PureCounter();
        }
    },

    bootstrapValidation: function () {
        var forms = e.selectAll('.needs-validation');
        if (e.isVariableDefined(forms)) {
            Array.from(forms).forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.addClass('was-validated');
                }, false);
            });
        }
    },

};
e.init();

document.addEventListener("DOMContentLoaded", function () {
    var wrapper = document.createElement("div");
    wrapper.className = "position-fixed";
    wrapper.style.zIndex = "99999";

    function updatePosition() {
        if (window.innerWidth <= 420) {
            wrapper.style.bottom = "20px";
            wrapper.style.right = "20px";
        } else if (window.innerWidth <= 576) {
            wrapper.style.bottom = "10px";
            wrapper.style.right = "50px";
        } else {
            wrapper.style.bottom = "20px";
            wrapper.style.right = "70px";
        }
    }

    updatePosition();

    window.addEventListener("resize", updatePosition);
});