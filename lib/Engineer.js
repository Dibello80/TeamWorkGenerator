// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

// Engineer class that creates an object that extends the Employee class and adds engineer specific parameters
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        return "Engineer";
    };
};

module.exports = Engineer;
