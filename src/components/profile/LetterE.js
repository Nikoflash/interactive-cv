import React, {useEffect} from 'react'

export const eCoords = {
  side1: 15,
  corner1X1: 10,
  corner1Y1: 0,
  corner1X2: 10,
  corner1Y2: 10,
  side2: 15,
  corner2X1: 0,
  corner2Y1: 0,
  corner2X2: 0,
  corner2Y2: 8,
  side3: 0,
  corner3X1: 0,
  corner3Y1: 0,
  corner3X2: 0,
  corner3Y2: 3,
  side4: 0,
  corner4X1: 0,
  corner4Y1: 0,
  corner4X2: 0,
  corner4Y2: 3,
  corner5X1: 0,
  corner5Y1: 0,
  corner5X2: 0,
  corner5Y2: 3,
  side5: 46,
  corner6X1: 0,
  corner6Y1: 0,
  corner6X2: 0,
  corner6Y2: 3,
  corner7X1: 0,
  corner7Y1: 0,
  corner7X2: 0,
  corner7Y2: 3,
  side6: 0,
  corner8X1: 0,
  corner8Y1: 0,
  corner8X2: 0,
  corner8Y2: 3,
  side7: 0,
  corner9X1: 0,
  corner9Y1: 0,
  corner9X2: 0,
  corner9Y2: 8,
  side8: 15,
  corner10X1: 0,
  corner10Y1: 10,
  corner10X2: -10,
  corner10Y2: 10,
  side9: -15,
  corner11X1: -10,
  corner11Y1: 0,
  corner11X2: -10,
  corner11Y2: -10,
  side10: -110,
  corner12X1: 0,
  corner12Y1: -10,
  corner12X2: 10,
  corner12Y2: -10
}

export default ({transform}) => {  
  
  useEffect(() => {
    setLetterE(eCoords)
  })
  
  return (
    <g fill="none" stroke="#000000" strokeWidth="1" transform={`translate(${transform})`}> 
      <path id="letterE"
        d={`M0,0 
        h${eCoords.side1} q${eCoords.corner1X1},${eCoords.corner1Y1} ${eCoords.corner1X2},${eCoords.corner1Y2} 
        v${eCoords.side2} q${eCoords.corner2X1},${eCoords.corner2Y1} ${eCoords.corner2X2},${eCoords.corner2Y2}  
        h${eCoords.side3} q${eCoords.corner3X1},${eCoords.corner3Y1} ${eCoords.corner3X2},${eCoords.corner3Y2} 
        v${eCoords.side4} q${eCoords.corner4X1},${eCoords.corner4Y1} ${eCoords.corner4X2},${eCoords.corner4Y2} q${eCoords.corner5X1},${eCoords.corner5Y1} ${eCoords.corner5X2},${eCoords.corner5Y2}
        v${eCoords.side5} q${eCoords.corner6X1},${eCoords.corner6Y1} ${eCoords.corner6X2},${eCoords.corner6Y2} q${eCoords.corner7X1},${eCoords.corner7Y1} ${eCoords.corner7X2},${eCoords.corner7Y2}
        v${eCoords.side6} q${eCoords.corner8X1},${eCoords.corner8Y1} ${eCoords.corner8X2},${eCoords.corner8Y2}
        h${eCoords.side7} q${eCoords.corner9X1},${eCoords.corner9Y1} ${eCoords.corner9X2},${eCoords.corner9Y2}
        v${eCoords.side8} q${eCoords.corner10X1},${eCoords.corner10Y1} ${eCoords.corner10X2},${eCoords.corner10Y2}
        h${eCoords.side9} q${eCoords.corner11X1},${eCoords.corner11Y1} ${eCoords.corner11X2},${eCoords.corner11Y2}
        v${eCoords.side10} q${eCoords.corner12X1},${eCoords.corner12Y1} ${eCoords.corner12X2},${eCoords.corner12Y2}`}
      />
    </g>
  )
}

export function setLetterE() {
  let letterE = document.getElementById('letterE')

  letterE.setAttribute('d', `M0,0 
  h${eCoords.side1} q${eCoords.corner1X1},${eCoords.corner1Y1} ${eCoords.corner1X2},${eCoords.corner1Y2} 
  v${eCoords.side2} q${eCoords.corner2X1},${eCoords.corner2Y1} ${eCoords.corner2X2},${eCoords.corner2Y2}  
  h${eCoords.side3} q${eCoords.corner3X1},${eCoords.corner3Y1} ${eCoords.corner3X2},${eCoords.corner3Y2} 
  v${eCoords.side4} q${eCoords.corner4X1},${eCoords.corner4Y1} ${eCoords.corner4X2},${eCoords.corner4Y2} q${eCoords.corner5X1},${eCoords.corner5Y1} ${eCoords.corner5X2},${eCoords.corner5Y2}
  v${eCoords.side5} q${eCoords.corner6X1},${eCoords.corner6Y1} ${eCoords.corner6X2},${eCoords.corner6Y2} q${eCoords.corner7X1},${eCoords.corner7Y1} ${eCoords.corner7X2},${eCoords.corner7Y2}
  v${eCoords.side6} q${eCoords.corner8X1},${eCoords.corner8Y1} ${eCoords.corner8X2},${eCoords.corner8Y2}
  h${eCoords.side7} q${eCoords.corner9X1},${eCoords.corner9Y1} ${eCoords.corner9X2},${eCoords.corner9Y2}
  v${eCoords.side8} q${eCoords.corner10X1},${eCoords.corner10Y1} ${eCoords.corner10X2},${eCoords.corner10Y2}
  h${eCoords.side9} q${eCoords.corner11X1},${eCoords.corner11Y1} ${eCoords.corner11X2},${eCoords.corner11Y2}
  v${eCoords.side10} q${eCoords.corner12X1},${eCoords.corner12Y1} ${eCoords.corner12X2},${eCoords.corner12Y2}`)
}