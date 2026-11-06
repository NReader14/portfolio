import '../styles/Hero.css'

function Home() {
    return (
        <>
            <div className="hero">
                <h1 className="name">NATHAN READER</h1>

                <div className="hero_aboutme">
                    <h4>ABOUT THE SITE</h4>
                    <ul>
                        <li>The <strong>projects</strong> page covers my programming work, the skills involved and my role in each.</li>
                        <li>The <strong>about</strong> page covers a detailed explanation of my education, experience and more.</li>
                        <li>Contact me through the information at <strong>CONTACT</strong>: email, phone number and more.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home