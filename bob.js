class Bob {
  hey(message) {
    let trimmedMesage, upperCaseMessage, questionMessage;
    trimmedMesage = message.trim();
    upperCaseMessage = isUpperCase(trimmedMesage);
    questionMessage = isQuestion(trimmedMesage);

    if (trimmedMesage === '') {
      return "Fine. Be that way!";
    }

    if (upperCaseMessage && questionMessage) {
      return "Calm down, I know what I'm doing!";
    }

    if (upperCaseMessage) {
      return "Whoa, chill out!";
    }

    if (questionMessage) {
      return "Sure.";
    }

    return "Whatever.";
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