import React, {useState, useEffect, useContext} from 'react'
import {TweenMax, Power2} from "gsap/TweenMax";
import styles from './profile.module.scss'
import LetterP, {pCoords, setLetterP} from './LetterP'
import LetterR, {rCoords, setLetterR} from './LetterR'
import LetterO, {oCoords, setLetterO} from './LetterO'
import LetterF, {fCoords, setLetterF} from './LetterF'
import LetterI from './LetterI'
import LetterL, {lCoords, setLetterL} from './LetterL'
import LetterE, {eCoords, setLetterE} from './LetterE'
import themes from '../layout/themes.module.scss'
import {GlobalStateContext} from '../../context/globalContextProvider'

export default ({handleClick}) => { 
  const theme = useContext(GlobalStateContext).theme
  const [disableLeave, setDisableLeave] = useState(false)

  useEffect(() => {
    letterPSet()
    letterRSet()
    letterOSet()
    letterFSet()
    letterLSet()
    letterESet()
  }, [])
  
  const mouseEnter = () => {
    letterPGrow()
    letterRGrow()
    letterOGrow()
    letterFGrow()
    letterLGrow()
    letterEGrow()
  }

  const mouseLeave = () => {
    if (!disableLeave) {
      letterPShrink()
      letterRShrink()
      letterOShrink()
      letterFShrink()
      letterLShrink()
      letterEShrink()
    }
  }

  const onClick = (e) => {
    setDisableLeave(true)
    handleClick(e)
  }


  return <div id="pf" className={`${styles.profileContainer} ${theme ? themes.themeLightProfile : themes.themeDarkProfile}`}>
    <svg className="svg-profile" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} viewBox="0 0 533 132" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <LetterP transform="11,1" />
      <LetterR transform="103,1" />
      <LetterO transform="185,1" />
      <LetterF transform="267,1" />
      <LetterI transform="355,1" />
      <LetterL transform="403,1" />
      <LetterE transform="486,1" />
      <rect id="profileButton" className={styles.button} x="0" y="0" width="100%" height="100%" onClick={onClick} />
    </svg>
  </div>
}

function letterPGrow() {
  new TweenMax.to(pCoords, 0.7, {
    side1: 59, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 42, corner2X1: 0, corner2Y1: 10, corner2X2: -10, corner2Y2: 10, side3: -24, corner3X1: -10, corner3Y1: 0, corner3X2: -10, corner3Y2: 10, side4: 48, corner4X1: 0, corner4Y1: 10, corner4X2: -10, corner4Y2: 10, side5: -15, corner5X1: -10, corner5Y1: 0, corner5X2: -10, corner5Y2: -10, side6: -110, corner6X1: 0, corner6Y1: -10, corner6X2: 10, corner6Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterP
  })
}

function letterPShrink() {
  new TweenMax.to(pCoords, 0.7, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 52, corner2X1: 0, corner2Y1: 0, corner2X2: 0, corner2Y2: 0, side3: 0, corner3X1: 0, corner3Y1: 0, corner3X2: 0, corner3Y2: 0, side4: 58, corner4X1: 0, corner4Y1: 10, corner4X2: -10, corner4Y2: 10, side5: -15, corner5X1: -10, corner5Y1: 0, corner5X2: -10, corner5Y2: -10, side6: -110, corner6X1: 0, corner6Y1: -10, corner6X2: 10, corner6Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterP
  })
}

function letterRGrow() {
  new TweenMax.to(rCoords, 0.7, {
    side1: 49, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 42, corner2X1: 0, corner2Y1: 10, corner2X2: -10, corner2Y2: 10, side3: -10, corner3X1: -10, corner3Y1: 0, corner3X2: -6, corner3Y2: 10, side4X: 20, side4Y: 50, corner4X1: 3, corner4Y1: 8, corner4X2: -8, corner4Y2: 8, corner5X1: -8, corner5Y1: 0, corner5X2: -11, corner5Y2: -8, side5X: -10, side5Y: -24, corner6X1: -2, corner6Y1: -5, corner6X2: -5, corner6Y2: -5, corner7X1: -5, corner7Y1: 0, corner7X2: -5, corner7Y2: 5, side6: 22, corner8X1: 0, corner8Y1: 10, corner8X2: -10, corner8Y2: 10, side7: -4, corner9X1: -10, corner9Y1: 0, corner9X2: -10, corner9Y2: -10, side8: -110, corner10X1: 0, corner10Y1: -10, corner10X2: 10, corner10Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterR
  })
}

function letterRShrink() {
  new TweenMax.to(rCoords, 0.7, {
    side1: 4, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 52, corner2X1: 0, corner2Y1: 0, corner2X2: 0, corner2Y2: 0, side3: 0, corner3X1: 0, corner3Y1: 0, corner3X2: 0, corner3Y2: 0, side4X: 0, side4Y: 36, corner4X1: 0, corner4Y1: 0, corner4X2: 0, corner4Y2: 0, corner5X1: 0, corner5Y1: 0, corner5X2: 0, corner5Y2: 0, side5X: 0, side5Y: 0, corner6X1: 0, corner6Y1: 0, corner6X2: 0, corner6Y2: 0, corner7X1: 0, corner7Y1: 0, corner7X2: 0, corner7Y2: 0, side6: 22, corner8X1: 0, corner8Y1: 10, corner8X2: -10, corner8Y2: 10, side7: -4, corner9X1: -10, corner9Y1: 0, corner9X2: -10, corner9Y2: -10, side8: -110, corner10X1: 0, corner10Y1: -10, corner10X2: 10, corner10Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterR
  })
}

function letterOGrow() {
  new TweenMax.to(oCoords, 0.7, {
    side1: 49, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 110, corner2X1: 0, corner2Y1: 10, corner2X2: -10, corner2Y2: 10, side3: -49, corner3X1: -10, corner3Y1: 0, corner3X2: -10, corner3Y2: -10, side4: -110, corner4X1: 0, corner4Y1: -10, corner4X2: 10, corner4Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterO
  })
}

function letterOShrink() {
  new TweenMax.to(oCoords, 0.7, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 110, corner2X1: 0, corner2Y1: 10, corner2X2: -10, corner2Y2: 10, side3: -15, corner3X1: -10, corner3Y1: 0, corner3X2: -10, corner3Y2: -10, side4: -110, corner4X1: 0, corner4Y1: -10, corner4X2: 10, corner4Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterO
  })
}

function letterFGrow() {
  new TweenMax.to(fCoords, 0.7, {
    side1: 55, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 18, corner2X1: 0, corner2Y1: 10, corner2X2: -10, corner2Y2: 10, corner3X1: -10, corner3Y1: 0, corner3X2: -10, corner3Y2: 10, side3: 4, corner4X1: 0, corner4Y1: 10, corner4X2: -10, corner4Y2: 10, corner5X1: -10, corner5Y1: 0, corner5X2: -10, corner5Y2: 10, side4: 48, corner6X1: 0, corner6Y1: 10, corner6X2: -10, corner6Y2: 10, side5: -15, corner7X1: -10, corner7Y1: 0, corner7X2: -10, corner7Y2: -10, side6: -110, corner8X1: 0, corner8Y1: -10, corner8X2: 10, corner8Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterF
  })
}

function letterFShrink() {
  new TweenMax.to(fCoords, 0.7, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 28, corner2X1: 0, corner2Y1: 0, corner2X2: 0, corner2Y2: 0, corner3X1: 0, corner3Y1: 0, corner3X2: 0, corner3Y2: 0, side3: 24, corner4X1: 0, corner4Y1: 0, corner4X2: 0, corner4Y2: 0, corner5X1: 0, corner5Y1: 0, corner5X2: 0, corner5Y2: 0, side4: 58, corner6X1: 0, corner6Y1: 10, corner6X2: -10, corner6Y2: 10, side5: -15, corner7X1: -10, corner7Y1: 0, corner7X2: -10, corner7Y2: -10, side6: -110, corner8X1: 0, corner8Y1: -10, corner8X2: 10, corner8Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterF
  })
}

function letterLGrow() {
  new TweenMax.to(lCoords, 0.7, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 78, corner2X1: 0, corner2Y1: 10, corner2X2: 10, corner2Y2: 10, side3: 15, corner3X1: 10, corner3Y1: 0, corner3X2: 10, corner3Y2: 10, side4: 12, corner4X1: 0, corner4Y1: 10, corner4X2: -10, corner4Y2: 10, side5: -50, corner5X1: -10, corner5Y1: 0, corner5X2: -10, corner5Y2: -10, side6: -110, corner6X1: 0, corner6Y1: -10, corner6X2: 10, corner6Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterL
  })
}

function letterLShrink() {
  new TweenMax.to(lCoords, 0.7, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 78, corner2X1: 0, corner2Y1: 10, corner2X2: 0, corner2Y2: 15, side3: 0, corner3X1: 0, corner3Y1: 10, corner3X2: 0, corner3Y2: 10, side4: 7, corner4X1: 0, corner4Y1: 10, corner4X2: -10, corner4Y2: 10, side5: -15, corner5X1: -10, corner5Y1: 0, corner5X2: -10, corner5Y2: -10, side6: -110, corner6X1: 0, corner6Y1: -10, corner6X2: 10, corner6Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterL
  })
}

function letterEGrow() {
  new TweenMax.to(eCoords, 0.7, {
    side1: 36, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 7, corner2X1: 0, corner2Y1: 10, corner2X2: -10, corner2Y2: 10, side3: -4, corner3X1: -5, corner3Y1: 0, corner3X2: -5, corner3Y2: 5, side4: 1, corner4X1: 0, corner4Y1: 5, corner4X2: 5, corner4Y2: 5, corner5X1: 5, corner5Y1: 0, corner5X2: 5, corner5Y2: 5, side5: 44, corner6X1: 0, corner6Y1: 5, corner6X2: -5, corner6Y2: 5, corner7X1: -5, corner7Y1: 0, corner7X2: -5, corner7Y2: 5, side6: 1, corner8X1: 0, corner8Y1: 5, corner8X2: 5, corner8Y2: 5, side7: 4, corner9X1: 10, corner9Y1: 0, corner9X2: 10, corner9Y2: 10, side8: 7, corner10X1: 0, corner10Y1: 10, corner10X2: -10, corner10Y2: 10, side9: -36, corner11X1: -10, corner11Y1: 0, corner11X2: -10, corner11Y2: -10, side10: -110, corner12X1: 0, corner12Y1: -10, corner12X2: 10, corner12Y2: -10,
    ease: Power2.easeOut,
    onUpdate: setLetterE
  })
}

function letterEShrink() {
  new TweenMax.to(eCoords, 0.7, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 15, corner2X1: 0, corner2Y1: 0, corner2X2: 0, corner2Y2: 8, side3: 0, corner3X1: 0, corner3Y1: 0, corner3X2: 0, corner3Y2: 3, side4: 0, corner4X1: 0, corner4Y1: 0, corner4X2: 0, corner4Y2: 3, corner5X1: 0, corner5Y1: 0, corner5X2: 0, corner5Y2: 3, side5: 46, corner6X1: 0, corner6Y1: 0, corner6X2: 0, corner6Y2: 3, corner7X1: 0, corner7Y1: 0, corner7X2: 0, corner7Y2: 3, side6: 0, corner8X1: 0, corner8Y1: 0, corner8X2: 0, corner8Y2: 3, side7: 0, corner9X1: 0, corner9Y1: 0, corner9X2: 0, corner9Y2: 8, side8: 15, corner10X1: 0, corner10Y1: 10, corner10X2: -10, corner10Y2: 10, side9: -15, corner11X1: -10, corner11Y1: 0, corner11X2: -10, corner11Y2: -10, side10: -110, corner12X1: 0, corner12Y1: -10, corner12X2: 10, corner12Y2: -10,
    ease: Power2.easeOut, 
    onUpdate: setLetterE
  })
}


function letterPSet() {
  new TweenMax.set(pCoords, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 52, corner2X1: 0, corner2Y1: 0, corner2X2: 0, corner2Y2: 0, side3: 0, corner3X1: 0, corner3Y1: 0, corner3X2: 0, corner3Y2: 0, side4: 58, corner4X1: 0, corner4Y1: 10, corner4X2: -10, corner4Y2: 10, side5: -15, corner5X1: -10, corner5Y1: 0, corner5X2: -10, corner5Y2: -10, side6: -110, corner6X1: 0, corner6Y1: -10, corner6X2: 10, corner6Y2: -10
  })
}

function letterRSet() {
  new TweenMax.set(rCoords, {
    side1: 4, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 52, corner2X1: 0, corner2Y1: 0, corner2X2: 0, corner2Y2: 0, side3: 0, corner3X1: 0, corner3Y1: 0, corner3X2: 0, corner3Y2: 0, side4X: 0, side4Y: 36, corner4X1: 0, corner4Y1: 0, corner4X2: 0, corner4Y2: 0, corner5X1: 0, corner5Y1: 0, corner5X2: 0, corner5Y2: 0, side5X: 0, side5Y: 0, corner6X1: 0, corner6Y1: 0, corner6X2: 0, corner6Y2: 0, corner7X1: 0, corner7Y1: 0, corner7X2: 0, corner7Y2: 0, side6: 22, corner8X1: 0, corner8Y1: 10, corner8X2: -10, corner8Y2: 10, side7: -4, corner9X1: -10, corner9Y1: 0, corner9X2: -10, corner9Y2: -10, side8: -110, corner10X1: 0, corner10Y1: -10, corner10X2: 10, corner10Y2: -10
  })
}

function letterOSet() {
  new TweenMax.set(oCoords, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 110, corner2X1: 0, corner2Y1: 10, corner2X2: -10, corner2Y2: 10, side3: -15, corner3X1: -10, corner3Y1: 0, corner3X2: -10, corner3Y2: -10, side4: -110, corner4X1: 0, corner4Y1: -10, corner4X2: 10, corner4Y2: -10
  })
}

function letterFSet() {
  new TweenMax.set(fCoords, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 28, corner2X1: 0, corner2Y1: 0, corner2X2: 0, corner2Y2: 0, corner3X1: 0, corner3Y1: 0, corner3X2: 0, corner3Y2: 0, side3: 24, corner4X1: 0, corner4Y1: 0, corner4X2: 0, corner4Y2: 0, corner5X1: 0, corner5Y1: 0, corner5X2: 0, corner5Y2: 0, side4: 58, corner6X1: 0, corner6Y1: 10, corner6X2: -10, corner6Y2: 10, side5: -15, corner7X1: -10, corner7Y1: 0, corner7X2: -10, corner7Y2: -10, side6: -110, corner8X1: 0, corner8Y1: -10, corner8X2: 10, corner8Y2: -10
  })
}

function letterLSet() {
  new TweenMax.set(lCoords, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 78, corner2X1: 0, corner2Y1: 10, corner2X2: 0, corner2Y2: 15, side3: 0, corner3X1: 0, corner3Y1: 10, corner3X2: 0, corner3Y2: 10, side4: 7, corner4X1: 0, corner4Y1: 10, corner4X2: -10, corner4Y2: 10, side5: -15, corner5X1: -10, corner5Y1: 0, corner5X2: -10, corner5Y2: -10, side6: -110, corner6X1: 0, corner6Y1: -10, corner6X2: 10, corner6Y2: -10
  })
}

function letterESet() {
  new TweenMax.set(eCoords, {
    side1: 15, corner1X1: 10, corner1Y1: 0, corner1X2: 10, corner1Y2: 10, side2: 15, corner2X1: 0, corner2Y1: 0, corner2X2: 0, corner2Y2: 8, side3: 0, corner3X1: 0, corner3Y1: 0, corner3X2: 0, corner3Y2: 3, side4: 0, corner4X1: 0, corner4Y1: 0, corner4X2: 0, corner4Y2: 3, corner5X1: 0, corner5Y1: 0, corner5X2: 0, corner5Y2: 3, side5: 46, corner6X1: 0, corner6Y1: 0, corner6X2: 0, corner6Y2: 3, corner7X1: 0, corner7Y1: 0, corner7X2: 0, corner7Y2: 3, side6: 0, corner8X1: 0, corner8Y1: 0, corner8X2: 0, corner8Y2: 3, side7: 0, corner9X1: 0, corner9Y1: 0, corner9X2: 0, corner9Y2: 8, side8: 15, corner10X1: 0, corner10Y1: 10, corner10X2: -10, corner10Y2: 10, side9: -15, corner11X1: -10, corner11Y1: 0, corner11X2: -10, corner11Y2: -10, side10: -110, corner12X1: 0, corner12Y1: -10, corner12X2: 10, corner12Y2: -10
  })
}

