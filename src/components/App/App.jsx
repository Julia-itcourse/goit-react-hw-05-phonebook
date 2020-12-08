import React, { Component } from "react"
import ContactList from "../ContactList"
import PhonebookForm from "../PhonebookForm"
import Filter from "../Filter"
import Logo from "../Logo"
import { CSSTransition } from "react-transition-group"


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
    showNotification: false
  }

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts")

    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  onAddContact = (newContact) => {
    const sameContact = this.state.contacts.find(
      (contact) => contact.name === newContact.name
    )
    if (sameContact) {
      this.setState({ showNotification: true });
      setTimeout(() => this.setState({ showNotification: false }), 1500);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newContact],
        }
      })
    }
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
      <CSSTransition in={true} appear = {true} timeout = {500} classNames = "Logo-slideIn">
        <Logo />
        </CSSTransition>

        <PhonebookForm onAddContact={this.onAddContact}   notification={this.state.showNotification} />
        <CSSTransition
            in={this.state.contacts.length > 1}
            timeout={500}
            classNames={"filter"}
            unmountOnExit
          >

          <Filter
            value={this.state.filter}
            onChangeFilter={this.onChangeFilter}
          />
          </CSSTransition>
        
  
        
          <ContactList
            contacts={filteredContacts}
            onRemoveContact={this.onRemoveContact}
          />
       
      </>
    )
  }
}

export default App
