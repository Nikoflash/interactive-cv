import React, {useState, useEffect} from 'react'
import styles from './education.module.scss'
import {rotationAnimation, reverseRotationAnimation, rewind, setRotationZero} from './educationAnimations'
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

export default({handleClick}) => {

  const [isActive, setIsActive] = useState(true)
  const [rewindTimeout, setRewindTimeout] = useState()
  const [rotationTimeout, setRotationTimeout] = useState()

  useEffect(() => {
    if(!isActive) {
      setRewindTimeout(setTimeout(function(){ 
        rewind('rotateE', eParams)
        rewind('rotateD', dParams)
        rewind('rotateU', uParams)
        rewind('rotateC', cParams)
        rewind('rotateA', aParams)
        rewind('rotateT', tParams)
        rewind('rotateI', iParams)
        rewind('rotateO', oParams)
        rewind('rotateN', nParams)
      }, 2000))

      setRotationTimeout(setTimeout(function(){
        setRotationZero('rotateE')
        setRotationZero('rotateD')
        setRotationZero('rotateU')
        setRotationZero('rotateC')
        setRotationZero('rotateA')
        setRotationZero('rotateT')
        setRotationZero('rotateI')
        setRotationZero('rotateO')
        setRotationZero('rotateN')
      }, 750))
    }

    if(isActive) {
      clearTimeout(rewindTimeout)
      clearTimeout(rotationTimeout)
    }
  }, [isActive])

  const mouseEnter = () => {
    rotationAnimation('rotateE', eParams, 0)
    rotationAnimation('rotateD', dParams, 0.05)
    rotationAnimation('rotateU', uParams, 0.1)
    rotationAnimation('rotateC', cParams, 0.15)
    rotationAnimation('rotateA', aParams, 0.2)
    rotationAnimation('rotateT', tParams, 0.25)
    rotationAnimation('rotateI', iParams, 0.3)
    rotationAnimation('rotateO', oParams, 0.35)
    rotationAnimation('rotateN', nParams, 0.4)
    setIsActive(true)
  }

  const mouseLeave = () => {
    reverseRotationAnimation('rotateE', eParams)
    reverseRotationAnimation('rotateD', dParams)
    reverseRotationAnimation('rotateU', uParams)
    reverseRotationAnimation('rotateC', cParams)
    reverseRotationAnimation('rotateA', aParams)
    reverseRotationAnimation('rotateT', tParams)
    reverseRotationAnimation('rotateI', iParams)
    reverseRotationAnimation('rotateO', oParams)
    reverseRotationAnimation('rotateN', nParams)
    setIsActive(false)
  }

  return <div id="ec" className={styles.education}>
  <svg className="svg-education" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} viewBox="0 0 902 195" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
    <rect id="educationButton" className={styles.button} x="0" y="0" width="100%" height="100%" onMouseDown={handleClick} />
  </svg>
</div>
}
