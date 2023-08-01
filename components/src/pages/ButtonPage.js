import React from 'react';

// components 
import Button from '../components/Button';

// Icons from react-icons
import { GoFlame } from "react-icons/go";
import { GoAlert } from "react-icons/go";
import { GoThumbsup } from "react-icons/go";

function ButtonPage() {
    const handleOnClick = () => {
        console.log('Button clicked!');
    }
    return (
        <div>
            <div>
                <Button className="mb-5" primary outline rounded onClick={handleOnClick}>
                    Primary
                </Button>
            </div>
            <div>
                <Button className="mb-5" secondary outline rounded>
                    Secondary
                </Button>
            </div>
            <div>
                <Button className="mb-5" success outline rounded>
                    <GoThumbsup/>Success
                </Button>
            </div>
            <div>
                <Button className="mb-5" warning outline rounded>
                    <GoAlert/>Warning
                </Button>
            </div>
            <div>
                <Button className="mb-5" danger outline rounded>
                    <GoFlame/>Danger
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
