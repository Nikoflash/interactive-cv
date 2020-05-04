import React from 'react'
import styles from './education.module.scss'
import {rotationAnimation, reverseRotationAnimation} from './educationAnimations'
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

export const onEnterEducation = () => {
  rotationAnimation('rotateE', eParams, 0)
  rotationAnimation('rotateD', dParams, 0.05)
  rotationAnimation('rotateU', uParams, 0.1)
  rotationAnimation('rotateC', cParams, 0.15)
  rotationAnimation('rotateA', aParams, 0.2)
  rotationAnimation('rotateT', tParams, 0.25)
  rotationAnimation('rotateI', iParams, 0.3)
  rotationAnimation('rotateO', oParams, 0.35)
  rotationAnimation('rotateN', nParams, 0.4)
}

export const onLeaveEducation = () => {
  reverseRotationAnimation('rotateE', eParams)
  reverseRotationAnimation('rotateD', dParams)
  reverseRotationAnimation('rotateU', uParams)
  reverseRotationAnimation('rotateC', cParams)
  reverseRotationAnimation('rotateA', aParams)
  reverseRotationAnimation('rotateT', tParams)
  reverseRotationAnimation('rotateI', iParams)
  reverseRotationAnimation('rotateO', oParams)
  reverseRotationAnimation('rotateN', nParams)
}

export default() => {

  return <div id="education" className={`svg-element ${styles.education}`}>
  <svg className="svg-education" viewBox="0 0 902 195" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
