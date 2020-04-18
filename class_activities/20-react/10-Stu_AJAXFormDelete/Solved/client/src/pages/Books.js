import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  saveBook = (event) => {
    event.preventDefault();

    const book = {title: this.state.title, author: this.state.author, synopsis:this.state.author}

    API.saveBook(book)
    .then( res =>
      this.loadBooks()
    ).catch(err => console.log(err));
  }

  deleteBook = (event) => {
    event.preventDefault();
    console.log(event.target)
    // API.deleteBook()
    // .then( res =>
    //   this.loadBooks()
    // ).catch(err => console.log(err));
  }

  handleInputChange = event => {
    //console.log(event.target)
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" value={this.state.title} onChange={this.handleInputChange}/>
              <Input name="author" placeholder="Author (required)" value={this.state.author} onChange={this.handleInputChange}/>
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" value={this.state.synopsis} onChange={this.handleInputChange} />
              <FormBtn onClick={this.saveBook} >Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn id={book._id} onClick={this.deleteBook} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
