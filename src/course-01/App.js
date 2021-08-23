import { Component } from 'react';

class Document extends Component {
  render() {
    return (
      <article>
        <h1>{this.props.title || 'Untitled'}</h1>
      </article>
    )
  }
}

class Form extends Component {
  render() {
    return (
      <form>
        <label>Title</label>
        <div>
          <input 
            onChange={this.props.onChange}
            value={this.props.value}
          />
        </div>
        <br />
        <button
          onClick={this.props.onSubmit}
          type="submit"
        >
          Save
        </button>
      </form>
    )
  }
}


export class App extends Component {
  state = {
    pendingValue: '',
    value: '',
  }

  handleChange = (event) => {
    this.setState({ pendingValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        ...prevState,
        value: prevState.pendingValue
      }
    });
  }

  render() {
    return (
      <main>
        <Document title={this.state.value} />
        <Form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.pendingValue}
        />
      </main>
    )
  }
}