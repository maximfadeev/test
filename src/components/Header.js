import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div id="Header">
      <div>
        <img src="profile-picture.png" alt="profile" id="profile-picture"></img>
        <div id="profile-info">
          <b>
            <p className="profile-text">postername</p>
          </b>
          <p className="profile-text location-text">Location</p>
        </div>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </div>
  );
};

export default Header;
