const os = require("os");

// info about currrent user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds

console.log(`The systen Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totatMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
