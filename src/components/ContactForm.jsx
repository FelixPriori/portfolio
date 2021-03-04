import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {navigate} from 'gatsby'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import * as yup from 'yup'
import {Form, Label, Input, Button, FormGroup} from 'reactstrap'
import {ErrorMessage} from '../styles/styled-components'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
})

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  })
  const {register, handleSubmit, errors} = useForm({resolver: yupResolver(schema), reValidateMode: 'onTouched'})

  const onNameChange = ({target}) => setFormValues((prevValues) => ({...prevValues, name: target.value}))
  const onEmailChange = ({target}) => setFormValues((prevValues) => ({...prevValues, email: target.value}))
  const onMessageChange = ({target}) => setFormValues((prevValues) => ({...prevValues, message: target.value}))

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const onSubmit = () => {
    axios('/', {
      method: 'post',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: encode({'form-name': 'contact-form', ...formValues}),
    })
      .then(() => navigate('/success/'))
      .catch((error) => alert(error))
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      name="contact-form"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="contact-form" value="contact" />

      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          value={formValues.name}
          type="text"
          placeholder="Your name"
          onChange={onNameChange}
          innerRef={register}
        />
        {errors.name && <ErrorMessage>Name is required</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          value={formValues.email}
          type="email"
          placeholder="Your email"
          onChange={onEmailChange}
          innerRef={register}
        />
        {errors.email && <ErrorMessage>Email is required</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <Input
          name="message"
          value={formValues.message}
          type="textarea"
          placeholder="Type your message here..."
          onChange={onMessageChange}
          innerRef={register}
        />
        {errors.message && <ErrorMessage>Message is required</ErrorMessage>}
      </FormGroup>

      <Button onClick={handleSubmit(onSubmit)} color="submit" type="submit">
        Send
      </Button>
    </Form>
  )
}

export default ContactForm
