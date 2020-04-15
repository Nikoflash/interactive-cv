import {TweenLite, Power2} from "gsap/TweenMax"

export function rotationAnimation(elementName, rotationParams, delay, pageY, scrollLength) {
    let paths = ''
    if (typeof document !== `undefined`) {
      paths = document.getElementsByClassName(elementName)
    }
    for (let i = 0; i < paths.length; i++) {
    let rotateObj = rotationParams[i]
    let degs = (rotateObj.rotation/scrollLength)*pageY
    let path = paths[i]
    let origin = ''

    switch(rotateObj.origin) {
      case 'top':
        origin = '0% 0%'
        break
      case 'bot':
        origin = '0% 100%'
        break
      case 'mid':
        origin = '0% 50%%'
        break
      default:
        console.log('Please set origin param for ' + path)    
    }

    TweenLite.to(path, 1, {
      rotation: degs, 
      transformOrigin: origin,
      ease: Power2.easeOut
    })
  }
}