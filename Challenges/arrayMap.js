function checkSubArraySum(arr, target) {
    let subSum = 0;
    const subSums = new Set();

    for (let num of arr) {
        subSum += num;

        if (subSum === target) {
            return true;
        }
        if (subSums.has(subSum - target)) {
            return true;
        }
        
        subSums.add(subSum);
    }

    return false;
}

document.getElementById('subarrayForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const arrayInput = document.getElementById('arrayInput').value;
    const targetInput = parseInt(document.getElementById('targetInput').value);

    // Convert the array input from a comma-separated string to an array of numbers
    const array = arrayInput.split(',').map(Number);

    // Check for the contiguous subarray sum
    const result = checkSubArraySum(array, targetInput);

    // Display the result
    document.getElementById('checkResult').innerText = result ? "True" : "False";
});
