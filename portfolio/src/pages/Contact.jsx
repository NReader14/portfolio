import ComingSoon from "../components/ComingSoon";
import ContactDetails from '../data/contact.js'
import '../styles/Contact.css'
function Contact() {
    return (
        <>
            <h1>CONTACT ME</h1>

            <div className="contact_box">
                <h3>{ContactDetails.name}</h3>
                <p>Email: <a href={`mailto:${ContactDetails.email}`} className="email_link">{ContactDetails.email}</a></p>
                <p>Phone: {ContactDetails.phone}</p>
                <p>Location: {ContactDetails.location}</p>
                <ul>
                    {ContactDetails.socialLinks.map((link) => (
                        <li key={link.url}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default Contact