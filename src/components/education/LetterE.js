import React from 'react'

export const eParams = [
  {name: 'c1r2', rotation: 90, origin: 'bot'},
  {name: 'c1r7', rotation: -90, origin: 'top'},

  {name: 'c2r2', rotation: 90, origin: 'bot'},
  {name: 'c2r3', rotation: 90, origin: 'top'},
  {name: 'c2r4', rotation: -90, origin: 'bot'},
  {name: 'c2r5', rotation: 90, origin: 'top'},
  {name: 'c2r6', rotation: -90, origin: 'bot'},
  {name: 'c2r7', rotation: -90, origin: 'top'},
  
  {name: 'c3r2', rotation: 180, origin: 'top'},
  {name: 'c3r3', rotation: 90, origin: 'top'},
  {name: 'c3r4', rotation: -90, origin: 'bot'},
  {name: 'c3r5', rotation: 90, origin: 'top'},
  {name: 'c3r6', rotation: -90, origin: 'bot'},
  {name: 'c3r7', rotation: 180, origin: 'bot'}
]

export default() => {
  return (
    <g>
      <path d="M50,0 l0,20"></path>
      <path d="M50,25 l0,20" className="rotateE"></path>
      <path d="M50,50 l0,20"></path>
      <path d="M50,75 l0,20"></path>
      <path d="M50,100 l0,20"></path>
      <path d="M50,125 l0,20"></path>
      <path d="M50,150 l0,20" className="rotateE"></path>
      <path d="M50,175 l0,20"></path>

      <path d="M75,0 l0,20"></path>
      <path d="M75,25 l0,20" className="rotateE"></path>
      <path d="M75,50 l0,20" className="rotateE"></path>
      <path d="M75,75 l0,20" className="rotateE"></path>
      <path d="M75,100 l0,20" className="rotateE"></path>
      <path d="M75,125 l0,20" className="rotateE"></path>
      <path d="M75,150 l0,20" className="rotateE"></path>
      <path d="M75,175 l0,20"></path>

      <path d="M100,0 l0,20"></path>
      <path d="M100,25 l0,20" id="rotateTest" className="rotateE"></path>
      <path d="M100,50 l0,20" className="rotateE"></path>
      <path d="M100,75 l0,20" className="rotateE"></path>
      <path d="M100,100 l0,20" className="rotateE"></path>
      <path d="M100,125 l0,20" className="rotateE"></path>
      <path d="M100,150 l0,20" className="rotateE"></path>
      <path d="M100,175 l0,20"></path>
    </g>
  )
}
