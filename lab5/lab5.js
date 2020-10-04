 /* runs test to see if expected argument is === to value returned by function2test argument */
        function myFunctionTest(expected, function2test) {
            let result = function2test();

            if (Array.isArray(expected)) {
                expected = expected.toString();
            }
            if (Array.isArray(result)) {
                result = result.toString();
            }
            if (expected === result) {
                return "TEST SUCCEEDED";
            } else {
                return "TEST FAILED.  Expected " + expected + " found " + function2test();
            }
        }

        function myarr() {
            return [1, 1];
        }
        console.log("Expected output of myarr() is 40  " + myFunctionTest([1, 1], function () {
            return myarr();
        }));

        //2. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
        function max(num1, num2) {
            let largest = num1;
            if (num2 > largest) {
                largest = num2;
            }
            //document.getElementById('max').value = largest;
            return largest;
        }
        console.log("Expected output of max(9, 5) is 9: " + myFunctionTest(9, function(){
            return max(9,5);
        }));
        
        //3. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
        function maxOfThree(num1, num2, num3){
            let larger = max(num1, num2);    
			let largest = max(larger, num3);
            //document.getElementById('b3').value = largest;
            return largest;
        }
        console.log("Expected output of maxOfThree(11, 39, 45) is 45: " + myFunctionTest(45, function(){
            return maxOfThree(11, 39, 45);
        }));

        
        // 4. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
        function isVowel(input){
            let vowel1 = ['A', 'E', 'I', 'O', 'U'];
            let vowel2 = ['a', 'e', 'i', 'o', 'u'];
            var res = vowel1.includes(input) || vowel2.includes(input) ;
            //document.getElementById("b4").innerHTML = res;
            return res;
        }
        console.log("Expected output of isVowel('a') is false: " + myFunctionTest(true, function(){
            return isVowel('a');
        }));
        console.log("Expected output of isVowel('E') is true: " + myFunctionTest(true, function(){
            return isVowel('E');
        }));
        console.log("Expected output of isVowel('b') is true: " + myFunctionTest(false, function(){
            return isVowel('b');
        }));

        //5. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
        function sumAndMultiply(arr){
            // let arr1 = arr;
            const sumF = (value1, value2) => value1 + value2; 
            var sum = arr.reduce(sumF);
            //document.getElementById('sum').value = sum;
            const mulF = (value3, value4) => value3 * value4;
            var multiply = arr.reduce(mulF);
            //document.getElementById('mul').value = multiply;
        }
        //5a. sum
        function sum(arr){
            // let arr1 = arr;
            const sumF = (value1, value2) => value1 + value2; 
            var sum = arr.reduce(sumF);            
            return sum;
        }
        console.log("Expected output of sum([1, 1, 1, 1, 1]) is 5: " + myFunctionTest(5, function(){
            return sum([1, 1, 1, 1, 1]);
        }));

        //5b. multiply
        function multiply(arr){
            // let arr1 = arr;
            const mulF = (value3, value4) => value3 * value4;
            var multiply = arr.reduce(mulF);
            return multiply;
        }
        console.log("Expected output of multiply([1,2,5,10]) is 100: " + myFunctionTest(100, function(){
            return multiply([1,2,5,10]);
        }))

        //6. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
        function reverse(str){
            var arrReverse = str.split("").reverse().join("");
            //document.getElementById("reverseString").value = arrReverse;
            return arrReverse;
        }
        console.log("Expected output of reverse('daughter') is 'rethguad': " + myFunctionTest('rethguad', function(){
            return reverse('daughter');
        }));
        
        //7. Write a function findLongestWord() that takes an array of words and returns the length of the longest one
        function findLongestWord(arr){
            let len = 0;
            for(var i = 0; i < arr.length; i++){
                // alert(arr[i]);
                if(arr[i].length > len){
                    len = arr[i].length;
                }      
            } 
            //document.getElementById("maxlength").value = len;
            return len;
        }
        console.log('Expected output of findLongestWord(["123", "23", "12345", "4", "1234"]) is 5:' 
        + myFunctionTest(5, function(){
            return findLongestWord(["123", "23", "12345", "24", "1234"]);
        }));

        //8. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
        // function//
        function filterLongWords(arrs, number){
            var result = arrs.filter(function(item) {
                return item.length > number;
            });
            //document.getElementById("filterednum").value = result;
            return result;
        }
        console.log('Expected output of filterLongWords(["1", "11111","12345"]) is ["11111","12345"]'
        + myFunctionTest(["11111","12345"], function(){
            return filterLongWords(["1", "11111","12345"], 2);
        }));
        
        //9 Modify the jsfiddle on the map/filter/reduce slide as follows
        // 9.a multiply each element by 10
		const arrNum = [1,3,5,3,3];
		
        function mapMul10(arr){
            return arr.map(function(value, i, array) {
                return value * 3;
            })
        }
        console.log("Expected output of mapMul10([1,3,5,3,3]) is [10, 30, 50, 30, 30]: " 
            + myFunctionTest([3, 9, 15, 9, 9], function(){
                return mapMul10(arrNum);
        }));

        // 9.b return array with all elements equal to 3;
        function filterEqu3(arr){
            return arr.filter(function(elem, i, array){
                return elem == 3;
            });
        }
        console.log("Expected output filterEqu3([1,3,5,3,3]) is [3,3,3]: " 
            + myFunctionTest([3,3,3], function(){
                return filterEqu3(arrNum);
        }));

        // 9.c return the product of all elements;
        function reduceProdAll(arr){
            return arr.reduce(function(prevValue, elem, i, array){
                return prevValue * elem;
            });
        }
        console.log("Expected output of reduceProdAll([1,3,5,3,3]) is 135: " + myFunctionTest(135, function(){
                return reduceProdAll(arrNum);
        }));
        
		