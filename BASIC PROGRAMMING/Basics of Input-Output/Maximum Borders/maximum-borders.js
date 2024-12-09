
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;        // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    const T = parseInt(lines[index++]);
    const results = [];
    for (let t = 0; t < T; t++) {
        const [rows, cols] = lines[index++].split(' ').map(Number); 
        const matrix = []; 
        for (let i = 0; i < rows; i++) matrix.push(lines[index++]);
        const maxBorder = findMaxBorder(matrix, rows, cols);
        results.push(maxBorder);
    }
    console.log(results.join('\n'));
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here

function findMaxBorder(matrix, rows, cols) {
    let maxBorder = 0;
    for (let i = 0; i < rows; i++) {
        let currBorder = 0;
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '#') {
                currBorder++;
                maxBorder = Math.max(maxBorder, currBorder);
            }
            else currBorder = 0;
        }
    }
    for (let j = 0; j < cols; j++) {
        let currBorder = 0;
        for (let i = 0; i < rows; i++) {
            if (matrix[i][j] === '#') {
                currBorder++;
                maxBorder = Math.max(maxBorder, currBorder);
            }
            else currBorder = 0;
        }
    }
    return maxBorder;
}