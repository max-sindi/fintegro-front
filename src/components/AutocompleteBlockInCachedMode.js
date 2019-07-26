import React from 'react'
import {Container} from "@material-ui/core"
import Select from 'react-select'
import axios from 'axios'
import {convertRawDataToSelect} from '../utils'

const st = {
  fieldWrapper: {
    marginTop: 20
  }
}
const defaultCatch = err => console.error(err)

export default class AutocompleteBlockInCachedMode extends React.Component {
  state = {
    firstList: [],
    secondList: [],
  }

  fetchEntities = () => {
    axios.get(this.props.apiEntitiesList)
      .then(({ data }) => this.setState({ firstList: convertRawDataToSelect(data) }))
      .catch(defaultCatch)
  }

  componentDidMount() {
    this.props.onFirstSelectChange(null)
    this.props.onSecondSelectChange(null)
    this.fetchEntities()
  }

  onFirstSelectChange = e => {
    axios.get( this.props.apiEntityDetail(e.value) )
      .then(({ data }) => this.setState({ secondList: convertRawDataToSelect(data.subEntities) }))
      .catch(defaultCatch)

    this.props.onFirstSelectChange(e)
  }

  render() {
    return (
      <Container>
        <Container>
          <div style={st.fieldWrapper}>
            <Select
              value={this.props.firstValue}
              onChange={this.onFirstSelectChange}
              options={this.state.firstList}
              isFetching={true}
            />
          </div>
        </Container>
        {this.props.firstValue && this.state.secondList.length > 0 && (
          <Container>
            <div style={st.fieldWrapper}>
              <Select
                value={this.props.secondValue}
                onChange={this.props.onSecondSelectChange}
                options={this.state.secondList}
                isMulti
              />
            </div>
          </Container>
        )}
      </Container>
    )
  }
}