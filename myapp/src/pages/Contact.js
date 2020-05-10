import React from "react";

const Contact = () => {
    return(
        <div class="container">

            <section class="main-section">
                <h2 id="contact">Contact</h2>
                <hr/>
                <form id="contact-form">
                    <ul>
                        <li>
                            <label for="name">Name</label>
                            <input type="text" placeholder="John Doe" id="name"/>
                        </li>
                        <li>
                            <label for="email">Email</label>
                            <input type="text"placeholder="example@mail.com"id="email"/>
                        </li>
                        <li>
                            <label for="message">Message</label>
                            <textarea name="message" id="message"></textarea>
                            
                        </li>
                    </ul>
                    <input type="submit" id="submit"/>
                </form>

            </section>

        </div>
    )
}

export default Contact;