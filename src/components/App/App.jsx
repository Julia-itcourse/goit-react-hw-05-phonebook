import React, { Component } from "react"
import ContactList from "../ContactList"
import PhonebookForm from "../PhonebookForm"
import Filter from "../Filter"
import Logo from '../Logo'

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  }

componentDidMount(){
  const persistedContacts = localStorage.getItem('contacts');

  if (persistedContacts){
    this.setState({
      contacts: JSON.parse(persistedContacts),
    })
  }
}

  componentDidUpdate(prevProps, prevState){
  if (prevState.contacts !== this.state.contacts){
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
  }

  onAddContact = (newContact) => {
    this.state.contacts.find((contact) => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in the phonebook!`)
      : this.setState((prevState) => {
          return {
            contacts: [...prevState.contacts, newContact],
          }
        })

    console.log("Contacts in onAddContact", this.state.contacts)
  }

  onRemoveContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      }
    })
  }

  onChangeFilter = (filter) => {
    this.setState({ filter })
  }

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter)
    )
    return (
      <>
        <Logo/>
        <PhonebookForm onAddContact={this.onAddContact} />
     
        {this.state.contacts.length > 1 && (
          <Filter
            value={this.state.filter}
            onChangeFilter={this.onChangeFilter}
          />
        )}

        {this.state.contacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            onRemoveContact={this.onRemoveContact}
          />
        )}
      </>
    )
  }
}

export default App
