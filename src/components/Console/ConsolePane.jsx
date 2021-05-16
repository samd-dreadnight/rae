import React, { useEffect, useRef } from 'react';
import InputLine from './InputLine';
import OutputInjector from './OutputInjector';

function ConsolePane(props) {
  const bottomRef = useRef();

  function scrollToBottom() {
    bottomRef.current.scrollIntoView({
      block: "start"
    });
  }

  useEffect(() => {
    scrollToBottom()
  }, [props])

  return (
    <div id="pane" className="consolePane">
    {props.outputLines.map((line, index) => {
      return (
        <OutputInjector key={index} output={line}/>
      );
    })}
      <InputLine
        change={props.handleChange} 
        submit={props.submitInput}
        value={props.value}
      />
      <div ref={bottomRef}></div>
    </div>
  );
}

export default ConsolePane;