// function to welcome guest
function takeANumber(katzDeli, name) {
  //adds a person to the line
  otherDeli.push(name);
  // adds person to the end of the line
  katzDeli = otherDeli.length + 1;
  //properly handles multiple people being added
  return (`Welcome, ${name}. You are number ${katzDeli} in line.`);
}
