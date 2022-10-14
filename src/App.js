import Overveiw from "./design-system/componants/Overveiw/Overveiw";
import { faUserGroup, faClockFour, faBriefcaseClock } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <Overveiw
        icon={faUserGroup}
        tittle="650  React JS Template "
        disc="We like to travel light so we don't recommend this method unless you know what you're doing. Globally importing icons can increase the size of your bundle with icons you aren't using"
      />
      <Overveiw
        icon={faClockFour}
        tittle="650  React JS Template "
        disc="We like to travel light so we don't recommend this method unless you know what you're doing. Globally importing icons can increase the size of your bundle with icons you aren't using"
      />
      <Overveiw
        icon={faBriefcaseClock}
        tittle="650  React JS Template "
        disc="We like to travel light so we don't recommend this method unless you know what you're doing. Globally importing icons can increase the size of your bundle with icons you aren't using"
      />
    </div>
  );
}

export default App;
