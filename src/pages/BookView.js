import { useState } from "react";
import BookList from "../components/BookList";
import CreateBook from "../components/CreateBook";
import {Modal,Button} from "react-bootstrap"

export default function BookView() {
    const [showCreateDialog,setShowCreateDialog] = useState(false)
  const [books,setBooks] = useState([])
    const refreshBooks =()=> {
      fetch('/api/books/')
          .then(res => res.json())
          .then(data => setBooks(data))
  }
    return (
        <div>
        <BookList books={books} refreshBooks={refreshBooks}/>
        <div className="d-grid gap-2">
          <Button variant='primary' onClick={()=> setShowCreateDialog(true)} size='lg'>Add book</Button>
        </div>
        <CreateBook showDialog={showCreateDialog} setShowDialog={setShowCreateDialog} refreshBooks={refreshBooks}/>
      </div>
    )
}
