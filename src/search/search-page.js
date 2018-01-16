import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as Books from '../BooksAPI';

export default class SearchPage extends Component {

    state = {
        results: []
    };

    handleSearch(e) {
        this.setState({inputValue: e.target.value});
        Books.search(e.target.value).then((data) => {
            if(data) {
                data.map((book) => {
                    let onShelf = this.props.books.filter(shelfBook => shelfBook.id === book.id)
                    if(onShelf.length) {

                        book.shelf = onShelf[0].shelf;
                    }
                })
            }

            this.setState({results: data})
        });

    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={{
                        pathname: '/'
                    }} className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               value={ this.state.inputValue}
                               onChange={ (e) => this.handleSearch(e) }
                               placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.results && this.state.results.map((book) => {
                            return (
                                <li key={ book.id }>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage: `url("${book.imageLinks.thumbnail}")`
                                            }}/>
                                            <div className="book-shelf-changer">
                                                <select onChange={ (e) => this.props.moveToShelf(e, book, this) }
                                                        defaultValue={ book.shelf || 'none'}>
                                                    <option value="none" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        { book.authors && book.authors.map((author) => {
                                            return (
                                                <div key={author} className="book-authors">{author}</div>
                                            )
                                        }) }

                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}