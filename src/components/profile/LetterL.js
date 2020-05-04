import React, {useEffect} from 'react'

export const lCoords = {
  side1: 15,
  corner1X1: 10,
  corner1Y1: 0,
  corner1X2: 10,
  corner1Y2: 10,
  side2: 78,
  corner2X1: 0,
  corner2Y1: 10,
  corner2X2: 0,
  corner2Y2: 15,
  side3: 0,
  corner3X1: 0,
  corner3Y1: 10,
  corner3X2: 0,
  corner3Y2: 10,
  side4: 7,
  corner4X1: 0,
  corner4Y1: 10,
  corner4X2: -10,
  corner4Y2: 10,
  side5: -15,
  corner5X1: -10,
  corner5Y1: 0,
  corner5X2: -10,
  corner5Y2: -10,
  side6: -110,
  corner6X1: 0,
  corner6Y1: -10,
  corner6X2: 10,
  corner6Y2: -10
}

export default ({transform}) => {  
  
  useEffect(() => {
    setLetterL(lCoords)
  })
  
  return (
    <g fill="none" strokeWidth="1" transform={`translate(${transform})`}> 
      <path id="letterL"
        d={`M0,0 
        h${lCoords.side1} q${lCoords.corner1X1},${lCoords.corner1Y1} ${lCoords.corner1X2},${lCoords.corner1Y2} 
        v${lCoords.side2} q${lCoords.corner2X1},${lCoords.corner2Y1} ${lCoords.corner2X2},${lCoords.corner2Y2}  
        h${lCoords.side3} q${lCoords.corner3X1},${lCoords.corner3Y1} ${lCoords.corner3X2},${lCoords.corner3Y2} 
        v${lCoords.side4} q${lCoords.corner4X1},${lCoords.corner4Y1} ${lCoords.corner4X2},${lCoords.corner4Y2}
        h${lCoords.side5} q${lCoords.corner5X1},${lCoords.corner5Y1} ${lCoords.corner5X2},${lCoords.corner5Y2}
        v${lCoords.side6} q${lCoords.corner6X1},${lCoords.corner6Y1} ${lCoords.corner6X2},${lCoords.corner6Y2}`}
      />
    </g>
  )
}

export function setLetterL() {
  let letterL = document.getElementById('letterL')

  letterL.setAttribute('d', `M0,0 
  h${lCoords.side1} q${lCoords.corner1X1},${lCoords.corner1Y1} ${lCoords.corner1X2},${lCoords.corner1Y2} 
  v${lCoords.side2} q${lCoords.corner2X1},${lCoords.corner2Y1} ${lCoords.corner2X2},${lCoords.corner2Y2}  
  h${lCoords.side3} q${lCoords.corner3X1},${lCoords.corner3Y1} ${lCoords.corner3X2},${lCoords.corner3Y2} 
  v${lCoords.side4} q${lCoords.corner4X1},${lCoords.corner4Y1} ${lCoords.corner4X2},${lCoords.corner4Y2}
  h${lCoords.side5} q${lCoords.corner5X1},${lCoords.corner5Y1} ${lCoords.corner5X2},${lCoords.corner5Y2}
  v${lCoords.side6} q${lCoords.corner6X1},${lCoords.corner6Y1} ${lCoords.corner6X2},${lCoords.corner6Y2}`)
}