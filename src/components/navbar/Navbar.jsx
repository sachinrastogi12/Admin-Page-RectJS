import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <p> 𝐒𝐮𝐩𝐩𝐥𝐲𝐦𝐢𝐧𝐭 <br /> Analytics</p>

        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="items">
            <div className="item">
              <DarkModeOutlinedIcon
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            </div>

            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">90</div>
            </div>

            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <div className="counter">20</div>
            </div>

            <div className="item">
              <p> TurnigCloud-Supplymint <br /> Demo Account </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
