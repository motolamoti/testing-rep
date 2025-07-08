//דף תבניות

//פעולה אסינכרונית- פעולה שלא מתבצעת מיד עד הסוף
//מתחילה בשלב מסוים ומסתיימת מאוחר יותר מבלי לחסום את המשך הריצה שלהקוד

const { concatLimit, reject } = require("async");

1; //CallBacks
//פונקציה שנשלחת כפרמטר ותקרא רק שהפעולה מסתיימת

function doSomthingASync(callback) {
  console.log("hello world");
  setTimeout(() => {
    console.log("סיימתי פעולה");
    callback();
  }, 2000);
}

doSomthingAfter(() => {
  console.log("נקרא לאחר הפעולה");
});

doSomthingASync(doSomthingAfter);

2; //Promises - אובייקט שמייצג פעולה שתושלם בעתיד - בהצלחה או בכישלון

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("הצלחתי!");
  }, 2000);

  promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

3; //SetTimeOut = פונקציה שמבצעת קוד לאחר פרק זמן מסוים- במילישניות

setTimeout(() => {
  console.log("hello");
}, 1000);
