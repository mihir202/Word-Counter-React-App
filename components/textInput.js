import React from 'react'
import { connect } from 'react-redux'
import { updateWords } from '../store/actions'

const TextInput = props => {
  const handleChange = e => {
    const text = e.target.value

    props.updateWords(text)
  }

  return (
    <div>
      <textarea rows="5" onChange={handleChange}>
      </textarea>
      <style jsx>{`
        textarea {
          width: 100%;
        }
      `}</style>
    </div>
  )
}

const mapDispatchToProps = {
  updateWords
}

export default connect(null, mapDispatchToProps)(TextInput)
