
export default {
  savePerson: (person) => {
    const result = getResult(person)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (result instanceof Error) {
          reject(result)
        } else {
          resolve(result)
        }
      }, 1000)
    })
  }
}

const ERROR_PCT = 25.0
const getResult = person => {
  if (Math.random() * 100 <= ERROR_PCT) {
    return new Error('api failed')
  }
  return Object.assign({}, person)
}
