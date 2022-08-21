import { Home } from '../pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Pokemon } from '../pages/pokemon'

function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:pokemonName' element={<Pokemon />} />
            </Routes>
        </Router>
    )
}

export default MainRoutes
