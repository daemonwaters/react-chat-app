import React from "react";
import styled from "styled-components";

const MsgWrapper = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.currentId === props.id ? "flex-end" : "flex-start"};
  .msg-content {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: ${(props) => props.currentId === props.id && "none"};
    }
  }

  .msg {
    display: flex;
    flex-direction: column;
    background: #fff;
    max-width: 200px;
    border-radius: 6px;
    padding: 0.2rem;
    gap: 0.2rem;
    overflow-wrap: break-word;
    margin: 0.2rem 0;

    .msg-time {
      align-self: flex-end;
      font-size: 0.6rem;
    }
  }
`;

function Msg({ msg, currentId }) {
  return (
    <MsgWrapper id={msg.id} currentId={currentId}>
      <div className="msg-content">
        <img src={msg.pfp} alt="" />
        <div className="msg">
          <p className="msg-text">{msg.text}</p>
          <p className="msg-time">{msg.timeSent}</p>
        </div>
      </div>
    </MsgWrapper>
  );
}

export default Msg;
