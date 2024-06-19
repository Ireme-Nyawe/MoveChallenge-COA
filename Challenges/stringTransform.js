function transformString(str) {
  const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
  const length = str.length;
  if(length>1000){
    str ="String Length must be not more than 1000 characters!"
  }
else if (!alphanumericRegex.test(str)) {
    str ="String must be alpha numeric!"
}
else{
  if (length % 15 === 0) {
    // Reverse the string and replace each character with its ASCII code
    str = str.split("").reverse().join("");
    str = str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join("");
  } else if (length % 3 === 0) {
    // reverse string
    str = str.split("").reverse().join("");
  } else if (length % 5 === 0) {
    // ASCII code generation
    str = str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join("");
  }
}
  return str;
}

document
  .getElementById("stringForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const stringInput = document.getElementById("stringInput").value;

    const result = transformString(stringInput);

    document.getElementById("transformResult").innerText = result;
  });
