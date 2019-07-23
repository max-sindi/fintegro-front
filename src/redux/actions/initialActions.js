// export function intialAction() {
//   return dispatch => {
//     return dispatch({type: ''})
//   }
// }

import axios from 'axios';

export const upCounter = () => ({ type: 'UP_COUNT' })

export const sendForm = params => {
  axios.post('dasdsa', params)
    .then(res => console.log('ZAEBONCHICK'))
    .catch(err => console.error('NE ZAEBONCHCIK'))

  // return {
  //   type: 'PAHYU'
  // }
}

export const upCounterInObject = () => ({ type: 'UP_COUNT_IN_OBJECT'})

export const setValue = value => ({
  type: 'SET_VALUE',
  payloads: {
    value,
  }
})

export const changeFormValue = ({ name, value }) => ({
  type: 'CHANGE_FORM',
  payloads: { name, value  }
})
