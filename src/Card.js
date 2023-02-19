import React from "react";

const Card = ({id, mail, userName}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}?200x200`}/>
            <h2>{userName}</h2>
            <p>{mail}</p>
        </div>
    )
}

export default Card