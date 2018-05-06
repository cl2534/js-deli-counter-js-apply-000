var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.")
}

var took = 0;
function takeANumber(katzDeliLine){
  took++;
  katzDeliLine.push(took);
  return "Welcome. You're ticket number #" + took
}

// takeANumber(katzDeliLine) => "Welcome. You're ticket number #1" [1]
// takeANumber(katzDeliLine) => "Welcome. You're ticket number #2" [1,2]

// nowServing(katzDeliLine) => "Currently serving #1" [2]
// nowServing(katzDeliLine) => "Currently serving #2" []
// takeANumber(katzDeliLine) => "Welcome. You're ticket number #3" [3]

instead putting name, put ticket number to the array. 



function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) return ("There is nobody waiting to be served!");
  var serving = katzDeliLine.shift();
  return ("Currently serving " + serving + ".");
}

function currentLine(katzDeliLine) {
  var result = "The line is currently: ";
  if (katzDeliLine.length === 0) return "The line is currently empty.";
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (i === katzDeliLine.length -1) {
      result += (i+1) + ". " + katzDeliLine[i]; 
    } else {
    result += (i+1) + ". " + katzDeliLine[i] +", ";
    }
  }
  return result;
}
