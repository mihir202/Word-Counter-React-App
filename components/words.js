import React from 'react'
import { connect } from 'react-redux'
import SortButton from './sortButton'
import { fetchDefinition } from '../store/actions'

const Words = props => {
  const words = props.words

  const handleClick = e => {
    props.fetchDefinition(e.target.textContent)
  }

  return (
    <div>
      <div className="word-box">
        <ul>
          {Object.keys(words).map((word, index) => {
            if(word.length > 0)
              return (
                <li key={index}>
                  <a href="#" onClick={handleClick} data-toggle="modal" data-target="#definitionModal">{word}</a>: {words[word]}
                </li>
              )  
          })}
        </ul>
      </div>
      <SortButton />
      <style jsx>{`
        .word-box {
          width: 100%;
          height: 150px;
          overflow-y: scroll;
          overflow-x: scroll;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = state => {
  return { words: state.words }
}

const mapDispatchToProps = {
  fetchDefinition
}

export default connect(mapStateToProps, mapDispatchToProps)(Words)
