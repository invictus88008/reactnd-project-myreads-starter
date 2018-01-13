import React from 'react'
import { Route, Link, history } from 'react-router-dom';

// import * as BooksAPI from './BooksAPI'
//Components
import SearchPage from './search/search-page';
import BookShelf from './book-shelf/book-shelf-page';
//Styles
import './App.css'

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false
    }

    render( ) {
        return(
            <div className="app">
                <Route path='/search' component={SearchPage} />
                <Route exact path='/' component={BookShelf}>

                </Route>
            </div>
        )
    }
}

export default BooksApp