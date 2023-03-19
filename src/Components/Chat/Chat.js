import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Chat/style.css";
import { faker } from "@faker-js/faker";

function Chatdata() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src={faker.image.avatar()} />
        <div className="chatheader-info">
          <h3>Group name</h3>
          <p>Last Seen</p>
          <p>Time</p>
        </div>
        <div className="chatheader-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat-body">
        <p className={`chat-message$ {true &&'chat-receiver'}`}>
          <span className="chat-name"></span>
          <span className="chat-timestamp"></span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticon />
        <form>
          <input type="text" />
          <button>Send a Message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chatdata;