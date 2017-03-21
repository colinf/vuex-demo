import * as types from './mutation_types'

export default {
  [types.API_FAILED] (state, msg) {
    state.apiError = msg
  },
  [types.PERSON_CHANGED] (state, person) {
    state.person = person
  }
}
