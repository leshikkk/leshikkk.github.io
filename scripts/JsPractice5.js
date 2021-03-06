function jsPractice5() {
    /**
     * @return {string}
     */
    let str = prompt("enter word");

    function isPolindroms(str) {

        let strLen = str.length,
            strReverse = str.split('').reverse().join('');
        return (strReverse === str);

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

function createRandomArr(min, max, length,) {
    if (max - min < length - 1) return;

    function compareNumbers(a, b) {
        return a - b;
    }

    const arr = [];
    let m = [];
    let n = 0;

    for (let i = 0; i <= (max - min); i++) m[i] = i + min;
    for (let i = 0; i < length; i++) {
        n = Math.floor(Math.random() * (m.length));
        arr[i] = m.splice(n, 1)[0];
    }

    alert(arr);
    alert(arr.sort(compareNumbers));
    return arr;
}

function getFizzBuzz() {
    /**
     * @return {array}
     */
    let number = parseInt(prompt("Enter a Value", "0"), 10);
    const listFromFunction = [];

    function fizzBuzz(a) {
        if ((a ^ 0) === a) {
            if (a < 0) {
                a = Math.abs(a);
            }

            for (let i = 1; i <= a; i++) {
                if ((i % 3 === 0) && (i % 5 === 0)) {
                    listFromFunction.push("FizzBuzz");
                    continue;
                }
                if (i % 3 === 0) {
                    listFromFunction.push("Fizz");
                    continue;
                }
                if (i % 5 === 0) {
                    listFromFunction.push("Buzz");
                    continue;
                }

                listFromFunction.push(i)
            }

            alert("watch logs");
        } else {
            alert("the number is not an integer")
        }
    }

    fizzBuzz(number);
    const listOnWindow = document.createDocumentFragment();
    //const listOnWindow = document.createElement("ul");
    /*  for (let i = 0; i < number; i++) {
          const listItem = document.createElement('li');
          listItem.textContent = listFromFunction[i];
          listOnWindow.appendChild(listItem);
      }*/
    listFromFunction.forEach(value => {
        const listItem = document.createElement("li");
        listItem.textContent = value;
        listOnWindow.appendChild(listItem);
    });

    document.getElementById('list').innerHTML = '';
    document.getElementById('list').appendChild(listOnWindow);

    let brBorder = document.querySelector("hr").style.border = "1px solid blue";
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
        const aCharObject = buildCharObject(strA);
        const bCharObject = buildCharObject(strB);
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
        if (n === 1 || n === 2 || n === 0) return 1;
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
        return arr.reduce((acc, curr) => acc += curr, 0);
    }

    let arrLen = parseInt(prompt("Enter a Value", "0"), 10);
    alert(sumPages(arrLen));

}


function createDisplaySum() {
    const displaySum = document.createElement('input');
    displaySum.setAttribute("type", "text");
    displaySum.setAttribute("disabled", "disabled");
    displaySum.setAttribute("value", "0");
    displaySum.setAttribute("id", "displaySum");
    document.getElementById("formForGenerate").appendChild(displaySum);
}

function checkCountOtherBtn(countGenerateButton) {

    if (!countGenerateButton || countGenerateButton > 20) {
        alert("Pls, enter a correct number value , again ");
        document.getElementById("displaySum").addEventListener("click", (e) => {
            e.stopPropagation();
            countGenerateButton = null;
        })
    } else {
        return countGenerateButton;
    }
}

function createListBtn(countBtn) {
    const allAppChild = document.createDocumentFragment();

    for (let i = 0; i < countBtn; i++) {
        const btnIncr = document.createElement('button');
              btnIncr.textContent = `+${i + 1}`;
              btnIncr.value = i + 1;
              btnIncr.setAttribute("data-value-sign", "+");
              allAppChild.appendChild(btnIncr);
        const btnDecr = document.createElement("button");
              btnDecr.textContent = `-${i + 1}`;
              btnDecr.value = i + 1;
              btnDecr.setAttribute("data-value-sign", "-");
              allAppChild.appendChild(btnDecr);
              allAppChild.appendChild(document.createElement("br"));
              document.getElementById("formForGenerate").appendChild(allAppChild);
    }

}

function createResetBtn() {
    const btnReset = document.createElement("button");
          btnReset.textContent = "Reset";
          btnReset.id = "btnResetSumForm";
          document.getElementById("formForGenerate").appendChild(btnReset);
}

function createGenerationForm() {
    let countNewBtnOnDisplay = document.createElement("input");
        countNewBtnOnDisplay.id = "countNewBtnOnDisplay";
        countNewBtnOnDisplay.setAttribute("type", "number");
        countNewBtnOnDisplay.setAttribute("value", "0");
        document.getElementById("formForGenerate").appendChild(countNewBtnOnDisplay);
    let btnGenerateOtherBtn = document.createElement("button");
        btnGenerateOtherBtn.textContent = "Generate";
        btnGenerateOtherBtn.id = "btnGenerateOtherBtn";
        document.getElementById("formForGenerate").appendChild(btnGenerateOtherBtn);
}


document.getElementById("formForGenerate").addEventListener("click", (e) => {
    let displaySum = document.getElementById("displaySum");
    let btnGenerateOtherBtn = document.getElementById("btnGenerateOtherBtn");
    let btnResetSumForm = document.getElementById("btnResetSumForm");
    let countGenerateButton = document.getElementById("countNewBtnOnDisplay").value;
    if (displaySum !== null) {
        if (e.target.dataset.valueSign === "+") {
            displaySum.value = Number(displaySum.value) + Number(e.target.value);
        } else {
            displaySum.value = Number(displaySum.value) - Number(e.target.value);
        }
    }
    switch (e.target.id) {

        case ("btnGenerateOtherBtn"):
            checkCountOtherBtn(countGenerateButton);
            document.getElementById("formForGenerate").innerHTML = "";
            createDisplaySum();
            createListBtn(countGenerateButton);
            createResetBtn();
            break;

        case("btnResetSumForm"):
            document.getElementById("formForGenerate").innerHTML = "";
            createGenerationForm();
            break;

        default:
            break;

    }
});

document.getElementById('jsPractice5').addEventListener('click', jsPractice5);
document.getElementById('jsPractice6').addEventListener('click', jsPractice6);
document.getElementById('jsPractice7').addEventListener('click', jsPractice7);
document.getElementById('getFizzBuzz').addEventListener('click', getFizzBuzz);
document.getElementById('getAnagram').addEventListener('click', getAnagram);
document.getElementById('getFibonacci').addEventListener('click', getFibonacci);
document.getElementById('getFibonacci2').addEventListener('click', getFibonacci2);
document.getElementById('getSumPage').addEventListener('click', getSumPage);
