process.env.UV_THREADPOOL_SIZE = 18;

const crypto = require("crypto");

const startTime = Date.now();
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1: ", Date.now() - startTime);
});

crypto.pbkdf2("c", "b", 100000, 512, "sha512", () => {
  console.log("2: ", Date.now() - startTime);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3: ", Date.now() - startTime);
});

crypto.pbkdf2("c", "b", 100000, 512, "sha512", () => {
  console.log("4: ", Date.now() - startTime);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5: ", Date.now() - startTime);
});

crypto.pbkdf2("c", "b", 100000, 512, "sha512", () => {
  console.log("6: ", Date.now() - startTime);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("7: ", Date.now() - startTime);
});

crypto.pbkdf2("c", "b", 100000, 512, "sha512", () => {
  console.log("8: ", Date.now() - startTime);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("9: ", Date.now() - startTime);
});

crypto.pbkdf2("c", "b", 100000, 512, "sha512", () => {
  console.log("10: ", Date.now() - startTime);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("11: ", Date.now() - startTime);
});

crypto.pbkdf2("c", "b", 100000, 512, "sha512", () => {
  console.log("12: ", Date.now() - startTime);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("13: ", Date.now() - startTime);
  });
  
  crypto.pbkdf2("c", "b", 100000, 512, "sha512", () => {
    console.log("14: ", Date.now() - startTime);
  });
  
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("15: ", Date.now() - startTime);
  });
  
  crypto.pbkdf2("c", "b", 100000, 512, "sha512", () => {
    console.log("16: ", Date.now() - startTime);
  });
  
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("17: ", Date.now() - startTime);
  });
  
  crypto.pbkdf2("c", "b", 100000, 512, "sha512", () => {
    console.log("18: ", Date.now() - startTime);
  });