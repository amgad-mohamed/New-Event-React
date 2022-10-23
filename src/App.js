// import Overveiw from "./design-system/componants/Overveiw/Overveiw";
// import overveiwData from "./design-system/componants/Overveiw/Data";
import speakersData from "./design-system/componants/CreativeSpeakers/SpeakersData.jsx";
import CreativeSpeakers from "./design-system/componants/CreativeSpeakers/CreativeSpeakers.jsx";
// import { faUserGroup, faClockFour, faBriefcaseClock } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>
      {speakersData.map(item =>{
        return(
          <CreativeSpeakers 
          img={item.img}
          alt={item.alt}
          name={item.name}
          job={item.job}
          key={item.id}
          />
        )
      })}
      </div>
    </div>
  );
}

export default App;
