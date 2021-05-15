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


function invalidInput(i) {
    outputLines.push(`${i} : is not a valid command`);
    outputLines.push("Type 'help' for a list of commands");
    return outputLines;
}

export {help, scan, cls, invalidInput};