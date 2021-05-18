
function cleanInput(i) {
    if (i === null) {
        return "";
    } else {
        return i.split(' ').join('').toLowerCase();
    }
}

export {cleanInput};