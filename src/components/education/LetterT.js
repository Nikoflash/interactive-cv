import React from 'react'

export const tParams = [
  {name: 'c1r2', rotation: 90, origin: 'bot'},
  {name: 'c1r4', rotation: 180, origin: 'bot'},

  {name: 'c2r2', rotation: 90, origin: 'bot'},
  {name: 'c2r3', rotation: -90, origin: 'bot'},
  {name: 'c2r7', rotation: -90, origin: 'top'},

  {name: 'c3r2', rotation: 90, origin: 'bot'},
  {name: 'c3r3', rotation: 90, origin: 'bot'},
  {name: 'c3r7', rotation: 90, origin: 'top'},

  {name: 'c4r2', rotation: 180, origin: 'top'},
  {name: 'c4r4', rotation: 180, origin: 'bot'}
]

export default() => {
  return (
    <g>
      <path d="M500,0 l0,20"></path>
      <path d="M500,25 l0,20" className="rotateT"></path>
      <path d="M500,50 l0,20"></path>
      <path d="M500,75 l0,20" className="rotateT"></path>
      <path d="M500,100 l0,20"></path>
      <path d="M500,125 l0,20"></path>
      <path d="M500,150 l0,20"></path>
      <path d="M500,175 l0,20"></path>

      <path d="M525,0 l0,20"></path>
      <path d="M525,25 l0,20" className="rotateT"></path>
      <path d="M525,50 l0,20" className="rotateT"></path>
      <path d="M525,75 l0,20"></path>
      <path d="M525,100 l0,20"></path>
      <path d="M525,125 l0,20"></path>
      <path d="M525,150 l0,20" className="rotateT"></path>
      <path d="M525,175 l0,20"></path>

      <path d="M550,0 l0,20"></path>
      <path d="M550,25 l0,20" className="rotateT"></path>
      <path d="M550,50 l0,20" className="rotateT"></path>
      <path d="M550,75 l0,20"></path>
      <path d="M550,100 l0,20"></path>
      <path d="M550,125 l0,20"></path>
      <path d="M550,150 l0,20" className="rotateT"></path>
      <path d="M550,175 l0,20"></path>

      <path d="M575,0 l0,20"></path>
      <path d="M575,25 l0,20" className="rotateT"></path>
      <path d="M575,50 l0,20"></path>
      <path d="M575,75 l0,20" className="rotateT"></path>
      <path d="M575,100 l0,20"></path>
      <path d="M575,125 l0,20"></path>
      <path d="M575,150 l0,20"></path>
      <path d="M575,175 l0,20"></path>
    </g>
  )
}
