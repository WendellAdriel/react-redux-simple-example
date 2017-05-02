import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectBook } from '../actions'


class BookList extends Component {
  renderBookList () {
    return this.props.books.map(book => <li
      onClick={ () => this.props.selectBook(book) }
      key={ book.title }
      className="list-group-item">{ book.title }</li>)
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        { this.renderBookList() }
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
