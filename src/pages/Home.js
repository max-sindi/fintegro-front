import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upCounter, upCounterInObject, setValue, changeFormValue, sendForm } from '../redux/actions/initialActions';

class Home extends Component {

  state = {
    form: {
      title: 'qwe',
      body: 'ewq',
    }
  }

  sendForm = () => {
    this.props.sendForm(this.state.form)
  }

  callSetValue = value => {
    this.props.setValue(value)
  }

  changeForm = e => {
    const { name, value } = e.target
    this.setState( state => {
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value
        }
      }
    })
    // this.prop({ name, value })
  }

  render() {
    const { title, body } = this.state.form
    // debugger
    return (
      <div>
        <div>{this.props.counter}</div>
        <input name="title" value={title} onChange={this.changeForm} />
        <input name="body" value={body} onChange={this.changeForm} />
        <button onClick={this.sendForm}></button>
          {/*// <button onClick={this.props.upCounter}>
          //   asdas
          // </button>
          // <div>{this.props.counterInObject}</div>
          // <button onDoubleClick={this.props.upCounterInObject}>
          //   azaz
          // </button>
          //
          // <button onClick={() => this.callSetValue(5) }>5</button>
          // <button onClick={() => this.callSetValue(999) }>999</button>
          // <button onClick={() => this.callSetValue(10) }>10</button>
          // <div>{this.props.value}</div>*/}
      </div>
    );
  }

}

export default connect(
  state => ({
    counter: state.counter.counterRR,
    counterInObject: state.counter.counterAsObject.counterInObject,
    value: state.counter.currentValue,
    form: state.counter.form,

  }),
  { upCounter, upCounterInObject, setValue, changeFormValue, sendForm }
)(Home);
