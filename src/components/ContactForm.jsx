import React from 'react'
import {Form, Input, Label, Button} from 'reactstrap'

function ContactForm() {
  return (
    <Form name="contact" method="POST" data-netlify="true">
      <Label htmlFor="name">Name</Label>
      <Input name="name" type="text" />

      <Label htmlFor="email">Email</Label>
      <Input name="email" type="email" />

      <Label htmlFor="subject">Subject</Label>
      <Input name="subject" type="text" />

      <Label htmlFor="message">message</Label>
      <Input name="message" type="textarea" />

      <Button color="yellow" type="submit">
        Send
      </Button>
    </Form>
  )
}

export default ContactForm
