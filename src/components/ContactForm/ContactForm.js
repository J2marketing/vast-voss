import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactFormWrapper = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  padding: 0px;
`;

const ContactForm = ({ ...props }) => (
  <ContactFormWrapper {...props}>
    <form method="POST" action="/page-2" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <div className="field half first">
        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" />
        </label>
      </div>
      <div className="field half">
        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" />
        </label>
      </div>
      <div className="field">
        <label htmlFor="message">
          Message
          <textarea name="message" id="message" rows="6" />
        </label>
      </div>
      <input type="submit" value="Send Message" className="special" />
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
