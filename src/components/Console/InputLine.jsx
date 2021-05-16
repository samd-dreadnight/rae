import React, { useEffect, useRef } from 'react';

function InputLine(props) {
    const isFocused = useRef();

   useEffect(() => {
    isFocused.current.focus();
   }, [props])

    return (
        <div>
            <form action="#" autoComplete="off" onSubmit={props.submit}>
                <label className="inputtag" htmlFor="inputbox"><span className="prompt-username">bluedawn</span>@<span className="prompt-node">node01</span>:~$</label>
                <input ref={isFocused} className="inputarea" type="text" autoFocus id="inputbox" value={props.value} onChange={props.change}></input>
            </form>
        </div>
    );
}

export default InputLine;
