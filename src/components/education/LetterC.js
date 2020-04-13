import React from 'react'

export const cParams = [
  {name: 'c1r2', rotation: 180, origin: 'top'},
  {name: 'c1r3', rotation: 45, origin: 'bot'},
  {name: 'c1r6', rotation: -45, origin: 'top'},
  {name: 'c1r7', rotation: 180, origin: 'bot'},

  {name: 'c2r2', rotation: 90, origin: 'bot'},
  {name: 'c2r3', rotation: 90, origin: 'bot'},
  {name: 'c2r6', rotation: -90, origin: 'top'},
  {name: 'c2r7', rotation: -90, origin: 'top'},

  {name: 'c3r2', rotation: 180, origin: 'top'},
  {name: 'c3r3', rotation: -45, origin: 'top'},
  {name: 'c3r4', rotation: 90, origin: 'top'},
  {name: 'c3r5', rotation: -90, origin: 'bot'},
  {name: 'c3r6', rotation: 45, origin: 'bot'},
  {name: 'c3r7', rotation: 180, origin: 'bot'},

  {name: 'c4r3', rotation: 180, origin: 'top'},
  {name: 'c4r4', rotation: 90, origin: 'top'},
  {name: 'c4r5', rotation: -90, origin: 'bot'},
  {name: 'c4r6', rotation: 180, origin: 'bot'}
]

export default() => {
  return (
    <g>
      <path d="M300,0 l0,20"></path>
      <path d="M300,25 l0,20" className="rotateC"></path>
      <path d="M300,50 l0,20" className="rotateC"></path>
      <path d="M300,75 l0,20"></path>
      <path d="M300,100 l0,20"></path>
      <path d="M300,125 l0,20" className="rotateC"></path>
      <path d="M300,150 l0,20" className="rotateC"></path>
      <path d="M300,175 l0,20"></path>

      <path d="M325,0 l0,20"></path>
      <path d="M325,25 l0,20" className="rotateC"></path>
      <path d="M325,50 l0,20" className="rotateC"></path>
      <path d="M325,75 l0,20"></path>
      <path d="M325,100 l0,20"></path>
      <path d="M325,125 l0,20" className="rotateC"></path>
      <path d="M325,150 l0,20" className="rotateC"></path>
      <path d="M325,175 l0,20"></path>

      <path d="M350,0 l0,20"></path>
      <path d="M350,25 l0,20" className="rotateC"></path>
      <path d="M350,50 l0,20" className="rotateC"></path>
      <path d="M350,75 l0,20" className="rotateC"></path>
      <path d="M350,100 l0,20" className="rotateC"></path>
      <path d="M350,125 l0,20" className="rotateC"></path>
      <path d="M350,150 l0,20" className="rotateC"></path>
      <path d="M350,175 l0,20"></path>
      
      <path d="M375,0 l0,20"></path>
      <path d="M375,25 l0,20"></path>
      <path d="M375,50 l0,20" className="rotateC"></path>
      <path d="M375,75 l0,20" className="rotateC"></path>
      <path d="M375,100 l0,20" className="rotateC"></path>
      <path d="M375,125 l0,20" className="rotateC"></path>
      <path d="M375,150 l0,20"></path>
      <path d="M375,175 l0,20"></path>
    </g>
  )
}
