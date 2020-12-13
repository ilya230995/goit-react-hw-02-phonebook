import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = e => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className={s.phoneBookForm} onSubmit={this.handleOnSubmit}>
        <label className={s.phoneBookLabel}>
          Name{' '}
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            className={s.phoneBookInput}
          />
        </label>
        <label className={s.phoneBookLabel}>
          Number{' '}
          <input
            type="text"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            className={s.phoneBookInput}

          />
        </label>
        <button className={s.submitPhonebook} type="submit">Add Contact</button>
      </form>
    );
  }
}
export default Phonebook;

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
