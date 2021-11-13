function HasSuchProp(line,object) {
    for (let key in object) {
        if (object[key]==line) {
            return true;
        }
    }
return false;
}

const student = {
City:"Piter",
Age:23,
System:"Windows"
}
let line="23"

console.log(HasSuchProp(line, student));