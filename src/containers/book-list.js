import React, {Component} from 'react';
import {connect} from 'react-redux';    //import from redux to glue them together
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList () {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }
    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props
    // inside of bookList
    // glues redux to react
    return {
        books: state.books
    };
}

// anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    // whenever selectbook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

//connect() takes function and component to make container
// promote booklist from a component to a container that needs to know about this new dispatch
// method, selectBook and make available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);