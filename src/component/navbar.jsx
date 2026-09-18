import {
  ArrowDownToLine,
  Bell,
  House,
  HousePlugIcon,
  Pointer,
  UserGroup,
  UserRoundArrowLeft,
} from "lucide-react";
import Button from "./Button";
import Searchbar from "./Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <div className=" flex bg-black px-2 py-3  justify-between">
      <div>
        <FontAwesomeIcon
          icon={faSpotify}
          size="2x"
          style={{ color: "white" }}
        />
      </div>

      <House className="text-white ml-110 mt-2" />
      <Searchbar />
      <Button />
      <ArrowDownToLine
        size={20}
        style={{ color: "white", marginLeft: "30px", marginTop: "10px" }}
      />

      <p className="text-white  text-xs mt-3 cursor-pointer ">Install Aap</p>
      <Bell
        className="cursor-progress "
        cursor={Pointer}
        size={20}
        style={{ color: "white", marginLeft: "30px", marginTop: "10px " }}
      />
      <UserGroup
        className="cursor-not-allowed "
        size={20}
        style={{ color: "white", marginLeft: "30px", marginTop: "10px" }}
      />
      <UserRoundArrowLeft
        className="cursor-progress "
        size={20}
        style={{ color: "white", marginLeft: "30px", marginTop: "10px" }}
      />
    </div>
  );
}
export default Navbar;
