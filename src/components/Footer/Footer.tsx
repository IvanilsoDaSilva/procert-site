const Footer = () => {
    return (
        <footer className="flex flex-wrap justify-between h-auto bg-red-primary text-white theme-padding">
            <div className="w-1/2 sm:w-1/4 text-center">
                <span className="font-medium">Nevegação</span>
                <ul className="font-light text-sm">
                    <li className="hover:underline"><a href="/">Incio</a></li>
                    <li className="hover:underline"><a href="/services">Serviços</a></li>
                    <li className="hover:underline"><a href="/about">Sobre</a></li>
                    <li className="hover:underline"><a href="/contact">Contato</a></li>
                </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 text-center">
                <span className="font-medium">Serviços</span>
                <ul className="font-light text-sm">
                    <li className="hover:underline"><a href="https://treinamentos.procertsst.online">Treinamentos</a></li>
                </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 text-center">
                <span className="font-medium">Contatos</span>
                <ul className="font-light text-sm">
                    <li className="hover:underline">Numero1</li>
                    <li className="hover:underline">Numero2</li>
                    <li className="hover:underline">Email1</li>
                    <li className="hover:underline">Email2</li>
                </ul>
            </div>
            <div className="w-1/2 sm:w-1/4 text-center">
                <span className="font-medium">Endreços</span>
                <ul className="font-light text-sm">
                    <li className="hover:underline"><a href="https://maps.app.goo.gl/m2ZXRT6R6WBTP7nU7">Sede</a></li>
                </ul>
            </div>
            <span className="text-[9px] font-light ml-auto">Copyright © Procert</span>
        </footer>
    )
}

export default Footer