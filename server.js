import bodyparser from "body-parser"
import express from "express"

const app = express()
const port = 3000;

app.use(bodyparser.json())


let books =[{
    id : 1,
    title:"Quenn never cry",
    autor:"Miquela the end"
}]

let nextId = 2;



app.get("/api/books", (req,res)=>{
    res.json(books)
})

app.post("/api/books",(req,res)=>{
    const newBooks = {
        id : nextId++,
        title : "Blue dragon is girl black",
        autor:"Violet council nerhana"
    };
    books.push(newBooks)
    res.status(201).json(newBooks)
})

app.put("/api/books/:id",(req,res)=>{
    const BookId = parseInt(req.params.id, 10)
    const findBooksId = books.find(book=>book.id===BookId)
    if(!findBooksId){
        res.status(400).json({ message: "Book not found" })

    }
    findBooksId.title = "Hello world"
    findBooksId.autor = "serbina"
    res.json(findBooksId)

})

app.delete("/api/books/:id", (req,res)=>{
    const bookId = parseInt(req.params.id, 10)
    const findBook = books.findIndex(book=>book.id===bookId)
    if(findBook===-1){
        res.status(404).json({massage: "Id not found daddy"})
    }
    const booksDelete = books.splice(findBook,1)[0]

    res.json({massage:"Book is delete daddy",booksDelete})
})

app.listen(port,()=>{
    console.log(`Server runnig at port ${port}`)
})