import '../styles/Hero.css'

function Home() {
    return (
        <>
            <div id='hero'>
                <h3 id="name">NATHAN READER</h3>

                <div id='hero_aboutme'>
                    {/* <h4>LEARN ABOUT ME</h4>
                    <p> This site covers my <strong>projects</strong>, about my <strong>experience and education</strong> and my knowledge of things Computing, IT and Computer Science.
                    </p> */}
                    <h4>ABOUT THE SITE</h4>
                    <ul>
                       <li>The <strong>projects</strong> page covers my programming work, the skills involved and my role in each.</li>
                        <li>The <strong>about</strong> page covers a detailed explaination on my education, experience and more.</li>
                        <li>Contact me through the information at <strong>CONTACT</strong>. Email, Phone Number and More!</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home