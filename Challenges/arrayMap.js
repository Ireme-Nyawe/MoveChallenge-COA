function checkSubArraySum(arr, target) {
  let initial = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    while (currentSum > target && initial <= end) {
      currentSum -= arr[initial];
      initial += 1;
    }

    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

document
  .getElementById("subarrayForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const arrayInput = document.getElementById("arrayInput").value;
    const targetInput = parseInt(document.getElementById("targetInput").value);

    // Convert the array input from a comma-separated string to an array of numbers
    const array = arrayInput.split(",").map(Number);

    // Check for the contiguous subarray sum
    const result = checkSubArraySum(array, targetInput);

    // Display the result
    document.getElementById("checkResult").innerText = result
      ? "True"
      : "False";
  });
