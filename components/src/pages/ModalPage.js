import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div>
            <Button onClick={toggleModal} primary rounded>Open Modal</Button>
            {showModal && <Modal/>}
        </div>
    )
}

export default ModalPage;
