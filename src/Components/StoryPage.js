import React from 'react';
import "../Styles/StoryPage.css";

function StoryPage({ Image, Title, Date, StoryBody }) {
  return (
    <div className="sp">
        <p className="sp__date"> { Date }</p>
        
          <img className="sp__headerImg" src={Image} alt={Title} />
        <h3 className="sp__title">{Title}</h3>
        <p className="sp__text">
            {StoryBody}
        </p>
    </div>
  )
}

export default StoryPage