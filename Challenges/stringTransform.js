function transformString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        // Reverse the string and replace each character with its ASCII code
        str = str.split('').reverse().join('');
        str = str.split('').map(char => char.charCodeAt(0)).join('');
    } else if (length % 3 === 0) {
        // reverse string
        str = str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // ASCII code generation
        str = str.split('').map(char => char.charCodeAt(0)).join('');
    }

    return str;
}

document.getElementById('stringForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const stringInput = document.getElementById('stringInput').value;

    const result = transformString(stringInput);

    document.getElementById('transformResult').innerText = result;
});