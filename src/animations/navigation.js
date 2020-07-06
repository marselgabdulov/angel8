import gsap from 'gsap'

let tl = gsap.timeline()

export const openMenu = width => {
  tl.to('navigation', 0, {
    css: { display: 'block' },
  })
    // .to('body', 0, { css: { overflow: 'hidden' } })
    .to('.main', 1, {
      // y: width <= 654 ? '70vh' : window.innerHeight / 3,
      ease: 'expo.inOut',
    })
    .to('.header__button .line-one', 0.3, {
      delay: -1,
      top: '40%',
      transform: 'rotate(45deg)',
      ease: 'expo.inOut',
    })
    .to('.header__button .line-two', 0.3, {
      delay: -1,
      top: '40%',
      transform: 'rotate(-45deg)',
      ease: 'expo.inOut',
    })
  // .to('.header__logo svg path', 0.6, {
  //   delay: -1,
  //   fill: 'black',
  //   ease: 'expo.inOut',
  // })
}

export const closeMenu = () => {
  tl.to('.main', 1, {
    y: 0,
    ease: 'expo.inOut',
  })

    .to('.header__button .line-one', 0.3, {
      delay: -1,
      top: '30%',
      transform: 'rotate(0deg)',
      borderBottom: '2px solid white',
      ease: 'expo.inOut',
    })
    .to('.header__button .line-two', 0.3, {
      delay: -1,
      top: '70%',
      transform: 'rotate(0deg)',
      borderBottom: '2px solid white',
      ease: 'expo.inOut',
    })
    // .to(".header__logo svg path", 0.6, {
    //   delay: -0.75,
    //   fill: "white",
    //   ease: "expo.inOut",
    // })

    .to('body', 0, { css: { overflow: 'auto' } })
    .to('navigation', 0, {
      css: { display: 'none' },
    })
}
