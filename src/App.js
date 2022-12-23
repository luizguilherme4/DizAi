import { BrowserRouter, Link } from 'react-router-dom';

import AppRoutes from './Routes';

import './styles/App.css';

export default function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <nav>
                    <Link to='/'>Meu feed</Link>
                    <Link to='/most-viewed'>Mais vistos</Link>
                </nav>
                <AppRoutes />
            </BrowserRouter>
        </div>
    )
}
