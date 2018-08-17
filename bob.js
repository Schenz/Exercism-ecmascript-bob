class Bob {
  hey(message) {
    if (message.trim() === '') {
      return "Fine. Be that way!";
    } else if (isUpperCase(message.trim()) && isQuestion(message.trim())) {
      return "Calm down, I know what I'm doing!";
    } else if (isUpperCase(message.trim())) {
      return "Whoa, chill out!";
    } else if (isQuestion(message.trim())) {
      return "Sure.";
    } else {
      return "Whatever.";
    }
  }
}

function isUpperCase(input) {
  let test = input.replace(/[^a-zA-Z]/g, '');
  return test.toUpperCase() === test && test.length;
}

function isQuestion(input) {
  return input.trim() !== '' && input.substring(input.length - 1) === "?";
}

export default Bob;