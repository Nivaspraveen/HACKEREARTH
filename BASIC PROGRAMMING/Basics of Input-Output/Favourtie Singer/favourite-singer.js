
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    const numSongs = parseInt(lines[index++]);
    const singers = lines[index].split(' ').map(Number);
    const favouriteSingerCount = countFavouriteSinger(singers);
    console.log(favouriteSingerCount);
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
function countFavouriteSinger(songs) {
    const singerCount = new Map();
    for (const singer of songs) singerCount.set(singer, (singerCount.get(singer) || 0) + 1);
    
    let maxCount = 0;
    for (const count of singerCount.values()) {
        if (count > maxCount) maxCount = count;
    }
    
    let favouriteSingerCount = 0;
    for (const count of singerCount.values()) {
        if (count === maxCount) favouriteSingerCount++;
    }
    return favouriteSingerCount;
}
