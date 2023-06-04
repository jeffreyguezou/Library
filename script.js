let myLibrary=[
    {
        title : "The Fellowship of the Ring",
        author : "J.R.R.Tolkein",
        genre : "Fantasy",
        pages : "531",
        read : true,
    },
    {
        title :"Salem's Lot",
        author : "Stephen King",
        genre : "Horror",
        pages : 751,
        read : false,
    }
];

function book(title,author,genre,pages,read){
    this.title = title;
    this.author= author;
    this.genre = genre;
    this.pages= pages
    this.read = read;
}

let addButton =  document.querySelector("#addButton");
console.log(addButton);
let modal = document.querySelector(".modal");
console.log(modal);
let bookShelf = document.querySelector("#bookShelf");
let submitButton = document.querySelector("#submitButton");
console.log(submitButton);
let form = document.querySelector(".addBookForm");
console.log(form);


addButton.addEventListener("click",()=>{
    modal.classList.toggle('hidden');
})

updateLibrary();
function updateLibrary(){
myLibrary.forEach(book => {
    createCard(book);
});
}


 function createCard(book)
 {
    //Creating DOM elements to build the card
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const genre =  document.createElement('p');
  const buttonGroup = document.createElement('div');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');
  //Assigning Styles
  bookCard.classList.add('bookCard');
  buttonGroup.classList.add('cardButtonSection');
  readBtn.classList.add('cardButtons');
  removeBtn.classList.add('cardButtons');
  
  title.textContent =  book.title;
  author.textContent =  book.author;
  pages.textContent =  `${book.pages} pages`;
  genre.textContent =  book.genre;
  if(book.read){
    readBtn.textContent = "Read";
    readBtn.classList.add('submitButton')
  }
  else{
    readBtn.textContent = "Not Read Yet"
    readBtn.classList.add('unreadBook')
  }
  readBtn.addEventListener("click", ()=>{
    console.log(readBtn.textContent);
    if(readBtn.textContent == "Read"){
        readBtn.textContent = "Not Read Yet";
        readBtn.classList.replace('submitButton','unreadBook');
    }
    else if(readBtn.textContent == "Not Read Yet"){
        readBtn.textContent = "Read";
        readBtn.classList.replace('unreadBook','submitButton');
    }
  } )
    
  removeBtn.textContent = "Remove Book";
  removeBtn.classList.add('unreadBook');

  //appending DOM Elements
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  buttonGroup.appendChild(readBtn);
  buttonGroup.appendChild(removeBtn);
  bookCard.appendChild(buttonGroup);
  bookShelf.append(bookCard);
}

//submitForm
submitButton.addEventListener("click",()=>{
    addBooktoLibrary();
})

function addBooktoLibrary(){
    let titleInput = form.querySelector("#title").value;
    let authorInput = form.querySelector("#author").value;
    let pagesInput = form.querySelector("#pages").value;
    let genreInput = form.querySelector("#genre").value;
    let isReadStatus = form.querySelector("#isRead");
    console.log(isReadStatus);
    let newBook = new book(titleInput,authorInput,genreInput,pagesInput,true)
    myLibrary.push(newBook);
    console.log(myLibrary);
    updateLibrary();
    
}

    
