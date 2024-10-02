import React from "react";
import "./TournamentCard.css";
import HoverDevCards from "./HoverDevCards";

const TournamentCard = ({ tournament }) => {
  return(
    <div className="card"> 
    
      <HoverDevCards key={tournament.id} tournament={tournament} ></HoverDevCards>
    </div>
  )
}

export default TournamentCard;