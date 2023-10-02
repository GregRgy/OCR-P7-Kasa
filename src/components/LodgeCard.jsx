import React from 'react'
import './LodgeCard.scss'
import {Link} from "react-router-dom";

function Lodge(props) {
  return (
    <Link to="/lodge" state={{
      lodgeId: props.id
    }}>
      <div className="lodge">
        <img src={props.imageUrl} alt="" />
        <div className="lodge__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default Lodge