/* Exercise 1
function upperCaser(input) {
  return input.toUpperCase();
}

module.exports = upperCaser;
*/

/* Exercise 2
function repeat(operation, num) {
  for (let i = 0; i < num; i++) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat;
*/

/* Exercise 3
function doubleAll(numbers) {
  let test = numbers.map((x) => x * 2);
  return test;
}

module.exports = doubleAll;
*/

/* Exercise 4
function getShortMessages(messages) {
  return messages
    .filter(function (value) {
      return value.message.length < 50;
    })
    .map(function (value) {
      return value.message;
    });
}

module.exports = getShortMessages;
*/

/* Exercise 5
var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((submittedUsers) =>
      goodUsers.some((goodUsers) => goodUsers.id === submittedUsers.id)
    );
  };
}

module.exports = checkUsersValid;

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers);

testAllValid([{ id: 2 }, { id: 1 }]);
// => true

testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]);
// => false
*/

/* Exercise 6
function countWords(inputWords) {
  return inputWords.reduce((accumulator, currentValue) => {
    accumulator[currentValue]
      ? accumulator[currentValue]++
      : (accumulator[currentValue] = 1);
    return accumulator;
  }, {});
}

module.exports = countWords;
*/

/* Exercise 7 - i dont understand this for sure
function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value;
    return reduceOne(index + 1, fn(value, arr[index], index, arr));
  })(0, initial);
}

module.exports = reduce;
*/

/* Exercise 8 - im not sure i understand this
const duckCount = function () {
  return Array.prototype.slice.call(arguments).filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, "quack");
  }).length;
};


module.exports = duckCount;
*/

/* Exercise 9 - im not sure i understand this
var slice = Array.prototype.slice;

function logger(namespace) {
  return function () {
    console.log.apply(console, [namespace].concat(slice.call(arguments)));
  };
}

module.exports = logger;
*/

/* Exercise 10
module.exports = function (namespace) {
  return console.log.bind(console, namespace);
};
*/

/* Exercise 11 - i dont understand this for sure
module.exports = function arrayMap(arr, fn) {
  return arr.reduce((accumulator, currentValue) => {
    accumulator.push(fn(currentValue));
    return accumulator;
  }, []);
};
*/

/* Exercise 12 - i dont understand this for sure
function Spy(target, method) {
  var originalFunction = target[method];
  var result = {
    count: 0,
  };

  target[method] = function () {
    result.count++;
    return originalFunction.apply(this, arguments);
  };

  return result;

  // count = 0;
  // if ((spy = Spy(console, error))) {
  //   count++;
  // }
  // return count;
}

module.exports = Spy;
*/

/* Exercise 13 - return prikliuchva programata ako chisloto e negativno i vuv repeat funckiqta se vika n na broi puti operation(), obache ne razbiram koga se izvurshva proverkata za da se sloji timer-a sled vsqko izpulnenie na operation() ili??
function repeat(operation, num) {
  if (num <= 0) return;
  operation();

  if (num % 10 === 0) {
    setTimeout(function () {
      repeat(operation, --num);
    });
  } else {
    repeat(operation, --num);
  }
}

module.exports = repeat;
*/

/* Exercise 14 - i think i get it
function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  return repeat(operation, --num);
}

function trampoline(fn) {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
}

module.exports = function (operation, num) {
  return (trampoline) => repeat(operation, num);
};
*/

/* Exercise 15
function loadUsers(userIds, load, done) {
  return new Promise((resolve) => {
    userIds.forEach((user) => {
      users.push(load(userIds[i]));
    });
  });
}

module.exports = loadUsers;
*/

/* Exercise 16 i dont understand this for sure
function getDependencies(mod, result) {
  result = result || [];
  var dependencies = (mod && mod.dependencies) || [];
  Object.keys(dependencies).forEach(function (dep) {
    var key = dep + "@" + mod.dependencies[dep].version;
    if (result.indexOf(key) === -1) result.push(key);
    getDependencies(mod.dependencies[dep], result);
  });
  return result.sort();
}


module.exports = getDependencies;
*/

/* Exercise 17 - i dont understand this for sure
function curryN(fn, n) {
  n = n || fn.length
  return function curriedN(arg) {
    if (n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n - 1)
  }
}

module.exports = curryN
*/

/* Exercise 18 - i think i get it
module.exports = Function.call.bind(Array.prototype.slice);
*/
