import React from "react";
import Invite from "./Invite";
import { ActiveInviteContext } from "../contexts/invite.context";
import { useContext } from "react/cjs/react.development";

function InviteBackdrop() {
  const { isActive } = useContext(ActiveInviteContext);
  return (
    <div className="container">
      <div className="backdrop"></div>
      <Invite />
      <style jsx>
        {`
          .backdrop {
            background-color: black;
            height: 100vh;
            width: 100vw;
            position: fixed;
            opacity: 0.7;
            top: 0;
            z-index: 15;
          }
          .container {
            display: ${isActive ? "initial" : "none"};
          }
        `}
      </style>
    </div>
  );
}

export default InviteBackdrop;
