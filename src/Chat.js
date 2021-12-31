import React, { useState } from "react";
import styled from "styled-components";
import { addDoc, collection } from "@firebase/firestore";
import { auth, db } from "./config";
import Msg from "./Msg";
import { CgEnter } from "react-icons/cg";
import { signOut } from "firebase/auth";

const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .user-section {
    padding: 0.4rem 0.8rem;
    height: 10%;
    color: #fff;
    border-bottom: solid 1px hsl(225, 14%, 27%);
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      h4,
      h6 {
        font-weight: normal;
      }

      h6 {
        color: hsl(217, 11%, 81%);
        text-transform: capitalize;
      }
    }
  }

  .chat {
    width: 100%;
    height: 80%;
    padding: 1rem;
    overflow: scroll;
  }

  .form {
    padding: 0.4rem 0.6rem;
    input {
      width: 85%;
      padding: 0.4rem;
      border: none;
      border-radius: 6px;
      outline: none;
      margin-right: 0.2rem;
    }

    button {
      padding: 0.4rem 0.5rem;
      cursor: pointer;
      border: none;
    }
  }

  .sign-out {
    position: absolute;
    top: 2%;
    right: 2%;
    border: none;
    background: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

function Chat({ pfp, name, email, values, currentUserId }) {
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    try {
      const docRef = addDoc(collection(db, "messages"), {
        text: message,
        id: currentUserId,
        pfp: pfp,
        timeSent: `${hours}:${minutes}`,
        createdAt: now.getTime()
      });
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <ChatWrapper>
      <div className="user-section">
        <div className="user-info">
          <img src={pfp} alt="profile-pic" />
          <div>
            <h4 className="user-name">{name}</h4>
            <h6 className="user-email">{email}</h6>
          </div>
        </div>
      </div>

      <div className="chat">
        {values.map((msg, index) => {
          return <Msg key={index} currentId={currentUserId} msg={msg} />;
        })}
      </div>

      <div className="form">
        <input
          onKeyDown={handleKeyDown}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="Write..."
        />
        <button onClick={handleSend}>SEND</button>
      </div>
      <button onClick={handleSignOut} className="sign-out">
        <CgEnter />
      </button>
    </ChatWrapper>
  );
}

export default Chat;
