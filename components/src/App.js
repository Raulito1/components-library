import Route from './components/Route';

import AccordianPage from './pages/AccordianPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import Sidebar from './components/Sidebar';
import ModalPage from './pages/ModalPage';

function App() {
    return (
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <Sidebar />
            <div className='col-span-5'>
                <Route path="/dropdown">
                    <DropdownPage />
                </Route>
                <Route path="/">
                    <AccordianPage />
                </Route>
                <Route path="/button">
                    <ButtonPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
            </div>
        </div>
    )
}

export default App;