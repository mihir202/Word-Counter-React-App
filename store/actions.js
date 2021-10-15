import axios from 'axios'
import { actionTypes, sorting, DEFINITION_ENDPOINT } from '../constants'

export const updateWords = text => {
  return { type: actionTypes.UPDATE_WORDS, text }
}

export const sortWords = indicator => {
  return { type: actionTypes.SORT_WORDS, indicator }
}

export const setSorting = sortingMethod => {
  return { type: actionTypes.SET_SORTING, sortingMethod }
}

export const fetchDefinitionPending = word => {
  return { type: actionTypes.FETCH_DEFINITION_PENDING, word }
}

export const fetchDefinitionSuccess = (definition, found) => {
  return { type: actionTypes.FETCH_DEFINITION_SUCCESS, definition, found }
}

export const fetchDefinitionError = error => {
  return { type: actionTypes.FETCH_DEFINITION_ERROR, error }
}

export const fetchDefinition = word => {
  return dispatch => {
    dispatch(fetchDefinitionPending(word))
    axios({
      method: 'get',
      url: `${DEFINITION_ENDPOINT}${word}`,
      timeout: 5000
    })
    .then(response => {
      setTimeout(() => {
        const { definition, found } = response.data
        dispatch(fetchDefinitionSuccess(definition, found))
      }, 3000)
    })
    .catch(error => {
      dispatch(fetchDefinitionError('Error Fetching Definition'))
    })
  }
}
