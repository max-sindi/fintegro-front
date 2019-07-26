import React from 'react'
import {Container} from "@material-ui/core"
import Select from 'react-select'
import {convertRawDataToSelect} from '../utils'
import axios from 'axios'

const st = {
  fieldWrapper: {
    marginTop: 20
  }
}

const defaultCatch = err => console.error(err)

export default class AutocompleteBlockInLiveFetchingMode extends React.Component {
  state = {
    firstList: [],
    secondList: [],
  }

  componentDidMount() {
    this.props.onFirstSelectChange(null)
    this.props.onSecondSelectChange(null)
  }

  onFirstInputChangeHandler = value => {
    value && axios.get(this.props.apiEntitiesList, {params: {q: value}})
      .then(({ data }) => this.setState({ firstList: convertRawDataToSelect(data) }))
      .catch(defaultCatch)
  }

  onSecondInputHandler = value => {
    value && axios.get(this.props.apiEntityDetail(this.props.firstValue.value), {params: {q: value}})
      .then(({ data }) => this.setState({ secondList: convertRawDataToSelect(data.subEntities) }))
      .catch(defaultCatch)
  }

  render() {
    return (
      <Container>
        <div style={st.fieldWrapper}>
          <Select
            onInputChange={this.onFirstInputChangeHandler}
            value={this.props.firstValue}
            onChange={this.props.onFirstSelectChange}
            options={this.state.firstList}
          />
        </div>
        {this.props.firstValue && (
          <div style={st.fieldWrapper}>
            <Select
              onInputChange={this.onSecondInputHandler}
              value={this.props.secondValue}
              onChange={this.props.onSecondSelectChange}
              options={this.state.secondList}
              isMulti
            />
          </div>
        )}
      </Container>
    )
  }
}