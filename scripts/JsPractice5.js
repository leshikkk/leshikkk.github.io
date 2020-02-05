function jsPractice5() {
    /**
     * @return {string}
     */
    let str = prompt("enter word");

    function isPolindroms(str) {

        let strLen = str.length,
            strReverse = str.split('').reverse().join('');
        if (strReverse === str) {
            return true;
        } else {
            return false;
        }
    }

    if (str) {
        alert("yes");
    } else {
        alert("no");
    }
}

function jsPractice6() {
    /**
     * @return {array}
     */
    createRandomArr(1, 10, 7);
}

function jsPractice7() {
    /**
     * @return {array}
     */

    let Arr = createRandomArr(1, 100, 10);
    let newArr = Arr.map(elem => elem.toString().replace(/0/g, "zero"));
    alert(newArr);

}

function createRandomArr(min, max, l,) {
    function compareNumbers(a, b) {
        return a - b;
    }

    const arr = [];
    let m = [];
    let n = 0;
    if (max - min < l - 1) return;
    for (let i = 0; i <= (max - min); i++) m[i] = i + min;
    for (let i = 0; i < l; i++) {
        n = Math.floor(Math.random() * (m.length));
        arr[i] = m.splice(n, 1)[0];
    }
    ;
    alert(arr);
    alert(arr.sort(compareNumbers));
    return arr;
}

function getFizzBuzz() {
    /**
     * @return {array}
     */
    let number = parseInt(prompt("Enter a Value", "0"), 10);

    function fizzBuzz(a) {
        if ((a ^ 0) === a) {
            if (a < 0) {
                a = Math.abs(a);
            }
            for (let i = 1; i <= a; i++) {
                if ((i % 3 === 0) && (i % 5 === 0)) {
                    console.log("fizzBuzz");
                    continue;
                }
                if (i % 3 === 0) {
                    console.log("fizz");
                    continue;
                }
                if (i % 5 === 0) {
                    console.log("Buzz");
                    continue;
                }

                console.log(i)
            }
            alert("watch logs");
        } else {
            alert("the number is not an integer")
        }
    }

fizzBuzz(number);
}

function getAnagram() {
    /**
     * @return {string}
     */
    const buildCharObject = str => {
        const charObj = {};
        for (let char of str.replace(/[^\w]/g).toLowerCase()) {
            charObj[char] = charObj[char] + 1 || 1
        }
        return charObj
    };
    const anagram = (strA, strB) => {
        const aCharObject = buildCharObject(strA)
        const bCharObject = buildCharObject(strB)
        if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
            return false
        }
        for (let char in aCharObject) {
            if (aCharObject[char] !== bCharObject[char]) {
                return false
            }
        }
        return true
    };
    let strA = prompt('Enter the first line to check for anagrams');
    let strB = prompt('Enter the second line to check for anagrams');
    alert(anagram(strA, strB));
}

function getFibonacci() {
    /**
     * @return {number}
     */
    function Fibonacci(n) {
        let sq5 = Math.sqrt(5);
        let a = (1 + sq5) / 2;
        let b = (1 - sq5) / 2;
        let fibonacciNumber = (Math.pow(a, n) - Math.pow(b, n)) / sq5;
        let test = Math.floor(fibonacciNumber);
        return Math.floor(fibonacciNumber);
    }

    let numberFib = prompt('Enter the Fibonacci number sequence number');
    alert(Fibonacci(numberFib));
}

function getFibonacci2() {
    /**
     * @return {number}
     */
    function Fibonacci2(n) {
        if (n === 1 || n === 2 || n === 0 ) return 1;
        else return Fibonacci2(n - 2) + Fibonacci2(n - 1);
    }

    let numberFibRec = prompt('Enter the sequence number of the Fibonacci number for the recursive function');
    alert(Fibonacci2(numberFibRec));

}

function getSumPage() {
    /**
     * @return {number}
     */
    function sumPages(n) {
        let arr = [];

        for (let i = 1; i <= n * 2; i++) {
            arr.push(i);
        }
        console.log(arr);
        const sum = arr.reduce((acc, curr) => acc += curr, 0);
        return sum;
    }

    let arrLen = parseInt(prompt("Enter a Value", "0"), 10);
    alert(sumPages(arrLen));

}

document.getElementById('jsPractice5').addEventListener('click', jsPractice5);
document.getElementById('jsPractice6').addEventListener('click', jsPractice6);
document.getElementById('jsPractice7').addEventListener('click', jsPractice7);
document.getElementById('getFizzBuzz').addEventListener('click', getFizzBuzz);
document.getElementById('getAnagram').addEventListener('click', getAnagram);
document.getElementById('getFibonacci').addEventListener('click', getFibonacci);
document.getElementById('getFibonacci2').addEventListener('click', getFibonacci2);
document.getElementById('getSumPage').addEventListener('click', getSumPage);