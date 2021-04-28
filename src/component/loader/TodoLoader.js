import React from "react"
import ContentLoader from "react-content-loader"

const TodoLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={580}
    height={300}
    viewBox="0 0 580 340"
    backgroundColor="#cdd3da"
    foregroundColor="#5e4573"
    {...props}
  >
     
    <rect x="14" y="17" rx="0" ry="0" width="680" height="98" cx='5px'/> 
    <rect x="14" y="119" rx="0" ry="4" width="680" height="154" /> 
    <rect x="14" y="278" rx="0" ry="4" width="680" height="74" />
    <circle cx="157" cy="227" r="7" /> 

       
  </ContentLoader>
)

export default TodoLoader