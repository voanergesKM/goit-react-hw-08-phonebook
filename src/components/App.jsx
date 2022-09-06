import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './PhonebookContainer.styled';
import { Title } from './Title/AppTitle';
import { ContactForm } from './ContactForm/FormWrapper';
import { SectionTitle } from './Title/SectionTitle';
import { Filter } from './Filter/Filter';
import { ContactList } from './FriendList/FriendList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onConfirmAddFriend = (evt, name, number) => {
    evt.preventDefault();

    const friendId = nanoid();

    const findedContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (findedContact) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: friendId, name, number }],
      }));
    }
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  onFriendDelete = friendId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== friendId),
    }));
  };

  render() {
    const normalizedName = this.state.filter.toLowerCase();
    const filteredFriends = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );

    return (
      <Container>
        <Title text="Phonebook" />
        <ContactForm onConfirmAddFriend={this.onConfirmAddFriend} />
        <SectionTitle text="Contacts" />
        <Filter
          value={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <ContactList
          list={filteredFriends}
          onFriendDelete={this.onFriendDelete}
        />
      </Container>
    );
  }
}
