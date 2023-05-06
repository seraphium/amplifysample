import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { createChat } from "../../redux/actions/chatActions";

const HomePage = (chats) => {
  const promptRef = useRef(null);
  const dispatch = useDispatch();
  const response = chats?.chats?.body;
  console.warn("response in chat", response);

  const onSend = () => {
    const prompt = promptRef?.current?.value;
    dispatch(createChat(prompt));
  };

  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <input name="Prompt" label="Prompt" ref={promptRef} />
      <div>
        <button
          className="btn btn-primary"
          style={{ marginTop: 5 }}
          onClick={onSend}
        >
          Send
        </button>
        <div>
          <span>{response}</span>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    chats: state.chats,
  };
}
export default connect(mapStateToProps)(HomePage);
