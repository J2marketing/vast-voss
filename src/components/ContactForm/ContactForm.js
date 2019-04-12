import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../../constants';

const ContactFormWrapper = styled.div`
  margin: 0 auto;
  width: 60vw;
  max-width: 100vw;
  padding: 0px;
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

const ContactForm = ({ ...props }) => (
  <ContactFormWrapper {...props}>
    <h3 className="largeHeader">CONTACT US</h3>
    <form method="POST" action="/page-2" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <div className="field half first">
        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" placeholder="Chuck Norris" />
        </label>
      </div>
      <div className="field half">
        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" placeholder="chuck@norris.com" />
        </label>
      </div>
      <div className="field">
        <label htmlFor="message">
          Message
          <textarea name="message" id="message" rows="6" placeholder="WOW! Very cool!" />
        </label>
      </div>
      <input type="submit" value="SEND MESSAGE" className="special" />
    </form>
  </ContactFormWrapper>
);

ContactForm.defaultProps = {
  children: null,
};

ContactForm.propTypes = {
  children: PropTypes.node,
};

export { ContactForm };
