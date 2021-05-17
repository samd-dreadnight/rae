import React, { useEffect, useRef, useState } from 'react';
import InputLine from './InputLine';
import OutputInjector from './OutputInjector';

function ConsolePane(props) {
  const bottomRef = useRef();

  const [consoleClicked, setConsoleClicked] = useState(false);

  function autofocusInput() {
    setConsoleClicked(!consoleClicked);
  }

  function scrollToBottom() {
    bottomRef.current.scrollIntoView({
      block: "start"
    });
  }

  useEffect(() => {
    scrollToBottom()
  }, [props])

  return (
    <div id="pane" className="consolePane" onClick={autofocusInput}>
    {props.outputLines.map((line, index) => {
      return (
        <OutputInjector key={index} output={line}/>
      );
    })}
      <InputLine
        change={props.handleChange} 
        submit={props.processInput}
        value={props.value}
      />
      <div ref={bottomRef}></div>
    </div>
  );
}

export default ConsolePane;