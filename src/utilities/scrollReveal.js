const scrollReveal = () => {
  const animatedItems = document.querySelectorAll('[data-animate="fade-up"]');

  const animateOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const animateCallback = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.add('pre-animate');
      if (!entry.isIntersecting) return;
      entry.target.classList.add('fade-up');
      observer.unobserve(entry.target);
    });
  };

  const animateObserver = new IntersectionObserver(animateCallback, animateOptions);

  animatedItems.forEach((item) => animateObserver.observe(item));
};

export default scrollReveal;
