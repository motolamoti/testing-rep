const queue = [];
let processing = false;

function updateQueueDisplay() {
  // תצוגה למסך
  const queueDiv = document.getElementById("queue");
  if (queue.length === 0) {
    queueDiv.textContent = "אין לקוחות כרגע";
  } else {
    queueDiv.textContent = "בתור: " + queue.join(", ");
  }
}

function wait(ms) {
  //timer - זמן
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processQueue() {
  // עיבוד התור
  if (processing) return;
  processing = true;

  const status = document.getElementById("status");

  while (queue.length > 0) {
    const name = queue.shift();
    updateQueueDisplay();
    status.textContent = `מכינים מנה ל-${name}... `;
    await wait(3000);
    status.textContent = `${name} קיבל את המנה! `;
    await wait(1000);
  }

  status.textContent = "אין לקוחות כרגע";
  processing = false;
}

function addCustomer() {
  // הוספת לקוח
  const input = document.getElementById("nameInput");
  const name = input.value.trim();
  if (!name) return;

  queue.push(name);
  input.value = "";
  updateQueueDisplay();
  processQueue();
}
