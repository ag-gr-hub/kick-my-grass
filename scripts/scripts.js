    // const menuValue = [
    //     {
    //       value: 'Las Vegas',
    //       url: 'index.html',
    //     },
    //     {
    //       value: 'New York City',
    //       url: 'new-york.html',
    //     },
    //     {
    //       value: 'Washington DC',
    //       url: 'washington-dc.html',
    //     },
    //   ];
      
    //   const ddMenu = document.querySelector('.selector');
    //   const caret = document.querySelector('.caret');
    //   let userSelection = document.getElementById('user-selection');
      
    //   ddMenu.addEventListener('click', ddClickHandler);
      
      function ddClickHandler() {
        const children = Array.from(ddMenu.parentElement.children);
        if (children.length === 1) {
          const menu = document.createElement('div');
          menu.classList.add('menu-values');
          for (var i = 0; i < menuValue.length; i++) {
            const item = document.createElement('a');
            item.innerText = menuValue[i].value;
            item.classList.add('item');
            menu.appendChild(item);
            setMenuListeners(item);
          }
          ddMenu.parentElement.append(menu);
        } else {
          const items = Array.from(children[1].children);
          removeMenuListeners(items);
          closeMenu(children);
        }
        caret.classList.toggle('rotate-caret');
      }
      
      function setMenuListeners(elem) {
        elem.addEventListener('click', menuItemHandler);
      }
      
      function removeMenuListeners(arr) {
        for (var i = 0; i < arr.length; i++) {
          arr[i].removeEventListener('click', menuItemHandler);
        }
      }
      
      function menuItemHandler(e) {
        userSelection.innerText = e.target.innerText;
        ddClickHandler();
      }
      
      function closeMenu(arr) {
        arr[1].remove();
      }
      
      window.forceClickMenu = () => {
        const menuOpen = document.querySelector('.menu-values');
        menuOpen ? ddClickHandler() : '';
      };
      
      window.addEventListener('resize', windowResizeHandler);
      window.addEventListener('scroll', scrollingEventHandler);
      function scrollingEventHandler() {
        forceClickMenu();
        resetMobile();
      }
      
      function resetMobile() {
        const mobileIcon = document.querySelector('#mobile-icon');
        const overlay = document.querySelector('.overlay');
        mobileIcon.classList.remove('change');
        mobileMenu.style.display = 'none';
        overlay.style.display = 'none';
      }
      
      function windowResizeHandler() {
        const windowWidth = window.innerWidth;
        windowWidth <= 1110 ? resetMobile() : forceClickMenu();
      }
      
      const navLinks = document.querySelectorAll('[data-link]');
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', forceClickMenu);
      }
      
      const fauxButton = document.querySelector('.faux-button');
      const mobileMenu = document.querySelector('.mobile-menu');
      const mobileIcon = document.querySelector('#mobile-icon');
      const overlay = document.querySelector('.overlay');
      
      overlay.addEventListener('click', resetMobile);
      fauxButton.addEventListener('click', toggleMobileMenu);
      
      function toggleMobileMenu(e) {
        mobileIcon.classList.toggle('change');
        if (mobileIcon.classList.contains('change')) {
          mobileMenu.style.display = 'block';
          overlay.style.display = 'block';
        } else {
          resetMobile();
        }
      }
      
      const images = [
        {
          url: './images/quote.jpg',
          elem: 'img1',
        },
        {
          url: './images/appointment.jpg',
          elem: 'img2',
        },
        {
          url: './images/reliable.jpg',
          elem: 'img3',
        },
        {
          url: './images/lawn-mowing.jpeg',
          elem: 'img4',
        },
        {
          url: './images/pexels-stitch-24595771.jpg',
          elem: 'img5',
        },
        {
          url: './images/replant.jpg',
          elem: 'img6',
        },
        {
          url: './images/chainsaw.jpeg',
          elem: 'img7',
        },
        {
          url: './images/trash.jpeg',
          elem: 'img8',
        },
        {
          url: './images/powerwash.jpeg',
          elem: 'img9',
        },
        {
          url: './images/handyman.webp',
          elem: 'img10',
        },
        {
          url: './images/moving.webp',
          elem: 'img11',
        },
      ];
      const preloadImage = (src, index) =>
        new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = reject;
          image.src = src;
          resolve(appendImage(image, index));
        });
      
      await Promise.all(images.map((x) => preloadImage(x.url, x.elem)));
      
      function appendImage(val, i) {
        const elem = document.querySelector(`[${i}]`);
        elem.appendChild(val);
      }
      