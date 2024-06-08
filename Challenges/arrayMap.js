function checkSubArraySum(arr,target){
  var arraySorted=arr.sort();
  var result=false;
  var possibleSum=arraySorted[0];
  if(arraySorted.includes(target)){
    result=true;
  }
  else{
    for(let i=0;i<arraySorted.length;i++){
      if(i>0){
        if((arr[i-1]+1)==arr[i]){
          possibleSum+=arr[i];
        }
        else{
          possibleSum=arr[i];
        }
      }
      if(possibleSum==target){
        result = true;
        break;
      }
  
    }
  }
  return result;
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
