import React from 'react'
import './Lodge.scss'
import {Link} from "react-router-dom";

function Lodge(props) {
  console.log("props:", props)
  return (
    <Link>
      <div className="lodge">
        <img src={props.imageUrl} alt="" />
        <div className="lodge__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default Lodge