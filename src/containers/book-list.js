import React, {Component} from 'react';
import {connect} from 'react-redux';    //import from redux to glue them together

class BookList extends Component {
    renderList () {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
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

//connect() takes function and component to make container
export default connect(mapStateToProps)(BookList);