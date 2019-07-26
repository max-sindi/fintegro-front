import React from 'react'
import {Typography, TextField, Button, Container} from "@material-ui/core"
import Select from 'react-select'

const st = {
  fieldWrapper: {
    marginTop: 20
  },
  field: {
    width: '100%'
  },
  form: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    paddingTop: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  button: {
    margin: '20px auto'
  }
}

export default class Form extends React.Component {

  state = {
    stars: null,
    feedback: ''
  }

  generateOptions = () => new Array(5).fill(0).map((i, index) =>
      ({label: index, value: index}))

  onSelectChangeHandler = e => this.setState({stars: e})

  handleInputChange = e => this.setState({feedback: e.target.value})

  onSubmitHandler = e => {
    e.preventDefault()
    this.submit()
  }

  submit = () => {
    if(!(this.state.stars && this.state.feedback)) {
      return console.log('Invalid form data')
    }

    this.props.onSubmitHandler({...this.state, stars: this.state.stars.value})
  }

  render() {
    return (
      <Container>
        <form style={st.form} onSubmit={this.onSubmitHandler}>
          <Typography style={st.title}>Leave your feedback</Typography>
          <div style={st.fieldWrapper}>
            <TextField
              style={st.field}
              variant="outlined"
              placeholder={'Feedback'}
              value={this.state.feedback}
              onChange={this.handleInputChange}
            />
          </div>
          <div style={st.fieldWrapper}>
            <Select
              value={this.state.stars}
              options={this.generateOptions()}
              onChange={this.onSelectChangeHandler}
            />
          </div>
          <div>
            <Button style={st.button} color={'primary'} variant={'contained'} type={'submit'}>Submit</Button>
          </div>
        </form>
      </Container>
    )
  }
}