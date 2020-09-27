import React from "react";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div id="Header">
      <Avatar isMainAvatar={true} />
      <div className="icon">
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </div>
  );
}

export default Header;
