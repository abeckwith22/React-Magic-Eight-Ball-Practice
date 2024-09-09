import React, { useState } from "react";
import messages from "./messages";
import "./EightBall.css";

const EightBall = () => {
  const [message, setMessage] = useState('Think of a question');
  const [color, setColor] = useState('black');
  const [pushed, setPushed] = useState(false);

  function getFeedback() {
    const message_obj = getRandomMessage();
    setMessage(message_obj.msg);
    setColor(message_obj.color);
    return 0;
  }

  function handleClick(){
    setColor('black');
    setMessage('Think of a question');
    setPushed(false);
  }

  return (
    <>
      <div onClick={getFeedback} style={{backgroundColor: color}} className="EightBall">
        <p className="EightBall-msg">{message}</p>
      </div>

      <button onClick={handleClick} className="EightBall-restartBtn">Restart</button>
    </>
  );
};

function getRandomMessage(){
  const idx = Math.floor(Math.random() * messages.length);
  return { "msg":messages[idx].msg, "color":messages[idx].color };
}

export default EightBall;
