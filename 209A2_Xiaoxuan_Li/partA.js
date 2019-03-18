function printNumbers(){
    var number =1;
    while(number<=300){
        if(number++%5==0){
            console.log("Fizz");
        }
        else if(number++%7==0){
            console.log("Fuzz");
        }
        else 
            console.log(number++);
        
    }
}
printNumbers();
