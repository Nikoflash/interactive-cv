import React from 'react'

export const oParams = [
  {name: 'c1r3', rotation: 45, origin: 'bot'},
  {name: 'c1r6', rotation: -45, origin: 'top'},

  {name: 'c2r2', rotation: 90, origin: 'bot'},
  {name: 'c2r3', rotation: 90, origin: 'bot'},
  {name: 'c2r6', rotation: -90, origin: 'top'},
  {name: 'c2r7', rotation: -90, origin: 'top'},

  {name: 'c3r2', rotation: -90, origin: 'bot'},
  {name: 'c3r3', rotation: -90, origin: 'bot'},
  {name: 'c3r6', rotation: 90, origin: 'top'},
  {name: 'c3r7', rotation: 90, origin: 'top'},

  {name: 'c4r3', rotation: -45, origin: 'bot'},
  {name: 'c4r6', rotation: 45, origin: 'top'}
]

export default() => {
  return (
    <g>
      <path d="M650,0 l0,20"></path>
      <path d="M650,25 l0,20"></path>
      <path d="M650,50 l0,20" className="rotateO"></path>
      <path d="M650,75 l0,20"></path>
      <path d="M650,100 l0,20"></path>
      <path d="M650,125 l0,20" className="rotateO"></path>
      <path d="M650,150 l0,20"></path>
      <path d="M650,175 l0,20"></path>

      <path d="M675,0 l0,20"></path>
      <path d="M675,25 l0,20" className="rotateO"></path>
      <path d="M675,50 l0,20" className="rotateO"></path>
      <path d="M675,75 l0,20"></path>
      <path d="M675,100 l0,20"></path>
      <path d="M675,125 l0,20" className="rotateO"></path>
      <path d="M675,150 l0,20" className="rotateO"></path>
      <path d="M675,175 l0,20"></path>

      <path d="M700,0 l0,20"></path>
      <path d="M700,25 l0,20" className="rotateO"></path>
      <path d="M700,50 l0,20" className="rotateO"></path>
      <path d="M700,75 l0,20"></path>
      <path d="M700,100 l0,20"></path>
      <path d="M700,125 l0,20" className="rotateO"></path>
      <path d="M700,150 l0,20" className="rotateO"></path>
      <path d="M700,175 l0,20"></path>

      <path d="M725,0 l0,20"></path>
      <path d="M725,25 l0,20"></path>
      <path d="M725,50 l0,20" className="rotateO"></path>
      <path d="M725,75 l0,20"></path>
      <path d="M725,100 l0,20"></path>
      <path d="M725,125 l0,20" className="rotateO"></path>
      <path d="M725,150 l0,20"></path>
      <path d="M725,175 l0,20"></path>
    </g>
  )
}
