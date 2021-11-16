import React,{useState,useEffect} from 'react'
import {Table,Button} from "react-bootstrap"
import EditBook from './EditBook'

// state variable to show/hide modal.
function BookList({books,refreshBooks}) {    
  const [showEditDialog,setShowEditDialog] = useState(false)
  //state variable to edit user info 
  const [editingBook,setEditingBook] = useState({})
  // refresh books when the page first loads 
    useEffect(refreshBooks,[])
    const editBook = (book) => {
      setEditingBook(book)
      setShowEditDialog(true)
    }
    // delete book, then refresh page with updated book.
    const deleteBook = (book) => {
      fetch('/api/books/'+book._id,{
        method:'DELETE'
      })
      .then(()=>{refreshBooks()})
    }
    // client side: map out table with updated book object array retrieved from the database
    return (
      <>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
         {books.map(book => (<tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>   
            <td style={{width: "0.1%", whiteSpace: "nowrap"}}> 
              <Button variant='primary' onClick={()=> editBook(book)} size='lg'>Edit book</Button>
              <Button variant='danger' size='lg' onClick={()=> {deleteBook(book)}}>Delete book</Button>
            </td>
          </tr>))}
        </tbody>
      </Table>
      <EditBook showDialog={showEditDialog} setShowDialog={setShowEditDialog} book={editingBook} refreshBooks={refreshBooks}/>
      </>
    )
}

export default BookList
