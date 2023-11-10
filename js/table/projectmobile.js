function createObserver(selector, animationClass, direction) {
    const element = document.querySelector(selector)
  
      const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
      }
  
      const callback = (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  if (direction === 'right') {
                      element.classList.add(animationClass + 'Right')
                  } else if (direction === 'left') {
                      element.classList.add(animationClass + 'Left')
                  } else if (direction === 'bottom') {
                      element.classList.add(animationClass + 'Bottom')
                  } else if (direction === 'top') {
                      element.classList.add(animationClass + 'Top')
                  }
              }
          })
      }
  
      const observer = new IntersectionObserver(callback, options)
  
      observer.observe(element)
  } 
  
  
  createObserver('.projectsFragment11', 'animation', 'left')
  createObserver('.projectsFragment22', 'animation', 'left')
  createObserver('.projectsFragment33', 'animation', 'left')
  createObserver('.projectsFragment44', 'animation', 'left')
  createObserver('.servicesFragmentAnimation1', 'animation', 'left')
  createObserver('.servicesFragmentAnimation2', 'animation', 'left')
  createObserver('.servicesFragmentAnimation3', 'animation', 'left')
  createObserver('.servicesFragmentAnimationMobaile1', 'animation', 'left')
  createObserver('.servicesFragmentAnimationMobaile2', 'animation', 'left')
  createObserver('.servicesFragmentAnimationMobaile3', 'animation', 'left')