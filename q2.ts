/* define interface for Person objects */
interface Person {
  name: string,
  age: number,
  luckyAge?: boolean
}

/* assign interface/type to the function definition properly */
const q2 = (person: Person): Person => {
  let age = person.age - 10;

  if (age < 15) {
    age = 15;
  }

  let luckyAge = age % 7 == 0;

  return { ...person, age, luckyAge }
}

//test cases
const input1 = { name: "John", age: 59 };
const input2 = { name: "Jane", age: 18 };

console.log(q2(input1));
console.log(q2(input2));

export default q2;
