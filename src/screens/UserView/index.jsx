import { NavBar } from "../../components/navBar";
import { CookHubImage } from "../../Icons/CookHubImage";
import "./index.css";

const UserView = ( {children}) => {
  

  return (
    <div className="UserView">
      {children}
    </div>
  );
};
export{ UserView };