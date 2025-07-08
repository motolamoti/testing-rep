const queue = [];
let processing = false;


function spinthewhile(){

}


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("זכית!");
  }, 2000);

  promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}