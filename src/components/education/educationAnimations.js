import {gsap, Power2} from "gsap"

export function rotationAnimation(elementName, rotationParams, delay) {
    let paths = ''
    if (typeof document !== `undefined`) {
      paths = document.getElementsByClassName(elementName)
    }  
    for (let i = 0; i < paths.length; i++) {
    let rotateObj = rotationParams[i]
    let degs = rotateObj.rotation
    let path = paths[i]
    let origin = ''
    let currentRotation = 0

    if (path._gsTransform) {
      currentRotation = path._gsTransform.rotation
      if (currentRotation < 360 && currentRotation !== degs) {
        degs = (degs - currentRotation)
      }
    }

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

    gsap.to(path, 0.8, {
      rotation: `+=${degs}`, 
      transformOrigin: origin,
      ease: Power2.easeOut,
      delay: delay
    })
  }
}

export function reverseRotationAnimation(elementName, rotationParams) {
    gsap.killTweensOf(`.${elementName}`);
    let paths = ''
    if (typeof document !== `undefined`) {
      paths = document.getElementsByClassName(elementName)
    } 
    for (let i = 0; i < paths.length; i++) {
    let rotateObj = rotationParams[i]
    let path = paths[i]
    let currentRotation = gsap.getProperty(path, 'rotation')
    let origin = ''
    let degs = 0

    if (currentRotation !== 0 ) {
      degs = 360 - currentRotation
    }

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

    gsap.to(path, 0.7, {
      rotation: `+=${degs}`, 
      transformOrigin: origin,
      ease: Power2.easeOut
    })
  }
}

export function rewind(elementName, rotationParams) {
    let paths = ''
    if (typeof document !== `undefined`) {
      paths = document.getElementsByClassName(elementName)
    } 
    for (let i = 0; i < paths.length; i++) {
    let rotateObj = rotationParams[i]
    let path = paths[i]
    let currentRotation = gsap.getProperty(path, 'rotation')
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

    if (currentRotation !== 0) {
      gsap.to(path, 0.7, {
        rotation: '0_short', 
        transformOrigin: origin,
        ease: Power2.easeOut
      })
    }
  }
}

export function setRotationZero(elementName) {
    let paths = ''
    if (typeof document !== `undefined`) {
      paths = document.getElementsByClassName(elementName)
    } 
    for (let i = 0; i < paths.length; i++) {
    let path = paths[i]
    let currentRotation = gsap.getProperty(path, 'rotation')

    if (currentRotation) {
      if (isAtStartingPoint(currentRotation)) {
        gsap.set(paths[i], {rotation: 0})
      }
    }
  }
}

function isAtStartingPoint (number) {
  return number % 360 === 0;
}
