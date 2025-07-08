function sayHello(name) {
  console.log("שלום" + name + "!");
}
function greetUser(callback) {
  const name = "בר";
  callback(name);
}

greetUser(sayHello);
