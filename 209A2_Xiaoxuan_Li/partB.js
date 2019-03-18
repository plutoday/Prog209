function min(a,b){
    if(a-b>=0)
        return b-0;
    else if (a-b<0)  
        return a-0;
    else 
        return NaN;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


  readline.question(`please input a number : `, (answer) => {
    var n1;
    var n2;
    n1 = answer;
    readline.question(`please input a number : `, (answer) => {
        n2 = answer;
        readline.close(answer);
        console.log(`The minimum number is =>`);
        console.log(min(n1,n2));
      });
  });


