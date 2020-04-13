import React from 'react'

export const uParams = [
  {name: 'c1r2', rotation: 90, origin: 'bot'},
  {name: 'c1r5', rotation: -22, origin: 'top'},
  {name: 'c1r6', rotation: 180, origin: 'bot'},

  {name: 'c2r2', rotation: 180, origin: 'top'},
  {name: 'c2r5', rotation: -45, origin: 'top'},
  {name: 'c2r6', rotation: -36, origin: 'bot'},
  {name: 'c2r7', rotation: -90, origin: 'top'},

  {name: 'c3r2', rotation: 180, origin: 'top'},
  {name: 'c3r5', rotation: 45, origin: 'top'},
  {name: 'c3r6', rotation: 36, origin: 'bot'},
  {name: 'c3r7', rotation: 180, origin: 'bot'},

  {name: 'c4r2', rotation: -90, origin: 'bot'},
  {name: 'c4r5', rotation: 22, origin: 'top'},
  {name: 'c4r6', rotation: 180, origin: 'bot'}
]

export default() => {
  return (
    <g>
      <path d="M200,0 l0,20"></path>
      <path d="M200,25 l0,20" className="rotateU"></path>
      <path d="M200,50 l0,20"></path>
      <path d="M200,75 l0,20"></path>
      <path d="M200,100 l0,20" className="rotateU"></path>
      <path d="M200,125 l0,20" className="rotateU"></path>
      <path d="M200,150 l0,20"></path>
      <path d="M200,175 l0,20"></path>

      <path d="M225,0 l0,20"></path>
      <path d="M225,25 l0,20" className="rotateU"></path>
      <path d="M225,50 l0,20"></path>
      <path d="M225,75 l0,20"></path>
      <path d="M225,100 l0,20" className="rotateU"></path>
      <path d="M225,125 l0,20" className="rotateU"></path>
      <path d="M225,150 l0,20" className="rotateU"></path>
      <path d="M225,175 l0,20"></path>

      <path d="M250,0 l0,20"></path>
      <path d="M250,25 l0,20" className="rotateU"></path>
      <path d="M250,50 l0,20"></path>
      <path d="M250,75 l0,20"></path>
      <path d="M250,100 l0,20" className="rotateU"></path>
      <path d="M250,125 l0,20" className="rotateU"></path>
      <path d="M250,150 l0,20" className="rotateU"></path>
      <path d="M250,175 l0,20"></path>

      <path d="M275,0 l0,20"></path>
      <path d="M275,25 l0,20" className="rotateU"></path>
      <path d="M275,50 l0,20"></path>
      <path d="M275,75 l0,20"></path>
      <path d="M275,100 l0,20" className="rotateU"></path>
      <path d="M275,125 l0,20" className="rotateU"></path>
      <path d="M275,150 l0,20"></path>
      <path d="M275,175 l0,20"></path>
    </g>
  )
}
