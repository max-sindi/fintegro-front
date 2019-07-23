const initialState = {
  counterRR: 1,
  counterAsObject: {
    dasd: 3,
    counterInObject: 3
  },
  currentValue: 0,
  form: {
    title: '',
    body: '',
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UP_COUNT':
      return {
        ...state,
        counterRR: state.counterRR + 1
      };

    case 'UP_COUNT_IN_OBJECT': {
      return {
        ...state,
        counterAsObject: {
          ...state.counterAsObject,
          counterInObject: state.counterAsObject.counterInObject + 2,
        }
      }
    }

    case 'SET_VALUE': {
      return {
        ...state,
        counterRR: action.payloads.value * state.counterRR
      }
    }

    case 'CHANGE_FORM': {
      const { name, value } = action.payloads

      return {
        ...state,
        form: {
          ...state.form,
          [name]: value
        }
      }
    }

    default:
      return state;
  }
}
