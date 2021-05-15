import React from 'react';

function InputLine(props) {

    return (
        <div>
            <form action="#" autoComplete="off" onSubmit={props.submit}>
                <label class="inputtag" for="inputbox">bluedawn@node01:~$</label>
                <input class="inputarea" type="text" id="inputbox" value={props.value} onChange={props.change}></input>
            </form>
        </div>
    );
}

export default InputLine;
