const TopNavBar = () => {
    return (
        <nav className="bg-blue-primary theme-padding">
            <ul className="flex space-x-12 font-medium text-white">
                <li><a className="hover:underline" href="/">Início</a></li>
                <li><a className="hover:underline" href="/services">Serviços</a></li>
                <li><a className="hover:underline" href="/about">Sobre</a></li>
                <li><a className="hover:underline" href="/contact">Contato</a></li>
            </ul>

            
        </nav>
    )
}

export default TopNavBar