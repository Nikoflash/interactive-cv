import React, {useEffect} from 'react'

export const fCoords = {
    side1: 15,
    corner1X1: 10,
    corner1Y1: 0,
    corner1X2: 10,
    corner1Y2: 10,
    side2: 28,
    corner2X1: 0,
    corner2Y1: 0,
    corner2X2: 0,
    corner2Y2: 0,
    corner3X1: 0,
    corner3Y1: 0,
    corner3X2: 0,
    corner3Y2: 0,
    side3: 24,
    corner4X1: 0,
    corner4Y1: 0,
    corner4X2: 0,
    corner4Y2: 0,
    corner5X1: 0,
    corner5Y1: 0,
    corner5X2: 0,
    corner5Y2: 0,
    side4: 58,
    corner6X1: 0,
    corner6Y1: 10,
    corner6X2: -10,
    corner6Y2: 10,
    side5: -15,
    corner7X1: -10,
    corner7Y1: 0,
    corner7X2: -10,
    corner7Y2: -10,
    side6: -110,
    corner8X1: 0,
    corner8Y1: -10,
    corner8X2: 10,
    corner8Y2: -10
}

export default ({transform}) => {  
  
  useEffect(() => {
    setLetterF(fCoords)
  })
  
  return (
    <g fill="none" stroke="#000000" strokeWidth="1" transform={`translate(${transform})`}> 
      <path id="letterF"
        d={`M0,0 
        h${fCoords.side1} q${fCoords.corner1X1},${fCoords.corner1Y1} ${fCoords.corner1X2},${fCoords.corner1Y2} 
        v${fCoords.side2} q${fCoords.corner2X1},${fCoords.corner2Y1} ${fCoords.corner2X2},${fCoords.corner2Y2} q${fCoords.corner3X1},${fCoords.corner3Y1} ${fCoords.corner3X2},${fCoords.corner3Y2} 
        v${fCoords.side3} q${fCoords.corner4X1},${fCoords.corner4Y1} ${fCoords.corner4X2},${fCoords.corner4Y2} q${fCoords.corner5X1},${fCoords.corner5Y1} ${fCoords.corner5X2},${fCoords.corner5Y2}
        v${fCoords.side4} q${fCoords.corner6X1},${fCoords.corner6Y1} ${fCoords.corner6X2},${fCoords.corner6Y2} 
        h${fCoords.side5} q${fCoords.corner7X1},${fCoords.corner7Y1} ${fCoords.corner7X2},${fCoords.corner7Y2} 
        v${fCoords.side6} q${fCoords.corner8X1},${fCoords.corner8Y1} ${fCoords.corner8X2},${fCoords.corner8Y2} `}
      />
    </g>
  )
}

export function setLetterF() {
  let letterF = document.getElementById('letterF')

  letterF.setAttribute('d', `M0,0 
  h${fCoords.side1} q${fCoords.corner1X1},${fCoords.corner1Y1} ${fCoords.corner1X2},${fCoords.corner1Y2} 
  v${fCoords.side2} q${fCoords.corner2X1},${fCoords.corner2Y1} ${fCoords.corner2X2},${fCoords.corner2Y2} q${fCoords.corner3X1},${fCoords.corner3Y1} ${fCoords.corner3X2},${fCoords.corner3Y2} 
  v${fCoords.side3} q${fCoords.corner4X1},${fCoords.corner4Y1} ${fCoords.corner4X2},${fCoords.corner4Y2} q${fCoords.corner5X1},${fCoords.corner5Y1} ${fCoords.corner5X2},${fCoords.corner5Y2}
  v${fCoords.side4} q${fCoords.corner6X1},${fCoords.corner6Y1} ${fCoords.corner6X2},${fCoords.corner6Y2} 
  h${fCoords.side5} q${fCoords.corner7X1},${fCoords.corner7Y1} ${fCoords.corner7X2},${fCoords.corner7Y2} 
  v${fCoords.side6} q${fCoords.corner8X1},${fCoords.corner8Y1} ${fCoords.corner8X2},${fCoords.corner8Y2} 
  `)

}