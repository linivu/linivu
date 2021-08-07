const stickyNavbar = () => {
  const home = document.querySelector('.home');
  const header = document.querySelector('.header');
  const headerHeight = header.getBoundingClientRect().height;

  const stickyOptions = {
    root: null,
    rootMargin: `-${headerHeight}px`,
    threshold: 0,
  };

  const stickyCallback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  };

  const stickyObserver = new IntersectionObserver(stickyCallback, stickyOptions);

  stickyObserver.observe(home);
};

export default stickyNavbar;
