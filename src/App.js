import { BrowserRouter, Link } from 'react-router-dom';

import AppRoutes from './Routes';

import './styles/App.css';

export default function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <nav>
                    {/* isso será convertido em uma tag a em um href */}
                    <Link to='/'>Meu feed</Link>
                    <Link to='/most-viewed'>Mais vistos</Link>
                </nav>
                {/* AppRoutes é onde definimos nossas rotas */}
                <AppRoutes />
            </BrowserRouter>
        </div>
    )
}
