// function to welcome guest
function takeANumber(lineCount, name) {
  //adds a person to the line
  lineCount.push(name);
  // adds person to the end of the line
  //properly handles multiple people being added
  return (`Welcome, ${name}. You are number ${katzDeli} in line.`);
}
