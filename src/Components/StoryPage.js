import React from 'react'

function StoryPage({ Image, Title, Date }) {
  return (
    <div>
        <img src={Image} alt={Title} />
        <h6> uploaded on :{ Date }</h6>
        <h3>{Title}</h3>
    </div>
  )
}

export default StoryPage