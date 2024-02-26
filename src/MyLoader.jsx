import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (countries) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...countries}
  >
    <circle cx="506" cy="194" r="116" /> 
    <rect x="9" y="89" rx="0" ry="0" width="245" height="151" /> 
    <rect x="209" y="256" rx="0" ry="0" width="3" height="3" /> 
    <rect x="69" y="256" rx="12" ry="12" width="126" height="22" /> 
    <rect x="10" y="296" rx="25" ry="25" width="240" height="16" /> 
    <rect x="7" y="328" rx="25" ry="25" width="240" height="16" /> 
    <rect x="11" y="361" rx="25" ry="25" width="240" height="17" />
  </ContentLoader>
)

export default MyLoader

