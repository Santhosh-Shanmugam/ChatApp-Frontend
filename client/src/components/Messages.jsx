import React from 'react';
import Scroll from 'react-scroll-to-bottom';
import Message from './Message';

const Messages = ({ messages, name }) => {
  return (
    <Scroll>
      {messages.map((msg, i) => (
        <div key={i}>
          <Message message={msg} name={name} />
        </div>
      ))}
    </Scroll>
  );
};

export default Messages;
