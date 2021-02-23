import React from 'react'
import {Form, Input, Label, Button, FormGroup} from 'reactstrap'

function ContactForm() {
  return (
    <Form name="contact-form" method="post" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="contact-form" value="contact" />

      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input name="name" type="text" placeholder="Your name" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" placeholder="Your email" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="subject">Subject</Label>
        <Input name="subject" type="text" placeholder="Your subject" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <Input name="message" type="textarea" placeholder="Type your message here..." />
      </FormGroup>

      <Button color="submit" type="submit">
        Send
      </Button>
    </Form>
  )
}

export default ContactForm
