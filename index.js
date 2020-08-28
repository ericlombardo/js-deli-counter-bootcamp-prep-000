// add name to line and let them know where they are in it
function takeANumber(line, name) {
  // adds name to the end of the array
  line.push(name);
  // returns greeting with current name and number in line
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
}

// Notifies who is being served
function nowServing(line) {
  // checks to see if array is empty
  if (line.length === 0) {
    // if empty sends message
    return (`There is nobody waiting to be served!`);
  } else {
    // Sends message when there is a line and removes the person being served
    return (`Currently serving ${line.shift()}.`)
  }
}

function currentLine(line) {
  // create an empty array
  var intro = `The line is currently: `;
  // loop through and array and list names with number
  for (var i = 0; i < line.length; i++) {
    intro = intro + `${Number([i]) + 1}. ${line[i]}, `
  }
  // return general greeting with array which is numbered list
  return (`The line is currently: ${numberedList}`);
}
