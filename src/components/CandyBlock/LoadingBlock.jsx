import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader 
    className="candy-block"
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 360"
    backgroundColor="#ffadad"
    foregroundColor="#ffc2c2"
  >
    <rect x="0" y="0" rx="5" ry="5" width="260" height="260" /> 
    <rect x="14" y="271" rx="5" ry="5" width="235" height="24" /> 
    <rect x="5" y="315" rx="5" ry="5" width="66" height="28" /> 
    <rect x="110" y="308" rx="30" ry="30" width="150" height="44" />
  </ContentLoader>
  )
}

export default LoadingBlock;
