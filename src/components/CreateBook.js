import React, { useState } from 'react'
import {Form,Button,Modal} from "react-bootstrap"

// title, author, and genre state variables created for the user inputs in form.
function CreateBook({showDialog,setShowDialog,refreshBooks}) {
  const [title,setTitle] = useState('')
  const updateTitle = (e) => {
    setTitle(e.target.value)
  }
  const [author,setAuthor] = useState('')
  const updateAuthor = (e) => {
    setAuthor(e.target.value)
  } 
  const [genre,setGenre] = useState('')
  const updateGenre = (e) => {
    setGenre(e.target.value)
  }
// send a request to api with a post method containing users 'title', 'author, 'genre'
  const createBook = (e) => {
    e.preventDefault()
    fetch('/api/books/',{
      method:'POST',
      body:JSON.stringify({title,author,genre}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(()=>{
      refreshBooks()
      setShowDialog(false)
      setTitle('')
      setAuthor('')
      setGenre('')

    })
    
  }
    return (
      <Modal show={showDialog}>
        <Modal.Header closeButton onHide={()=> setShowDialog(false)}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={createBook}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" value={title} onChange={updateTitle}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Author" value ={author} onChange={updateAuthor} />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="genre">
              <Form.Label>Genre</Form.Label>
              <Form.Control type="text" placeholder="Genre" value = {genre} onChange={updateGenre}/>
            </Form.Group>
          
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setShowDialog(false)}>Close</Button>
          <Button variant="primary" onClick={createBook}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateBook
