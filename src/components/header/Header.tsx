import Logo from "./../../assets/img/logo-compacto.png";

const Header = () => {
    return (
        <header className="flex h-32 bg-blue-secondary theme-padding">
            <img className="h-24 m-auto" src={Logo} alt="Logo da empresa" />
        </header>
    )
}

export default Header