import React from "react";

const Card = ({title= "default", imageURL="", cardDescription=""}) => {
    return (
        <div className="card" style= {{width: "18rem;"}}>
        <img
          src={imageURL}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {cardDescription}
          </p>
          <a href="#" className="btn btn-success">
            {title}
          </a>
        </div>
      </div>
    )
}

export default Card;