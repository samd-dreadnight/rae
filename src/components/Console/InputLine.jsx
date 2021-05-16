import React from 'react';

function InputLine(props) {

    return (
        <div>
            <form action="#" autoComplete="off" onSubmit={props.submit}>
                <label className="inputtag" htmlFor="inputbox">bluedawn@node01:~$</label>
                <input className="inputarea" type="text" autoFocus id="inputbox" value={props.value} onChange={props.change}></input>
            </form>
        </div>
    );
}

export default InputLine;
