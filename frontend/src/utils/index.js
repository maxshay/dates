import axios from 'axios'

//
//
// user pass for db = unknowndatesapipw123
//
//



// const URL = 'https://unknown-dates-api.herokuapp.com/date/'

export const getDate = (id) => {
  return axios.get(`https://unknown-dates-api.herokuapp.com/date/${id}`)
    .then(res => res.data)
    .catch(err => {console.log(err)})
}

export const getDates = () => {
  return axios.get(`https://unknown-dates-api.herokuapp.com/dates`)
    .then(res => res.data)
    .catch(err => {console.log(err)})
}

export const getDatesFromMonth = (month) => {
  return axios.get(`https://unknown-dates-api.herokuapp.com/dates/${month}`)
    .then(res => res.data)
    .catch(err => {console.log(err)})
}


