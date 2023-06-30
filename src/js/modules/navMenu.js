const navMenu = () => {
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        Blackberry: function () {
            return navigator.userAgent.match(/Blackberry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iOS|Ipad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.Blackberry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );   
        }
    };
    
    if (isMobile.any()) {
        document.body.classList.add('_touch');
    
        let menuArrows = document.querySelectorAll('.menu__arrow');
        if (menuArrows.length > 0) {
            for (let index = 0; index < menuArrows.length; index++) {
                const menuArrow = menuArrows[index];
                menuArrow.addEventListener('click', () => {
                    menuArrow.parentElement.classList.toggle('_active');
                });
            }
        }
    } else {
        document.body.classList.add('_pc');
    }
    
    // Burger menu
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');
    if (iconMenu) {
        iconMenu.addEventListener('click', () => {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }
    
    // Прокрутка при клике
    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
    
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
    
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
    
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        });
    }

    // Fix Header
    function fixedNav() {
        const nav = document.querySelector('header');
        const breakpoint = 1;
        if (window.scrollY >= breakpoint) {
            nav.classList.add('fixed__nav');
        } else {
            nav.classList.remove('fixed__nav');
        }
    }

    window.addEventListener('scroll', fixedNav);
};

export default navMenu;