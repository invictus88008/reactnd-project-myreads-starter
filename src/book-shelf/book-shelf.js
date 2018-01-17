import React, {Component} from 'react';


export default class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.shelfName }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books &&
                            this.props.books.map((book) => {
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
                                                            defaultValue={ book.shelf }>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            { book.authors.map((author) => {
                                                return (
                                                    <div key={author} className="book-authors">{author}</div>
                                                )
                                            }) }

                                        </div>
                                    </li>
                                )
                            })
                        }


                    </ol>
                </div>
            </div>
        )
    }

}