import gsap from 'gsap'

let tl = gsap.timeline()

export const openMenu = () => {
  tl.to('navigation', 0, {
    css: { display: 'block' },
  })
    .to('body', 0, { css: { overflow: 'auto' } })
    .to('.main', 1, {
      ease: 'expo.inOut',
    })
    .to('.header__button .line-one', 0.25, {
      delay: -1,
      top: '50%',
      transform: 'rotate(45deg)',
      ease: 'expo.inOut',
    })
    .to('.header__button .line-two', 0.25, {
      delay: -1,
      top: '50%',
      transform: 'rotate(-45deg)',
      ease: 'expo.inOut',
    })
    .to('.header__button .line-three', 0.25, {
      delay: -1,
      opacity: 0,
      top: '50%',
      ease: 'expo.inOut',
    })
}

export const closeMenu = () => {
  tl.to('.main', 1, {
    y: 0,
    ease: 'expo.inOut',
  })

    .to('.header__button .line-one', 0.25, {
      delay: -1,
      top: '20%',
      transform: 'rotate(0deg)',
      ease: 'expo.inOut',
    })
    .to('.header__button .line-two', 0.25, {
      delay: -1,
      top: '50%',
      transform: 'rotate(0deg)',
      ease: 'expo.inOut',
    })
    .to('.header__button .line-three', 0.25, {
      delay: -1,
      opacity: 1,
      top: '80%',
      transform: 'rotate(0deg)',
      ease: 'expo.inOut',
    })
    .to('body', 0, { css: { overflow: 'auto' } })
    .to('navigation', 0, {
      css: { display: 'none' },
    })
}
