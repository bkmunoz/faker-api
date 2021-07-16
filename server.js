const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.number = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

app.get("/api/users/new", (req,res) => {
    res.json(new User);
})

// console.log(new User)

class Company {
    constructor(){
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.state() + " " + faker.address.zipCode() + ", " + faker.address.country();
    }
}

// console.log(new Company)

app.get("/api/companies/new", (req,res) => {
    res.json(new Company);
})

app.get("/api/users/companies", (req,res) => {
    res.json({User: new User, Company: new Company});
})

app.listen(port, () => console.log(`Running on a port ${port}!!!`));