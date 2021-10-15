import React from 'react'
import { css } from '@emotion/core'
import { GridLoader } from 'react-spinners'
import { connect } from 'react-redux'

const Definition = props => {
  const { word, definition, found, error, fetchingDefinition } = props
  const GoogleFallBack = () => {
    const fallBackClick = () => {
      const url = `https://www.google.com/search?q=${word}`
      const win = window.open(url, '_blank')
      win.focus()
    }

    return (
      <div>
        <p>
          <a href="#" onClick={fallBackClick}>Click Here </a>
          To search Google for <b>{word}</b>
        </p>
      </div>
    )
  }

  let modalBody

  if(fetchingDefinition) {
    const override = css`
      display: block;
      margin: 0 auto;
    `
    modalBody = <GridLoader size={30} css={override} color={"#2bf0d8"} loading={fetchingDefinition} />
  }
  else {
    if(error)
      modalBody = (
        <div>
          <p>Error occurred finding definition for: <b>{word}</b></p>
          <GoogleFallBack />
        </div>
      )
    else {
      if(!found)
        modalBody = (
          <div>
            <p>Could not find definition for: <b>{word}</b></p>
            <GoogleFallBack />
          </div>
        )
      else
        modalBody = <p>{definition}</p>
    }
  }

  return (
    <div>
      <div className="modal" id="definitionModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{word.charAt(0).toUpperCase() + word.slice(1)}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {modalBody}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { word, definition, found, error, fetchingDefinition } = state

  return {
    word,
    definition,
    found,
    error,
    fetchingDefinition
  }
}

export default connect(mapStateToProps)(Definition)