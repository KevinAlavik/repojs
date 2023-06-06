const repojs = require("../src/index");

const url =
  "https://raw.githubusercontent.com/KevinAlavik/json-examples/main/employees.json";

repojs.repo
  .get(url)
  .then((jsonData) => {
    const employees = repojs.repo.parse(jsonData).employees;
    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      console.log(`Name: ${employee.name}`);
      console.log(`Description: ${employee.description}`);
      console.log(`Phone: ${employee.phone}`);
      console.log(`Email: ${employee.email}`);
      console.log(`Address: ${employee.address}`);
      console.log(`Age: ${employee.other.age}`);
      console.log(`Gender: ${employee.other.gender}`);
      console.log(`Education: ${employee.other.education}`);
      console.log(`Languages: ${employee.other.languages.join(", ")}`);
      console.log(
        `Certifications: ${employee.other.certifications.join(", ")}`
      );
      console.log(`Hobbies: ${employee.other.hobbies.join(", ")}\n`);
    }
  })
  .catch((error) => {
    console.error(error);
  });
