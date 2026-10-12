const links = ['Home', 'Projects', 'About', 'Contact']

function Header({onNavigate, currentPage}) {
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
            </ul>
        </nav>
    </header>
    )
  
}

export default Header