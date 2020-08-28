// add name to line and let them know where they are in it
function takeANumber(line, name) {
  // adds name to the end of the array
  line.push(name);
  // returns greeting with current name and number in line
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
}

// Notifies who is being served
function nowServing(line) {
  if (Array.isArray(line)) {
    return (`There is nobody waiting to be served!`);
  } else {
    return (`Currently serving ${line.shift()}.`)
  }
}
