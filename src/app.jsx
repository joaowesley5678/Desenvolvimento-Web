import { useEffect, useState } from 'react'
import { alunos } from './data'

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
	    <nav className="bg-[#bdac7f]" id="cabecalho">
            <div className="flex">
                <div className="flex">
                    <button onClick={toggleMenu} type="button">
                        <img src="" alt="menu"/>
                    </button>
                    {isOpen && (
                        <ul>
                          <li><a href="#">Categoria 1</a></li>
                          <li><a href="#">Categoria 2</a></li>
                          <li><a href="#">Categoria 3</a></li>
                          <li><a href="#">Categoria 4</a></li>
                          <li><a href="#">Categoria 5</a></li>
                        </ul>
					)}
                </div>
					<a href="#"><img src="" alt="logo"/></a>
              <div className="flex grow">
                <form>
                  <input/>
                  <button><img alt="lupa"/></button>
                </form>
              </div>
              <div className="flex grow-0">
                <a href="#">
                  <img alt="sacola"/>
                </a>
                <a href="#">
                  <img alt="login"/>
                    </a>
                </div>
            </div>
        </nav>
	)
}

export default App
