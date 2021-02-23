import React, {useState} from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import {navigate} from 'gatsby'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import * as yup from 'yup'
import {Form, Input, Label, Button, FormGroup} from 'reactstrap'

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
    subject: '',
    message: '',
  })
  const {register, handleSubmit, errors} = useForm({resolver: yupResolver(schema)})

  const onNameChange = ({target}) => setFormValues((prevValues) => ({...prevValues, name: target.value}))
  const onEmailChange = ({target}) => setFormValues((prevValues) => ({...prevValues, email: target.value}))
  const onSubjectChange = ({target}) => setFormValues((prevValues) => ({...prevValues, subject: target.value}))
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
        <StyledInput
          name="name"
          value={formValues.name}
          type="text"
          placeholder="Your name"
          onChange={onNameChange}
          ref={register}
        />
        {errors.name && <ErrorMessage>Name is required</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <StyledInput
          name="email"
          value={formValues.email}
          type="email"
          placeholder="Your email"
          onChange={onEmailChange}
          ref={register}
        />
        {errors.email && <ErrorMessage>Email is required</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="subject">Subject</Label>
        <StyledInput
          name="subject"
          value={formValues.subject}
          type="text"
          placeholder="Your subject"
          onChange={onSubjectChange}
          ref={register}
        />
        {errors.subject && <ErrorMessage>Subject is required</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <StyledTextarea
          name="message"
          value={formValues.message}
          type="textarea"
          placeholder="Type your message here..."
          onChange={onMessageChange}
          ref={register}
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

const ErrorMessage = styled.div`
  color: #bf616a;
`
const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`
