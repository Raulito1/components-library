import Link from './components/Link';
import Route from './components/Route';
import AccordianPage from './pages/AccordianPage';
import DropdownPage from './pages/DropdownPage';

function App() {
    return (
        <div>
            <Link to="/accordian">Go To Accordian</Link>
            <Link to="/dropdown">Go To Dropdown</Link>
            <div>
                <Route path="/accordian">
                    <AccordianPage />
                </Route>
                <Route path="/dropdown">
                    <DropdownPage />
                </Route>
            </div>
        </div>
    )
}

export default App;