import React, { Component } from 'react';


import { Link } from 'react-router-dom';

import BookShelf from './book-shelf';


export default class BookShelfPage extends Component {



    render(){
    console.log(this.props.books);
    return(

        <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  {/** Currently Reading Bookshelf **/}
                  <BookShelf
                      shelfName="Currently Reading"
                      moveToShelf={ this.props.moveToShelf }
                      books={ this.props.getFilteredBooksArray('currentlyReading') }
                  />
                  {/** Read Book Shelf **/}
                <BookShelf
                    shelfName="Read"
                    moveToShelf={ this.props.moveToShelf }
                    books={ this.props.getFilteredBooksArray('read') }
                />
                  {/** Want to Read **/}
                <BookShelf
                    shelfName="Want to Read"
                    moveToShelf={ this.props.moveToShelf }
                    fetchBooksApi={ this.fetchBooksApi }
                    books={ this.props.getFilteredBooksArray('wantToRead') }
                />
              </div>
            </div>
            <div className="open-search">
              <Link to={{
                  pathname: '/search'
              }}>Add a book</Link>
            </div>
          </div>
)}



}