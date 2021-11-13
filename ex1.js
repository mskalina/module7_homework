function OwnProp(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(`${key}: ${object[key]}`);      
    }
  }
}
const person = {
city: "Moscow"
}
const student = Object.create(person);
student.ownCity = "Piter";

OwnProp(student);