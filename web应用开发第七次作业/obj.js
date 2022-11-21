var person = {
    firstname: "cai",
    secondname: "xing",
    age: 19,
    hometown: "Jiangxi",
    school: "SCU"
};
console.log(person.age);
console.log(person["hometown"]);
person.height=177;
console.log(person.height);
delete person.height;