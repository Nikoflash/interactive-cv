import React, {useState} from 'react'
import Slider from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css'
import styles from './slider.module.scss'

export default ({setPageY, step}) => {

  if (step === undefined) {
    step = 60
  }

  const [value, setValue] = useState(0)
  const min = 0
  const max = 600

  // const onMinChange = (e) => {
  //   setMin(+e.target.value || 0)
  // }
  
  // const onMaxChange = (e) => {
  //   setMax(+e.target.value || 100)
  // }
  // const onStepChange = (e) => {
  //   setStep(+e.target.value || 1)
  // }

  const handleSliderChange = (val) => {
    setValue(val)
    setPageY(val)
  }

  return (
    <div className={styles.slider}>
      <Slider 
        value={value}
        onChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
        handleStyle={{
          borderColor: 'black',
          height: 21,
          width: 21,
          marginLeft: -10,
          marginTop: -10,
          backgroundColor: 'white',
        }}
        trackStyle={{
          backgroundColor: 'grey'
        }}
      />
    </div>
  )
}
