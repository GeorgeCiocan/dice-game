function ageCalculator(birthDate) {
  let currentDate = new Date().getFullYear();
  let age = currentDate - birthDate;
  console.log("You are either " + age + " or " + (age - 1));
}

ageCalculator(1991);
