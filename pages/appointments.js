import AppointmentsMDX from '../content/appointments.mdx';
import EmailForm from '../components/EmailForm';
import React from 'react';
import { Section, SectionTitle, SectionBody, Paragraph } from '../components/AppStyles';
import Head from 'next/head';

class AppointmentComponent extends React.Component {
  state = {
    message: {
      name: '',
      phone: '',
      email: '',
      message: ''
    },
    emailStatus: 'not sent',
    sending: false
  };

  handleFormInput = event => {
    if (this.state.emailStatus !== 'not sent') this.setState({emailStatus: 'not sent'});
    let message = this.state.message;
    message[event.target.name] = event.target.value;
    this.setState({ message });
  }

  sendMail = event => {
    event.preventDefault();
    this.setState({sending: true});

    const url = 'https://script.google.com/macros/s/AKfycbw-xfaz8aNsqMiI5UzgoOG_4tTJjkTlj6XjmjAEJ7tIjVzf0S8/exec';

    // using Google Apps Script sendEmail to send the form data as an email.
    // trying $resource did not work, resulting in a cross-origin error. So this is using
    // the plain vanilla XHR
    const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = () => {
      // console.log( xhr.status )
      // console.log(xhr.responseText);
      if (xhr.status === 200) {
        this.setState({emailStatus: 'success', sending: false});
      } else {
        this.setState({emailStatus: 'failed', sending: false});
      }
    };
    // url encode form data for sending as post data
    const encoded = Object.keys(this.state.message).map(k => {
      return encodeURIComponent(k) + '=' + encodeURIComponent(this.state.message[k]);
    }).join('&');
    xhr.send(encoded);
  }

  render() {
    return (
      <Section topcolor="logoGreen">
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/@material/button@4.0.0/dist/mdc.button.min.css"/>
          <link rel="stylesheet" href="https://unpkg.com/@material/textfield@4.0.0/dist/mdc.textfield.min.css"/>
        </Head>
        <SectionTitle>Appointments</SectionTitle>
        <SectionBody>
          <Paragraph>
            <AppointmentsMDX/>
          </Paragraph>
          {
            this.state.emailStatus === 'success'
              ? (
                <Paragraph css={{fontWeight: '500'}}>
                  Message sent successfully!<br/>
                  A confirmation was sent to you at {this.state.message.email}. <br/>
                  We will respond to your message soon. Thank you.
                </Paragraph>
              )
              : (
                <React.Fragment>
                  {this.state.emailStatus === 'failed' &&
                    (
                      <Paragraph>
                        Uh oh, there was a problem sending the message. Please check your network connetion and try again.
                      </Paragraph>
                    )
                  }
                  <EmailForm message={this.state.message} handleInput={this.handleFormInput} onSubmit={this.sendMail} sending={this.state.sending}/>
                </React.Fragment>
              )
          }
        </SectionBody>
      </Section>
    );
  }
}

export default AppointmentComponent;
