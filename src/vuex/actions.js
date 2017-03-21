import * as types from './mutation_types'
import api from '../api'

export default {

  clearApiError: ({commit}) => {
    commit(types.API_FAILED, '')
  },
  savePerson2: ({commit, dispatch}, person) => {
    dispatch('clearApiError')
    api.savePerson(person).then(response => {
      commit(types.PERSON_CHANGED, response)
    }, _ => {
      commit(types.API_FAILED, 'Database update failed')
    })
  },
  savePerson3: ({commit, dispatch}, person) => {
    dispatch('clearApiError')
    return new Promise((resolve, reject) => {
      api.savePerson(person).then(response => {
        commit(types.PERSON_CHANGED, response)
        resolve()
      }, _ => {
        commit(types.API_FAILED, 'Database update failed')
        reject()
      })
    })
  }
}
