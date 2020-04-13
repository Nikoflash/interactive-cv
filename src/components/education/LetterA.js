import React from 'react'

export const aParams = [
  {name: 'c1r3', rotation: 180, origin: 'top'},
  {name: 'c1r4', rotation: 24, origin: 'bot'},
  {name: 'c1r7', rotation: -90, origin: 'top'},

  {name: 'c2r2', rotation: 180, origin: 'top'},
  {name: 'c2r3', rotation: 32, origin: 'top'},
  {name: 'c2r4', rotation: 90, origin: 'mid'},
  {name: 'c2r7', rotation: 180, origin: 'bot'},

  {name: 'c3r2', rotation: -90, origin: 'bot'},
  {name: 'c3r3', rotation: -32, origin: 'top'},
  {name: 'c3r4', rotation: 90, origin: 'mid'},
  {name: 'c3r7', rotation: 180, origin: 'bot'},

  {name: 'c4r3', rotation: 180, origin: 'top'},
  {name: 'c4r4', rotation: -24, origin: 'bot'},
  {name: 'c4r7', rotation: 90, origin: 'top'}
]

export default() => {
  return (
    <g>
      <path d="M400,0 l0,20"></path>
      <path d="M400,25 l0,20"></path>
      <path d="M400,50 l0,20" className="rotateA"></path>
      <path d="M400,75 l0,20" className="rotateA"></path>
      <path d="M400,100 l0,20"></path>
      <path d="M400,125 l0,20"></path>
      <path d="M400,150 l0,20" className="rotateA"></path>
      <path d="M400,175 l0,20"></path>

      <path d="M425,0 l0,20"></path>
      <path d="M425,25 l0,20" className="rotateA"></path>
      <path d="M425,50 l0,20" className="rotateA"></path>
      <path d="M425,75 l0,20" className="rotateA"></path>
      <path d="M425,100 l0,20"></path>
      <path d="M425,125 l0,20"></path>
      <path d="M425,150 l0,20" className="rotateA"></path>
      <path d="M425,175 l0,20"></path>

      <path d="M450,0 l0,20"></path>
      <path d="M450,25 l0,20" className="rotateA"></path>
      <path d="M450,50 l0,20" className="rotateA"></path>
      <path d="M450,75 l0,20" className="rotateA"></path>
      <path d="M450,100 l0,20"></path>
      <path d="M450,125 l0,20"></path>
      <path d="M450,150 l0,20" className="rotateA"></path>
      <path d="M450,175 l0,20"></path>

      <path d="M475,0 l0,20"></path>
      <path d="M475,25 l0,20"></path>
      <path d="M475,50 l0,20" className="rotateA"></path>
      <path d="M475,75 l0,20" className="rotateA"></path>
      <path d="M475,100 l0,20"></path>
      <path d="M475,125 l0,20"></path>
      <path d="M475,150 l0,20" className="rotateA"></path>
      <path d="M475,175 l0,20"></path>
    </g>
  )
}
