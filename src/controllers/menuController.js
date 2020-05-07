import {gsap} from 'gsap'
import { navigate } from 'gatsby'

export default (mouseDownId, mouseUpId) => {

  const profile = gsap.timeline({paused: true})
  const experience = gsap.timeline({paused: true})
  const education = gsap.timeline({paused: true})
  const personal = gsap.timeline({paused: true})

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
