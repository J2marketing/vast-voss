import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../constants';

const ContactFormWrapper = styled.div`
  margin: 0 auto;
  width: 60vw;
  max-width: 100vw;
  padding: 20px;
  & form {
    font-size: 1.1rem;
    width: 100%;
    & input,
    & textarea {
      color: ${COLOR.LIGHTGREY};
      width: 100%;
      background-color: ${COLOR.VOSS_GREEN_TRANSPARENT};
      border: 2px solid ${COLOR.LIGHTGREY};
      margin: 0.2rem;
      font-family: inherit;
      padding: 10px;
      &::placeholder {
        color: ${COLOR.LIGHTGREY};
      }
    }
    & input[type='submit'] {
      width: auto;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 20px;
      padding: 0.4rem 0.8rem;
      border-radius: 0px;
      border: 2px solid ${COLOR.LIGHTGREY};
      background-color: ${COLOR.VOSS_GREEN_TRANSPARENT};
      color: ${COLOR.LIGHTGREY};
      transition: all 300ms ease-in-out;
      &:hover {
        cursor: pointer;
        transition: all 300ms ease-in-out;
        border: 2px solid ${COLOR.VOSS_GREEN};
        background-color: ${COLOR.VOSS_GREEN};
        color: ${COLOR.LIGHTGREY};
      }
    }
  }
`;

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'VOSS Leads', ...this.state }),
    })
      .then(() => window.location.replace('/message-sent'))
      // eslint-disable-next-line no-console
      .catch(error => console.log(`The form submission returned the following error: ${error}`));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <ContactFormWrapper>
        <h3 className="largeHeader">CONTACT US</h3>
        <form name="VOSS Leads" data-netlify="true" netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="VOSS Leads" />
          <div className="field half first">
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                value={name}
                id="name"
                onChange={this.handleChange}
                placeholder="Chuck Norris"
              />
            </label>
          </div>
          <div className="field half">
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                onChange={this.handleChange}
                placeholder="chuck@norris.com"
              />
            </label>
          </div>
          <div className="field">
            <label htmlFor="message">
              Message
              <textarea
                name="message"
                value={message}
                id="message"
                rows="6"
                onChange={this.handleChange}
                placeholder="WOW! Very cool!"
              />
            </label>
          </div>
          <input type="submit" value="SEND MESSAGE" className="special" />
        </form>
      </ContactFormWrapper>
    );
  }
}

export { ContactForm };
