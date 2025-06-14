/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import ShowDetails from "./shows/ShowDetails"
import ShowSelection from "./shows/ShowSelection"
import { tvShows } from "./shows/data";

export default function App() {
  const [shows, setShows] = useState(tvShows)
  const [selectedShow, setSelectedShow] = useState()
  return (
    <>
      <header>
       <ShowSelection shows = {shows} setSelectedShow={setSelectedShow}/>
      </header>
      <main>
        <ShowDetails key={selectedShow?.name} show ={selectedShow}/>
        {}
      </main>
    </>
  );
}
