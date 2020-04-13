import React from 'react'

export const iParams = [
  {name: 'c3r2', rotation: 90, origin: 'bot'},
  {name: 'c3r7', rotation: -90, origin: 'top'},

  {name: 'c4r2', rotation: -90, origin: 'bot'},
  {name: 'c4r7', rotation: 90, origin: 'top'}
]

export default() => {
  return (
    <g>
      <path d="M600,0 l0,20"></path>
      <path d="M600,25 l0,20" className="rotateI"></path>
      <path d="M600,50 l0,20"></path>
      <path d="M600,75 l0,20"></path>
      <path d="M600,100 l0,20"></path>
      <path d="M600,125 l0,20"></path>
      <path d="M600,150 l0,20" className="rotateI"></path>
      <path d="M600,175 l0,20"></path>

      <path d="M625,0 l0,20"></path>
      <path d="M625,25 l0,20" className="rotateI"></path>
      <path d="M625,50 l0,20"></path>
      <path d="M625,75 l0,20"></path>
      <path d="M625,100 l0,20"></path>
      <path d="M625,125 l0,20"></path>
      <path d="M625,150 l0,20" className="rotateI"></path>
      <path d="M625,175 l0,20"></path>
    </g>
  )
}
