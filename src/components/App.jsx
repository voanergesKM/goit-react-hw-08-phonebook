import { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledContainer } from 'components/PhonebookContainer/PhonebookContainer.styled';
import { Title } from 'components/Title/Title';
import { FormWrapper } from './Form/FormWrapper.styled';
import { Form } from './Form/Form.styled';
import { SearchInput } from './Form/SearchInput.styled';
import { Button } from './Form/FormButton';
import { FormTitle } from './Form/FormTitle';
import { StyledList } from './FriendList/FriendList.styled';
import { StyledFrendItem } from './FriendList/FriendItem.styled';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onInputChange = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  onConfirmAddFriend = evt => {
    evt.preventDefault();
    const friendId = nanoid();

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: friendId, name: this.state.name, number: this.state.number },
      ],
    }));

    this.reset();
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const normalizedName = this.state.filter.toLowerCase();
    const filteredFriends = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
    return (
      <StyledContainer>
        <Title text="Phonebook" />
        <FormWrapper>
          <Form onSubmit={this.onConfirmAddFriend}>
            <FormTitle title="Name" />
            <SearchInput
              type="text"
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onInput={this.onInputChange}
            />
            <FormTitle title="Number" />
            <SearchInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onInput={this.onInputChange}
            />
            <Button type="submit" text="Add contact" />
          </Form>
        </FormWrapper>
        <Title text="Contacts" />
        <p>Find contacts by name</p>
        <Filter
          value={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <StyledList>
          {filteredFriends.map(contact => (
            <StyledFrendItem key={contact.id}>
              {contact.name}: {contact.number}
            </StyledFrendItem>
          ))}
        </StyledList>
      </StyledContainer>
    );
  }
}
