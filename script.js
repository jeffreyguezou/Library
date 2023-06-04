let myLibrary=[
    {
        title : "The Fellowship of the Ring",
        author : "J.R.R.Tolkein",
        genre : "Fantasy",
        pages : "531",
        read : true
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

addButton.addEventListener("click",()=>{
    modal.classList.toggle('hidden');
})
