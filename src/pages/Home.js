import React, { Component } from 'react'
import {Card, Container, Switch, Typography} from "@material-ui/core"
import AutocompleteBlockInLiveFetchingMode from '../components/AutocompleteBlockInLiveFetchingMode'
import AutocompleteBlockInCachedMode from '../components/AutocompleteBlockInCachedMode'
import Form from '../components/Form'
import {api} from "../config"
import axios from 'axios'

const st = {
  background: {
    minHeight: '100vh',
    paddingTop: 30,
    boxSizing: 'border-box',
    backgroundImage: 'linear-gradient(to right,#83cff3,#ebf8e1)',
  },
  container: {
    margin: '0 auto',
    maxWidth: 1200,
    width: '100%',
  },
  card: {
    position: 'relative',
    padding: '100px 30px 200px 30px',
    borderRadius: 20,
    overflow: 'visible',
    border: 0
  },
  modeSwitcher: {
    position: 'absolute',
    right: 20,
    top: 20
  }
}

class Home extends Component {
  state = {
    isLiveFetchingMode: true,
    firstValue: null,
    secondValue: null
  }

  onFirstSelectChange = e => this.setState({firstValue: e, secondValue: null})

  onSecondSelectChange = e => this.setState({secondValue: e})

  switchChangeHandler = () => this.setState(st => ({isLiveFetchingMode: !st.isLiveFetchingMode}))

  sendFeedback = data => {
    const dataToSend = {...data, subEntities: this.state.secondValue.map(i => i.value)}
    axios.post( api.leaveFeedback(this.state.firstValue.value), dataToSend)
      .then(() => console.log('success!!1!!1'))
      .catch(err => console.error(err))
  }

  render() {
    const {isLiveFetchingMode, firstValue, secondValue} = this.state
    const dataToAutoComplete = {
      firstValue: firstValue,
      secondValue: secondValue,
      onFirstSelectChange: this.onFirstSelectChange,
      onSecondSelectChange: this.onSecondSelectChange,
      apiEntitiesList: api.getEntitiesList,
      apiEntityDetail: api.getEntityDetail
    }

    return (
      <div style={st.background}>
        <Container style={st.container}>
          <Card style={st.card}>
            <div style={st.modeSwitcher}>
              <div>
                <Typography>Now in {isLiveFetchingMode ? 'Fetching' : 'Cached'} mode</Typography>
              </div>
              <Switch checked={this.state.isLiveFetchingMode} onChange={this.switchChangeHandler}/>
            </div>
            <div style={st.formWrapper}>
              {isLiveFetchingMode
                ? <AutocompleteBlockInLiveFetchingMode {...dataToAutoComplete}/>
                : <AutocompleteBlockInCachedMode {...dataToAutoComplete}/>
              }
              {firstValue && secondValue && secondValue.length > 0 && (
                <Form onSubmitHandler={this.sendFeedback}/>
              )}
            </div>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Home