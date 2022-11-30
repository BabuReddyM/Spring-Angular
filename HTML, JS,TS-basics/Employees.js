class Employees{
    constructor(companyName){
        this.companyName = "Cognizant";
    }
}

class Developers extends Employees{
    constructor(employeeName, experience, dept, position, joiningDate, location, emailId, salary){
        super();
        this.employeeName = employeeName;
        this.experience = experience;
        this.dept = dept;
        this.position = position;
        this.joiningDate = joiningDate;
        this.location = location;
        this.emailId = emailId;
        this.salary = salary;
    }
}
class HR extends Employees{
    constructor(employeeName, experience, dept, position, joiningDate, location, emailId, salary){
        super();
        this.employeeName = employeeName;
        this.experience = experience;
        this.dept = dept;
        this.position = position;
        this.joiningDate = joiningDate;
        this.location = location;
        this.emailId = emailId;
        this.salary = salary;
    }

}
class Finance extends Employees{
    constructor(employeeName, experience, dept, position, joiningDate, location, emailId, salary){
        super();
        this.employeeName = employeeName;
        this.experience = experience;
        this.dept = dept;
        this.position = position;
        this.joiningDate = joiningDate;
        this.location = location;
        this.emailId = emailId;
        this.salary = salary;
    }
}
class Sales extends Employees{
    constructor(employeeName, experience, dept, position, joiningDate, location, emailId, salary){
        super();
        this.employeeName = "Bharath";
        this.experience = 2;
        this.dept = "Developer";
        this.position = "SE";
        this.joiningDate = "2022-10-01";
        this.location = "Bangalore";
        this.emailId = "Bharademo@gmail.com";
        this.salary = "XXXX";
}}

let o1 = new Developers("Bharath","2", "Developoer","SE","2022-10-01","Bangalore","Bharademo@gmail.com",
"xxxx");
console.log(o1.employeeName + " "+ o1.experience + " "+ o1.dept + " "+ o1.position);