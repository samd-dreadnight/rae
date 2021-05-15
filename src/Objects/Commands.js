import Commands from './CommandList.js';

var outputLines = [];

function help() {
    Commands.forEach(command => {
        outputLines.push("-------------------");
        outputLines.push(`Command: ${command.Name}`);
        outputLines.push(`Description: ${command.Description}`);
        command.Examples.forEach(example => {
            outputLines.push(example.Name);
            outputLines.push(example.Example);
        });
        outputLines.push("-------------------");
    });
    return outputLines;
}


function scan() {
    outputLines.push("The scan command is currently unavailable")
    return outputLines;
}


function cls(i) {
    i = ["RAE Network connected : Type 'help'"];
    return i;
}

export {help, scan, cls};