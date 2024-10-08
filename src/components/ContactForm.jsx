import React from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import axios from 'axios'
import {
	ErrorMessage,
	CustomInput,
	CustomLabel,
	FormInputWrapper,
	CustomTextarea,
	SubmitButtonWrapper,
} from '../styles/styled-components'
import { Button } from 'reactstrap'

function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const encode = data => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&')
	}

	const onSubmit = async data => {
		axios('/', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			data: encode({ 'form-name': 'contact-form', ...data }),
		})
			.then(() => navigate('/success/'))
			.catch(error => alert(error))
	}

	return (
		<form
			onSubmit={e => handleSubmit(onSubmit)(e)}
			name="contact-form"
			method="post"
			data-netlify="true"
			netlify-honeypot="bot-field"
		>
			<input type="hidden" name="contact-form" value="contact" />

			<FormInputWrapper>
				<CustomLabel id="name-lbl" htmlFor="contact-name">
					Name
				</CustomLabel>
				<CustomInput
					id="contact-name"
					aria-labelledby="name-lbl"
					type="text"
					placeholder="Your name"
					autoComplete="on"
					$error={errors?.name}
					{...register('name', { required: 'Name is required' })}
				/>
				{errors?.name && <ErrorMessage>Name is required</ErrorMessage>}
			</FormInputWrapper>

			<FormInputWrapper>
				<CustomLabel id="email-lbl" htmlFor="contact-email">
					Email
				</CustomLabel>
				<CustomInput
					id="contact-email"
					aria-labelledby="email-lbl"
					type="email"
					placeholder="example@example.ca"
					autoComplete="on"
					$error={errors?.email}
					{...register('email', { required: 'Email is required' })}
				/>
				{errors?.email && <ErrorMessage>Email is required</ErrorMessage>}
			</FormInputWrapper>

			<FormInputWrapper>
				<CustomLabel id="message-lbl" htmlFor="contact-message">
					Message
				</CustomLabel>
				<CustomTextarea
					aria-labelledby="message-lbl"
					id="contact-message"
					type="textarea"
					placeholder="Type your message here..."
					$error={errors?.message}
					rows="6"
					maxLength={500}
					{...register('message', { required: 'Message is required' })}
				/>
				{errors?.message && <ErrorMessage>Message is required</ErrorMessage>}
			</FormInputWrapper>

			<SubmitButtonWrapper>
				<Button
					onClick={e => handleSubmit(onSubmit)(e)}
					color="submit"
					type="submit"
				>
					Send
				</Button>
			</SubmitButtonWrapper>
		</form>
	)
}

export default ContactForm
