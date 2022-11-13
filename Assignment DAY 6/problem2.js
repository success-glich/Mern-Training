// Make a function that takes in input as 
// [1,2,'Sushil',1,2,'Sushil','Sushil'] or any arbitrary array as an input.
// The function should count the occurence of each item in array and return a object with the count

function myFunc(...arr) {

    
      
    const count = {};
    for (const element of arr) {
     if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
       
        
    }
    return count

}
console.log(myFunc(...[1, 2, 'Sushil', 1, 2, 'Sushil', 'Sushil']))