// import Overveiw from "./design-system/componants/Overveiw/Overveiw";
// import overveiwData from "./design-system/componants/Overveiw/Data";
// import { faUserGroup, faClockFour, faBriefcaseClock } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import speakersData from "./design-system/componants/CreativeSpeakers/SpeakersData.jsx";
import CreativeSpeakers from "./design-system/componants/CreativeSpeakers/CreativeSpeakers.jsx";
import "../src/design-system/componants/main.css";
import OurPrograms from "./design-system/componants/OurPrograms/OurPrograms.jsx";
import { OurProgramsData } from "./design-system/componants/OurPrograms/OurProgramsData.jsx";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        {speakersData.map((item) => {
          return (
            <CreativeSpeakers
              img={item.img}
              alt={item.alt}
              name={item.name}
              job={item.job}
              key={item.id}
            />
          );
        })}
      </div>
      <div>{OurProgramsData.map((item)=>{
        return ( 
           <OurPrograms 
           key={item.id}
           img={item.img}
           alt={item.alt}
          name={item.name}
          title={item.title}
          description={item.description}
          time={item.time}
          roomNumber={item.roomNumber}
           />)
      })}
      </div>
    </>
  );
}

export default App;
