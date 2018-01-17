import React from 'react'
import { Route, Link, history } from 'react-router-dom';
import * as Books from './BooksAPI';

// import * as BooksAPI from './BooksAPI'
//Components
import SearchPage from './search/search-page';
import BookShelf from './book-shelf/book-shelf-page';
//Styles
import './App.css'

class BooksApp extends React.Component {


    constructor(props) {
        super(props);
        this.moveToShelf = this.moveToShelf.bind(this);
        this.fetchBooksApi = this.fetchBooksApi.bind(this);
        this.getFilteredBooksArray = this.getFilteredBooksArray.bind(this);
    }
    state = {};



    getFilteredBooksArray(bookShelfFilter) {

        let bookShelf= [];
        if(this.state.books)
            bookShelf = this.state.books.filter(book => book.shelf === bookShelfFilter);
        return bookShelf

    }

    moveToShelf( e, changedBook) {
        let shelf = e.target.value;
        Books.update( changedBook, shelf ).then((data)=> {
            this.fetchBooksApi();
        })
    }

    fetchBooksApi() {
        Books.getAll().then(data => this.setState({books: data}) );
    }


    componentDidMount() {
        this.fetchBooksApi();
    }

    render( ) {
        return(
            <div className="app">
                <Route path='/search' render={()=> (
                    <SearchPage
                        moveToShelf={ this.moveToShelf }
                        fetchBooksApi={ this.fetchBooksApi }
                        getFilteredBooksArray={ this.getFilteredBooksArray }
                        books={ this.state.books } />)
                } />
                <Route exact path='/' render={()=>
                    (<BookShelf
                        moveToShelf={ this.moveToShelf }
                        fetchBooksApi={ this.fetchBooksApi }
                        getFilteredBooksArray={ this.getFilteredBooksArray }
                        books={ this.state.books } />)
                }/>

            </div>
        )
    }
}

export default BooksApp