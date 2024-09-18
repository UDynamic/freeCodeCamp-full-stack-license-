// first question:
function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i< scores.length; i++) {
      sum = sum + scores[i];
    }
    return (sum / scores.length)
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


// second question:
  function getGrade(score) {
    if (score == 100){
      return "A++";
    } else {
      if (score > 89) {
        return "A";
      } else if (score > 79) {
        return "B";
      } else if (score > 69) {
        return "C";
      } else if (score > 59) {
        return "D";
      } else {
        return "F";
      }
    }
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));


// third question:
    function hasPassingGrade(score) {
        if (score >= 60) {
        return true;
        } else {
        return false;
        }
    }
    
    
    console.log(hasPassingGrade(100));
    console.log(hasPassingGrade(53));
    console.log(hasPassingGrade(87));


// fourth question:
    function studentMsg(totalScores, studentScore) {
        if (hasPassingGrade(studentScore)) {
        return ("Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.");
        } else {
        return ("Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.");
        }
    }
    console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));


/* freeCodeCamp solutions:

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  if (hasPassingGrade(studentScore)) {
    return ("Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.");
  } else {
    return ("Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.");
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

*/