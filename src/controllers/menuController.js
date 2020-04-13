import {TimelineLite} from 'gsap/TweenMax'
import { navigate } from 'gatsby'

export default (menuItem) => {

  const profile = new TimelineLite({paused: true})
  const experience = new TimelineLite({paused: true})
  const education = new TimelineLite({paused: true})
  const personal = new TimelineLite({paused: true})


  profile.to('#pf, #epre, #ec, #pn', 0.5, { 
    css: { opacity: 0 },
    onComplete: profilePage
  })
  
  experience.to('#pf, #epre, #ec, #pn', 0.5, { 
    css: { opacity: 0 },
    onComplete: experiencePage
  })

  education.to('#pf, #epre, #ec, #pn', 0.5, { 
    css: { opacity: 0 },
    onComplete: educationPage
  })

  personal.to('#pf, #epre, #ec, #pn', 0.5, { 
    css: { opacity: 0 },
    onComplete: personalPage
  })

  if (menuItem.parentElement.id === 'pf' ) {
    profile.play()
  }

  if (menuItem.parentElement.id === 'epre' ) {
    experience.play()
  }

  if (menuItem.parentElement.id === 'ec' ) {
    education.play()
  }

  if (menuItem.parentElement.id === 'pn' ) {
    personal.play()
  }
}

function profilePage() {
  navigate('/profile/')
}

function experiencePage() {
  navigate('/experience/')
}

function educationPage() {
  navigate('/education/')
}

function personalPage() {
  navigate('/personal/')
}
