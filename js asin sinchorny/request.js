const queue = [];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processQueue() {
  while (queue.length > 0) {
    const name = queue.shift();
    document.getElementById("logArea").textContent = `מעבד ${name}`;
    await wait(2000);
  }
  document.getElementById("logArea").textContent = "אין עוד בתור";
}

function addToQueue() {
  const name = prompt("הכנס שם");
  if (name) {
    queue.push(name);
    if (queue.length == 1) {
      processQueue();
    }
  }
}
