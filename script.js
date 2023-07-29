function numberOfBooksRead(library) {
  // Filter the books array to get only the books with readingStatus as true (i.e., read books)
  const readBooks = library.books.filter(book => book.readingStatus === true);

  // Return the count of read books
  return readBooks.length;
}

// Example library object
const library = {
  books: [
    {
      author: "J.K. Rowling",
      title: "Harry Potter and the Sorcerer's Stone",
      readingStatus: true
    },
    {
      author: "George Orwell",
      title: "1984",
      readingStatus: false
    },
    {
      author: "Jane Austen",
      title: "Pride and Prejudice",
      readingStatus: true
    },
    // Add more book objects here
  ]
};

// Test the function
const numberOfReadBooks = numberOfBooksRead(library);
console.log(numberOfReadBooks); // Output: 2 (since there are two books with readingStatus set to true)

const numberOfBooksRead = () => {
  // write your code here
};

// Do not change the code below

alert(numberOfBooksRead());
