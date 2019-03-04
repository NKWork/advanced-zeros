
  function prost(num) {
    var simple = true;
     if (num > 1) {
       for (var i = 1; i < num; i++) {
         if (num % i  == 0 && i != 1)  {
           simple = false;
         }
       }
       return simple;  
     }
   }
   function mnog(val) {
   str=[];
     var k = 2;
   
     while(val != 1) {  
       if (val % k == 0 && prost(k) ) {
         str.push(k);
         val /= k;
       } else  {
         k++;
       }   
     }
     return str;
   }
  function zeros(n,b) {
    b=Math.floor(b);
    var counter = 0;
    for (var i = b; n/i >= 1; i *= b){
      counter += Math.floor(n/i);
    }
      
    return counter;
  }
  module.exports = function getZerosCount(number, base) {
    let countMax = 0;
    let countMin = 0;
    let targetArray = mnog(base);
     let min =Math.min.apply(null, targetArray);
     let max = Math.max.apply(null,targetArray);
     for(var i=0;i<targetArray.length;i++){
      if(targetArray[i]==max){
        countMax++;
      }
      if(targetArray[i]==min){
       countMin++;
     }
    }
    let a= Math.floor(zeros(number,max)/countMax);
    let b= Math.floor(zeros(number,min)/countMin);
    return Math.min(a,b);
  }
