import React from 'react'
import styles from './education.module.scss'
import {rotationAnimation} from './educationAnimationMobile'
import LeftGutter from './LeftGutter'
import LetterE, {eParams} from './LetterE'
import LetterD, {dParams} from './LetterD'
import LetterU, {uParams} from './LetterU'
import LetterC, {cParams} from './LetterC'
import LetterA, {aParams} from './LetterA'
import LetterT, {tParams} from './LetterT'
import LetterI, {iParams} from './LetterI'
import LetterO, {oParams} from './LetterO'
import LetterN, {nParams} from './LetterN'
import RightGutter from './RightGutter'

export default({handleTouch, pageY, scrollLength}) => {

  rotationAnimation('rotateE', eParams, 0, pageY, scrollLength)
  rotationAnimation('rotateD', dParams, 0.05, pageY, scrollLength)
  rotationAnimation('rotateU', uParams, 0.1, pageY, scrollLength)
  rotationAnimation('rotateC', cParams, 0.15, pageY, scrollLength)
  rotationAnimation('rotateA', aParams, 0.2, pageY, scrollLength)
  rotationAnimation('rotateT', tParams, 0.25, pageY, scrollLength)
  rotationAnimation('rotateI', iParams, 0.3, pageY, scrollLength)
  rotationAnimation('rotateO', oParams, 0.35, pageY, scrollLength)
  rotationAnimation('rotateN', nParams, 0.4, pageY, scrollLength)
  
  return <div id="ec" className={styles.education}>
  <svg onTouchEnd={handleTouch} className={styles.svgMobile} viewBox="0 0 902 195" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(1,0)">
      <LeftGutter />
      <LetterE />
      <LetterD />
      <LetterU />
      <LetterC />
      <LetterA />
      <LetterT />
      <LetterI />
      <LetterO />
      <LetterN />
      <RightGutter />
    </g>
  </svg>
</div>
}
