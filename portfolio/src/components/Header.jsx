import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const links = ['Home', 'Projects', 'About', 'Contact']

function Header({ onNavigate, currentPage, theme, setTheme }) {
    return (
        <header>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link}>
                            <button
                                className={currentPage === link ? 'active' : ''}
                                aria-current={currentPage === link ? 'page' : undefined}
                                onClick={() => onNavigate(link)}
                            >
                                {link}
                            </button>
                        </li>
                    ))}

                    <button className='theme_selector' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
                    </button>

                </ul>


            </nav>
        </header>
    )

}

export default Header