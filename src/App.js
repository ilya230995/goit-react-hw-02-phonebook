import { Component } from 'react';
import shortid from 'shortid';

import Phonebook from './components/Phonebook/Phonebook';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import Container from './components/Container/Container';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  existContact = name => {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  addContact = e => {
    if (this.existContact(e.name)) {
      alert(`Already in contacts ${e.name}`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      ...e,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleChange = e => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  filterPhonebook = () => {
    const { filter, contacts } = this.state;

    const toLowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCaseFilter)
    );
  };

  render() {
    const filteredPhonebook = this.filterPhonebook();
    return (
      <Container>
        <h2 className='section-title'>Phonebook</h2>
        <Phonebook onSubmit={this.addContact} />
        <h2 className='section-title'>Statistics</h2>
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <Contacts
          options={filteredPhonebook}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
