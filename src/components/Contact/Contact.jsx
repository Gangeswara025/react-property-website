import React, { useState } from 'react'
import axios from 'axios'
import './Contact.css'

export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const [status, setStatus] = useState("")

    function handleForm(e) {
        e.preventDefault()

        setStatus("submitting")

        const payload = {
            Name: name,
            Email: email,
            Phone: phone,
            Message: message
        }

        axios.post(
            "https://69d128b190cd06523d5de739.mockapi.io/Login",
            payload
        )

            .then((res) => {
                console.log(res.data)

                setStatus("success")

                alert("Message sent successfully")

                setName("")
                setEmail("")
                setPhone("")
                setMessage("")
            })

            .catch((err) => {
                console.log(err)

                setStatus("error")

                alert("Something went wrong")
            })
    }

    return (
        <section className='contact-wrapper'>
            <div className='paddings innerWidth flexCenter contact-container'>
                <div className='flexColStart contact-left'>
                    <span className='orangeText'>
                        Our Contact Us
                    </span>
                    <span className='primaryText'>
                        Easy to contact us
                    </span>
                    <span className='secondaryText'>
                        We always ready to help by providing the best services for you.
                        We believe a good place to live can make your life better.
                    </span>
                    <form
                        className='contact-form'
                        onSubmit={handleForm}
                    >
                        <div className='form-group'>
                            <label>Name</label>
                            <input
                                type="text"
                                value={name}
                                placeholder='Enter your name'
                                required
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                placeholder='Enter your email'
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                value={phone}
                                placeholder='Enter your phone number'
                                onChange={(e) => {
                                    setPhone(e.target.value)
                                }}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Message</label>
                            <textarea
                                rows="5"
                                value={message}
                                placeholder='How can we help you?'
                                required
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}
                            />
                        </div>
                        <button
                            type='submit'
                            className='contact-btn'
                            disabled={status === "submitting"}
                        >
                            {
                                status === "submitting"
                                    ?
                                    "Sending..."
                                    :
                                    "Send Message"
                            }
                        </button>
                    </form>
                </div>

                <div className='contact-right'>
                    <div className='image-container'>
                        <img
                            src="/contact.png"
                            alt=""
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}