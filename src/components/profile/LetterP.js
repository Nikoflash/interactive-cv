import React, {useEffect} from 'react'

export const pCoords = {
    side1: 15,
    corner1X1: 10,
    corner1Y1: 0,
    corner1X2: 10,
    corner1Y2: 10,
    side2: 52,
    corner2X1: 0,
    corner2Y1: 0,
    corner2X2: 0,
    corner2Y2: 0,
    side3: 0,
    corner3X1: 0,
    corner3Y1: 0,
    corner3X2: 0,
    corner3Y2: 0,
    side4: 58,
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
    setLetterP(pCoords)
  })
  
  return (
    <g fill="none" strokeWidth="1" transform={`translate(${transform})`}> 
      <path id="letterP" d={`M0,0 
        h${pCoords.side1} q${pCoords.corner1X1},${pCoords.corner1Y1} ${pCoords.corner1X2},${pCoords.corner1Y2} 
        v${pCoords.side2} q${pCoords.corner2X1},${pCoords.corner2Y1} ${pCoords.corner2X2},${pCoords.corner2Y2}  
        h${pCoords.side3} q${pCoords.corner3X1},${pCoords.corner3Y1} ${pCoords.corner3X2},${pCoords.corner3Y2} 
        v${pCoords.side4} q${pCoords.corner4X1},${pCoords.corner4Y1} ${pCoords.corner4X2},${pCoords.corner4Y2}
        h${pCoords.side5} q${pCoords.corner5X1},${pCoords.corner5Y1} ${pCoords.corner5X2},${pCoords.corner5Y2}
        v${pCoords.side6} q${pCoords.corner6X1},${pCoords.corner6Y1} ${pCoords.corner6X2},${pCoords.corner6Y2}`}
      />
    </g>
  )
}

export function setLetterP() {
  let letterP = document.getElementById('letterP')

  letterP.setAttribute('d', `M0,0 
  h${pCoords.side1} q${pCoords.corner1X1},${pCoords.corner1Y1} ${pCoords.corner1X2},${pCoords.corner1Y2} 
  v${pCoords.side2} q${pCoords.corner2X1},${pCoords.corner2Y1} ${pCoords.corner2X2},${pCoords.corner2Y2}  
  h${pCoords.side3} q${pCoords.corner3X1},${pCoords.corner3Y1} ${pCoords.corner3X2},${pCoords.corner3Y2} 
  v${pCoords.side4} q${pCoords.corner4X1},${pCoords.corner4Y1} ${pCoords.corner4X2},${pCoords.corner4Y2}
  h${pCoords.side5} q${pCoords.corner5X1},${pCoords.corner5Y1} ${pCoords.corner5X2},${pCoords.corner5Y2}
  v${pCoords.side6} q${pCoords.corner6X1},${pCoords.corner6Y1} ${pCoords.corner6X2},${pCoords.corner6Y2}`)
}