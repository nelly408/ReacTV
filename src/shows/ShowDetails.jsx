import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails"
import { useState } from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  const [selectedEps, setSelectedEps] = useState()
  //JSX for return statement if there is no show
  if(!show){
    return(
      <p>Please Select a show to view more details</p> 
    )
  }
  //JSX id=f there is a show that renders the episodes for a show and the details for an episode
  return (
  <div className="show-details">
      <EpisodeList name ={show.name} episodes={show.episodes} selectedEpisode ={selectedEps} setSelectedEpisode={setSelectedEps} />
      <EpisodeDetails episode = {selectedEps}/>
  </div>);
}
