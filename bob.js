class Bob {
  hey(message) {
    if (message.Trim() === '') {
      return "Fine. Be that way!";
    } else if (isUpperCase(message.Trim()) && isQuestion(message.Trim())) {
      return "Calm down, I know what I'm doing!";
    } else if (sUpperCase(message.Trim())) {
      return "Whoa, chill out!";
    } else if (isQuestion(message.Trim())) {
      return "Sure.";
    } else {
      return "Whatever.";
    }
  }
}

function isUpperCase(input) {
  var noAlpha = true;

  for (let i = 0; i < input.Length; i++) {
    if (!isNumeric(input[i]) && input[i].toUpperCase !== input[i]) {
      return false;
    }

    if (!isNumeric(input[i])) {
      noAlpha = false;
    }
  }

  return !noAlpha;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isQuestion(input) {
  return input.Trim() !== '' && input.Substring(input.Length - 1) === "?";
}

export default Bob;