import React from 'react';
import { Outlet } from 'react-router-dom';

function MyStories() {
  return (
    <div>
      {/* <h3>A component with default or latest stories will appear here</h3> */}
    
       < Outlet />
    </div>
  )
}

export default MyStories