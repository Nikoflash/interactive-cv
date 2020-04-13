import React, {useEffect} from 'react'

export const rCoords = {
  side1: 4,
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
  side4X: 0,
  side4Y: 36,
  corner4X1: 0,
  corner4Y1: 0,
  corner4X2: 0,
  corner4Y2: 0,
  corner5X1: 0,
  corner5Y1: 0,
  corner5X2: 0,
  corner5Y2: 0,
  side5X: 0,
  side5Y: 0,
  corner6X1: 0,
  corner6Y1: 0,
  corner6X2: 0,
  corner6Y2: 0,
  corner7X1: 0,
  corner7Y1: 0,
  corner7X2: 0,
  corner7Y2: 0,
  side6: 22,
  corner8X1: 0,
  corner8Y1: 10,
  corner8X2: -10,
  corner8Y2: 10,
  side7: -4,
  corner9X1: -10,
  corner9Y1: 0,
  corner9X2: -10,
  corner9Y2: -10,
  side8: -110,
  corner10X1: 0,
  corner10Y1: -10,
  corner10X2: 10,
  corner10Y2: -10,
}

export default ({transform}) => {  
  
  useEffect(() => {
    setLetterR(rCoords)
  })
  
  return (
    <g fill="none" stroke="#000000" strokeWidth="1" transform={`translate(${transform})`}> 
      <path id="letterR"
        d={`M0,0 
        h${rCoords.side1} q${rCoords.corner1X1},${rCoords.corner1Y1} ${rCoords.corner1X2},${rCoords.corner1Y2} 
        v${rCoords.side2} q${rCoords.corner2X1},${rCoords.corner2Y1} ${rCoords.corner2X2},${rCoords.corner2Y2} 
        h${rCoords.side3} q${rCoords.corner3X1},${rCoords.corner3Y1} ${rCoords.corner3X2},${rCoords.corner3Y2} 
        l${rCoords.side4X},${rCoords.side4Y} q${rCoords.corner4X1},${rCoords.corner4Y1} ${rCoords.corner4X2},${rCoords.corner4Y2} q${rCoords.corner5X1},${rCoords.corner5Y1} ${rCoords.corner5X2},${rCoords.corner5Y2} 
        l${rCoords.side5X},${rCoords.side5Y} q${rCoords.corner6X1},${rCoords.corner6Y1} ${rCoords.corner6X2},${rCoords.corner6Y2} q${rCoords.corner7X1},${rCoords.corner7Y1} ${rCoords.corner7X2},${rCoords.corner7Y2}
        v${rCoords.side6} q${rCoords.corner8X1},${rCoords.corner8Y1} ${rCoords.corner8X2},${rCoords.corner8Y2}
        h${rCoords.side7} q${rCoords.corner9X1},${rCoords.corner9Y1} ${rCoords.corner9X2},${rCoords.corner9Y2} 
        v${rCoords.side8} q${rCoords.corner10X1},${rCoords.corner10Y1} ${rCoords.corner10X2},${rCoords.corner10Y2}`}
      />
    </g>
  )
}

export function setLetterR() {
  let letterR = document.getElementById('letterR')

  letterR.setAttribute('d', `M0,0 
  h${rCoords.side1} q${rCoords.corner1X1},${rCoords.corner1Y1} ${rCoords.corner1X2},${rCoords.corner1Y2} 
  v${rCoords.side2} q${rCoords.corner2X1},${rCoords.corner2Y1} ${rCoords.corner2X2},${rCoords.corner2Y2} 
  h${rCoords.side3} q${rCoords.corner3X1},${rCoords.corner3Y1} ${rCoords.corner3X2},${rCoords.corner3Y2} 
  l${rCoords.side4X},${rCoords.side4Y} q${rCoords.corner4X1},${rCoords.corner4Y1} ${rCoords.corner4X2},${rCoords.corner4Y2} q${rCoords.corner5X1},${rCoords.corner5Y1} ${rCoords.corner5X2},${rCoords.corner5Y2} 
  l${rCoords.side5X},${rCoords.side5Y} q${rCoords.corner6X1},${rCoords.corner6Y1} ${rCoords.corner6X2},${rCoords.corner6Y2} q${rCoords.corner7X1},${rCoords.corner7Y1} ${rCoords.corner7X2},${rCoords.corner7Y2}
  v${rCoords.side6} q${rCoords.corner8X1},${rCoords.corner8Y1} ${rCoords.corner8X2},${rCoords.corner8Y2}
  h${rCoords.side7} q${rCoords.corner9X1},${rCoords.corner9Y1} ${rCoords.corner9X2},${rCoords.corner9Y2} 
  v${rCoords.side8} q${rCoords.corner10X1},${rCoords.corner10Y1} ${rCoords.corner10X2},${rCoords.corner10Y2}`)
}