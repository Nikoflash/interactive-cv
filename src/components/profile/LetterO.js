import React, {useEffect} from 'react'

export const oCoords = {
  side1: 15,
  corner1X1: 10,
  corner1Y1: 0,
  corner1X2: 10,
  corner1Y2: 10,
  side2: 110,
  corner2X1: 0,
  corner2Y1: 10,
  corner2X2: -10,
  corner2Y2: 10,
  side3: -15,
  corner3X1: -10,
  corner3Y1: 0,
  corner3X2: -10,
  corner3Y2: -10,
  side4: -110,
  corner4X1: 0,
  corner4Y1: -10,
  corner4X2: 10,
  corner4Y2: -10
}

export default ({transform}) => {  
  
  useEffect(() => {
    setLetterO(oCoords)
  })
  
  return (
    <g fill="none" strokeWidth="1" transform={`translate(${transform})`}> 
      <path id="letterO" 
        d={`M0,0 
        h${oCoords.side1} q${oCoords.corner1X1},${oCoords.corner1Y1} ${oCoords.corner1X2},${oCoords.corner1Y2} 
        v${oCoords.side2} q${oCoords.corner2X1},${oCoords.corner2Y1} ${oCoords.corner2X2},${oCoords.corner2Y2}  
        h${oCoords.side3} q${oCoords.corner3X1},${oCoords.corner3Y1} ${oCoords.corner3X2},${oCoords.corner3Y2} 
        v${oCoords.side4} q${oCoords.corner4X1},${oCoords.corner4Y1} ${oCoords.corner4X2},${oCoords.corner4Y2}`}
      />
    </g>
  )
}

export function setLetterO() {
  let letterO = document.getElementById('letterO')

  letterO.setAttribute('d', `M0,0 
  h${oCoords.side1} q${oCoords.corner1X1},${oCoords.corner1Y1} ${oCoords.corner1X2},${oCoords.corner1Y2} 
  v${oCoords.side2} q${oCoords.corner2X1},${oCoords.corner2Y1} ${oCoords.corner2X2},${oCoords.corner2Y2}  
  h${oCoords.side3} q${oCoords.corner3X1},${oCoords.corner3Y1} ${oCoords.corner3X2},${oCoords.corner3Y2} 
  v${oCoords.side4} q${oCoords.corner4X1},${oCoords.corner4Y1} ${oCoords.corner4X2},${oCoords.corner4Y2}`)
}