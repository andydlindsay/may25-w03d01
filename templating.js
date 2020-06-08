const stringTemplate = (user) => {
  // console.log(`Hello ${user.name}, you are ${user.age} years old because you were born on ${user.birthDate}!`);
  console.log(`
    <div>Hello ${user.name}</div>
    <p>You are ${user.age} years old!</p>
  `);
}; 

stringTemplate({
  name: 'Bob',
  birthDate: 'December 7, 1998',
  age: 24,
});
