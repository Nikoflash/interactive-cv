import {TimelineLite} from 'gsap'
import { navigate } from 'gatsby'

export default (mouseDownId, mouseUpId) => {

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

  if (mouseDownId === mouseUpId && mouseDownId ==='profileButton') {
    profile.play()
  }

  if (mouseDownId === mouseUpId && mouseDownId === 'experienceButton') {
    experience.play()
  }

  if (mouseDownId === mouseUpId && mouseDownId === 'educationButton') {
    education.play()
  }

  if (mouseDownId === mouseUpId && mouseDownId === 'personalButton') {
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
