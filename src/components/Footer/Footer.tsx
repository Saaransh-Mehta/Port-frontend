const Footer = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col">
       <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
        <line x1="0" y1="1" x2="100" y2="1" stroke="black" strokeWidth="2" />
      </svg>
        <div className="flex mt-6 mb-2 justify-between items-center">
            <div className="footer-link">
                <ul className="flex flex-row gap-5">
                    <li className="outfit"><a href="https://github.com/Saaransh-Mehta" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a></li>
                    <li className="outfit"><a href="https://www.linkedin.com/in/saaransh-mehta-242876215/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                    <li className="outfit"><a href="https://www.instagram.com/saaransh.builds/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                </ul>
            </div>
            <div className="footer-email">
                <span className="outfit">saaransh1621m@gmail.com</span>
            </div>

        </div>
    </div>
  )
}

export default Footer
