const faker = require("faker");
const fs = require("fs");

const deleteFile = () => {
  fs.unlink("names.txt", (err) => {
    if (err) console.log(err);
    else {
      console.log("Archivo borrado: names.txt");
    }
  });
};

const createFile = (numUsers) => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    users.push(firstName + " " + lastName);
  }
  fs.appendFile("names.txt", JSON.stringify(users, null, "\t"), (err) => {
    if (err) console.log(err);
    else {
      console.log("Contenido agregado");
    }
  });
};

const fileExists = () => {
  if (fs.existsSync("./names.txt")) {
    return true;
  } else {
    return false;
  }
};

if (fileExists()) {
  deleteFile();
  createFile(10);
} else {
  createFile(10);
}
