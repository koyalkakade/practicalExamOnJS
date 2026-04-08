//1. reverse each word in sentence
function reverseStr(userSen) {
    len = userSen.length;
    var reversestr = '';

    let wordArr = userSen.split(' ');

    console.log('wordArr', wordArr)
    for (let i = 0; i < wordArr.length - 1; i++) {
        word = wordArr[i];
        counter = word.length;
        //  console.log('counter',counter)
        while (counter > 0) {
            userstr = word[counter - 1];
            reversestr += userstr
            counter--;
        }
        reversestr += ' ';
        // console.log('reverse word',reversestr)
    }
    console.log('1. Reverse string: ', reversestr);
}

reverseStr('Hello Word From Wisdom Sprouts IT Training Hub')

//2 task 2 paragraph text into an object

function textOccurance(sen) {
    sentenceINLower = sen.toLowerCase();
    //console.log('sentenceINLower',sentenceINLower);
    //punctuation='!.?'
    let wordArr = sentenceINLower.replace(/[^a-zA-Z0-9 ]/g, "").split(' ');
    console.log('wordArr', wordArr)
    let count = {};
    for (const word of wordArr) {
        count[word] = (count[word] || 0) + 1;
    }
    console.log('2.task:- ', count);

}

textOccurance('Learning Javascript is fun! Fun and easy to learn javascript.')

//3 task 3

const user = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 }
];
const res = user.filter(v => v.age > 18);

console.log('3. age is greater than 18:- ', res);

//4. ascending order based on price
const product = [
    { name: "Keyboard", price: 499 },
    { name: "Monitor", price: 8999 },
    { name: "Mouse", price: 299 }
];

product.sort((a, b) => a.price - b.price);
console.log('4. ascending order:- ', product)

//5 . task
let str = 'Learn Javascript in 30 days!'
const result = str.replace(/[^a-zA-Z0-9 ]/g, "")
const result1 = result.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
console.log('5. task:-', result1)

//6. task

const arr = ['dog', 'apple', 'sun', 'table', 'cat', 'pie'];
const objWord = {}
const objOfLen = arr.map((val, i) => {
    let len = val.length
    //console.log(val)
    if (!objWord[len]) {
        objWord[len] = [];
    }
    objWord[len].push(val);
})
console.log('6. task: ',objWord);

//10. task
input=3+5*2-4/2;
console.log('calculate: ',input);

//9. asyncronus functios

async function A(){
   await console.log('Task A Completed.')
}
async function B(){
   await console.log('Task A Completed.')
}
async function C(){
   await console.log('Task A Completed.')
}
async function All(){
   await console.log('All Task Completed.')
}