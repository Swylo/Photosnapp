import React, { useContext } from "react";
import styles from "../styles/Invite.module.css";
import { ActiveInviteContext } from "../contexts/invite.context";
import { AiFillCloseCircle } from "react-icons/ai";

function Invite() {
  const { setCloseInvite } = useContext(ActiveInviteContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setCloseInvite();
  };

  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={() => setCloseInvite()}>
        <AiFillCloseCircle />
      </div>
      <h2 className={styles.title}>Enter your email to get an invite :</h2>
      <form className={styles.invite}>
        <input
          placeholder="cookies@gmail.com"
          type="email"
          required
          className={styles.email}
        />
        <input
          type="submit"
          value="GET AN INVITE"
          className={styles.button}
          onSubmit={() => handleSubmit()}
        />
      </form>
    </div>
  );
}

export default Invite;
