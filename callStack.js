function takeShower() {
  return 'Showering';
}

function eatBreakFast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["oatmeal", 'Eggs', "protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakFast();
  console.log("ok ready to go to work");
}

wakeUp();