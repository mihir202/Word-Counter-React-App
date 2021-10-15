import React from 'react'
import { connect } from 'react-redux'
import { FaCheck } from 'react-icons/fa'
import { sortWords, setSorting } from '../store/actions'
import { sorting } from '../constants'

const SortButton = props => {
  const handleClick = e => {
    const sortingMethod = e.target.id

    props.sortWords(sortingMethod)
    props.setSorting(sortingMethod)
  }

  const currentSortingMethod = props.currentSortingMethod

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sort Words
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" id={sorting.TIME_ADDED} href="#" onClick={handleClick}>
          Time Added {currentSortingMethod === sorting.TIME_ADDED && <FaCheck />}
        </a>
        <a className="dropdown-item" id={sorting.REVERSE_TIME_ADDED} href="#" onClick={handleClick}>
          Reverse Time Added {currentSortingMethod === sorting.REVERSE_TIME_ADDED && <FaCheck />}
        </a>
        <a className="dropdown-item" id={sorting.ALPHABETICAL} href="#" onClick={handleClick}>
          Alphabetically {currentSortingMethod === sorting.ALPHABETICAL && <FaCheck />}
        </a>
        <a className="dropdown-item" id={sorting.REVERSE_ALPHABETICAL} href="#" onClick={handleClick}>
          Reverse Alphabetically {currentSortingMethod === sorting.REVERSE_ALPHABETICAL && <FaCheck />}
        </a>
        <a className="dropdown-item" id={sorting.NONE} href="#" onClick={handleClick}>
          Doesn't Matter {currentSortingMethod === sorting.NONE && <FaCheck />}
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { currentSortingMethod: state.sortingMethod }
}

const mapDispatchToProps = {
  sortWords,
  setSorting
}

export default connect(mapStateToProps, mapDispatchToProps)(SortButton)
