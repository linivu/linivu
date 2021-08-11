const scrollAware = () => {
  const selectElementByClass = (className) => {
    return document.querySelector(`.${className}`);
  };

  const sections = [
    selectElementByClass('home'),
    selectElementByClass('about'),
    selectElementByClass('services'),
    selectElementByClass('works'),
  ];

  const navItems = {
    home: selectElementByClass('home-link'),
    about: selectElementByClass('about-link'),
    services: selectElementByClass('services-link'),
    works: selectElementByClass('works-link'),
  };

  // Intersection observer setup
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        const navItem = navItems[entry.target.id];

        // add 'active' class on the navItem
        navItem.classList.add('active');
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(navItems).forEach((item) => {
          if (item !== navItem) {
            item.classList.remove('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
};

export default scrollAware;
