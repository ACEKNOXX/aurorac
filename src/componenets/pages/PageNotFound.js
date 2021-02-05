import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import './../css/404.scss'

export default function PageNotFound() {
    return (
        <div>
            
<div className="text"><p>404</p></div>
<div className="container">
  <div className="caveman">
    <div className="leg">
      <div className="foot"><div className="fingers"></div></div>      
    </div>
    <div className="leg">
      <div className="foot"><div className="fingers"></div></div>      
    </div>
    <div className="shape">
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
    <div className="head">
      <div className="eye"><div className="nose"></div></div>
      <div className="mouth"></div>
    </div>
    <div className="arm-right"><div className="club"></div></div>    
  </div>
  <div className="caveman">
    <div className="leg">
      <div className="foot"><div className="fingers"></div></div>      
    </div>
    <div className="leg">
      <div className="foot"><div className="fingers"></div></div>      
    </div>
    <div className="shape">
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
    <div className="head">
      <div className="eye"><div className="nose"></div></div>
      <div className="mouth"></div>
    </div>
    <div className="arm-right"><div className="club"></div></div>    
  </div>
</div>
<Link to="https://codepen.io/SofiaSergio/" target="_blank">
  <div id="link">
    <i className="fab fa-codepen"></i>
    <p>watch other pens</p>
  </div>
</Link>
        </div>
    )
}
