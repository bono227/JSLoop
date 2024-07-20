// 1

function PrintNum (a, b) {
    for (let i = a; i <= b; i++)
        console.log(i)
}
PrintNum (1, 10)
 
// 2

function EvenNum (a, b) {
    for (let i = a; i <= b; i = i + 2)
        console.log(i)
}
EvenNum (0, 20)

// 3

function Multi3 (a, b) {
    for (let i = a; i <= b; i++)
        console.log(3 * i)
}
Multi3 (1, 10)

// 3.v2
function Multi2 (a, b) {
    let i = a
    while (i <= b) {
        console.log(i * 3)
        i++
    }
}
Multi2 (1, 10)

// 4

function ReverseNum (a, b) {
    for (let i = a; i >= b; i--)
        console.log(i)
}
ReverseNum (10, 1)

// 5

function printNumber (start, end) {
    for (let i = start; i <= end; i++)
        console.log(i)
}
printNumber (5, 30)

// 6

function factorial(a) {
    let result = 1;
    for (let i = a; i > 1; i--) {
        result *= i;
    }
    console.log(result)
}
factorial(6)

// 7
// Given a string change the every even letter to an uppercase.
// input: hello 
// output: hElLo

function evenLetter(word) {
    let newword = "";
    for (let i = 0; i < word.length; i++) {
        if (i % 2 == 1) {
            newword += word[i].toUpperCase();
        } else {
            newword += word[i];
        }
    }
    console.log(newword);
}
evenLetter("nairamdaltaishuudeeebidnarchin")


// // Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

function check(word) {
    let result = "no";
    for (i = 0; i < word.length; i++) {
        if (word[i] === "y") {
            result = "yes"
        }
    } console.log(result)
}
check("harmon")

// // Print the characters of the string, separated by space, and in capital letters,
// // input: John 
// // output: J O H N

function tomuseg(word) {
    let upword = "";
    for (i = 0; i < word.length; i++) {
        upword += word[i].toUpperCase() + " ";
    } console.log(upword)
}
tomuseg("xamaatansadantaigaaalte")


// // Write function that find longer word. It takes 2 arguments (word1, word2) and return the longer word

function Longest(name1, name2) {
    if(name1.length > name2.length) {
        console.log(name1 + " is longer")
    } else if (name1.length < name2.length) {
        console.log(name2 + " is longest")
    } else {console.log("no one more than us g")}

    }

    Longest("muur", "hulgana")

    // book by filter 
    
    const books = [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        {
          title: "One Hundred Years of Solitude",
          author: "Gabriel Garcia Marquez",
          year: 1967,
        },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
      ];
      
    function bookyear(bookyear) {
    const FilteredBooks = [];
    for (let a = 0; a < books.length; a++) {
        if (books[a].year <= bookyear) {
            FilteredBooks.push(books[a]);
        }
    }
    console.log(FilteredBooks)
}
bookyear(1940)

// write a function that takes department name and a percentage as argument and
//increases the salary of all employees in that department by that percantage

const employees = [
    { id: 1, name: "Alice", department: "Engineering", salary: 75000 },
    { id: 2, name: "Bob", department: "Marketing", salary: 50000 },
    { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
    { id: 4, name: "Dave", department: "HR", salary: 60000 },
    { id: 5, name: "Eve", department: "Marketing", salary: 55000 },
  ];

  function avarageSalary(depname) {
    const Deplist = [];
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        if (employees.[department] === depname) {
            Deplist.push(employees[i])
        }
    } console.log
  }