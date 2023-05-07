import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { createChat } from "../../redux/actions/chatActions";
import Spinner from "../common/Spinner";
import "./homePage.css";

const HomePage = ({ chats, loading }) => {
  const promptRef = useRef(null);
  const dispatch = useDispatch();
  const response = chats?.body;
  console.warn("response in chat", response);

  const onSend = () => {
    const prompt = promptRef?.current?.value;
    dispatch(createChat(prompt));
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onSend();
    }
  };

  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <div>
        <input
          name="Prompt"
          label="Prompt"
          style={{ width: "80%", height: 45 }}
          ref={promptRef}
          onKeyDown={onKeyDown}
        />
        <button
          className="btn btn-primary"
          style={{ marginLeft: 10, width: "10%", height: 40 }}
          onClick={onSend}
          disabled={loading}
        >
          Send
        </button>
      </div>
      <div>
        {loading ? <Spinner /> : <p className="multiline">{response}</p>}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    chats: state.chats,
    loading: state.apiCallsInProgress > 0,
  };
}
export default connect(mapStateToProps)(HomePage);
