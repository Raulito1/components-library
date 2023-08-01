import React from 'react';
import Button from './Button';

// Icons from react-icons
import { GoFlame } from "react-icons/go";
import { GoAlert } from "react-icons/go";
import { GoThumbsup } from "react-icons/go";

function App() {
    return (
        <div>
            <div>
                <Button className="mb-5" primary outline rounded>
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

export default App;
