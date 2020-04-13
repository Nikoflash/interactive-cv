import React, {useEffect} from 'react'

const iCoords = {
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
    setLetterI(iCoords)
  })
  
  return (
    <g fill="none" stroke="#000000" strokeWidth="1" transform={`translate(${transform})`}> 
      <path id="letterI"
        d={`M0,0 
        h${iCoords.side1} q${iCoords.corner1X1},${iCoords.corner1Y1} ${iCoords.corner1X2},${iCoords.corner1Y2} 
        v${iCoords.side2} q${iCoords.corner2X1},${iCoords.corner2Y1} ${iCoords.corner2X2},${iCoords.corner2Y2}  
        h${iCoords.side3} q${iCoords.corner3X1},${iCoords.corner3Y1} ${iCoords.corner3X2},${iCoords.corner3Y2} 
        v${iCoords.side4} q${iCoords.corner4X1},${iCoords.corner4Y1} ${iCoords.corner4X2},${iCoords.corner4Y2}`}
      />
    </g>
  )
}

function setLetterI() {
  let letterI = document.getElementById('letterI')

  letterI.setAttribute('d', `M0,0 
  h${iCoords.side1} q${iCoords.corner1X1},${iCoords.corner1Y1} ${iCoords.corner1X2},${iCoords.corner1Y2} 
  v${iCoords.side2} q${iCoords.corner2X1},${iCoords.corner2Y1} ${iCoords.corner2X2},${iCoords.corner2Y2}  
  h${iCoords.side3} q${iCoords.corner3X1},${iCoords.corner3Y1} ${iCoords.corner3X2},${iCoords.corner3Y2} 
  v${iCoords.side4} q${iCoords.corner4X1},${iCoords.corner4Y1} ${iCoords.corner4X2},${iCoords.corner4Y2}`)
}