import React from 'react'

export const dParams = [
  {name: 'c1r2', rotation: 90, origin: 'bot'},
  {name: 'c1r7', rotation: -90, origin: 'top'},

  {name: 'c2r2', rotation: 180, origin: 'top'},
  {name: 'c2r3', rotation: -45, origin: 'top'},
  {name: 'c2r6', rotation: 45, origin: 'bot'},
  {name: 'c2r7', rotation: 180, origin: 'bot'},

  {name: 'c3r2', rotation: 180, origin: 'top'},
  {name: 'c3r3', rotation: 180, origin: 'bot'},
  {name: 'c3r6', rotation: 180, origin: 'top'},
  {name: 'c3r7', rotation: 180, origin: 'bot'}
]

export default() => {
  return (
    <g>
      <path d="M125,0 l0,20"></path>
      <path d="M125,25 l0,20" className="rotateD"></path>
      <path d="M125,50 l0,20"></path>
      <path d="M125,75 l0,20"></path>
      <path d="M125,100 l0,20"></path>
      <path d="M125,125 l0,20"></path>
      <path d="M125,150 l0,20" className="rotateD"></path>
      <path d="M125,175 l0,20"></path>

      <path d="M150,0 l0,20"></path>
      <path d="M150,25 l0,20" className="rotateD"></path>
      <path d="M150,50 l0,20" className="rotateD"></path>
      <path d="M150,75 l0,20"></path>
      <path d="M150,100 l0,20"></path>
      <path d="M150,125 l0,20" className="rotateD"></path>
      <path d="M150,150 l0,20" className="rotateD"></path>
      <path d="M150,175 l0,20"></path>

      <path d="M175,0 l0,20"></path>
      <path d="M175,25 l0,20" className="rotateD"></path>
      <path d="M175,50 l0,20" className="rotateD"></path>
      <path d="M175,75 l0,20"></path>
      <path d="M175,100 l0,20"></path>
      <path d="M175,125 l0,20" className="rotateD"></path>
      <path d="M175,150 l0,20" className="rotateD"></path>
      <path d="M175,175 l0,20"></path>
    </g>
  )
}
