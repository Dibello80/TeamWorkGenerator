// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
  
const Employee = require('./Employee');

// Intern class that creates an object that extends the Employee class and adds intern specific parameters
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return "Intern";
    };
};

module.exports = Intern;