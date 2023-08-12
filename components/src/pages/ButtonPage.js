import React from 'react';

// components 
import Button from '../components/Button';

// Icons from react-icons
import { GoAlert, GoFlame, GoThumbsup } from 'react-icons/go';

function ButtonPage() {
    const handleOnClick = () => {
        console.log('Button clicked!');
    }
    return (
        <div className='flex space-x-10'>
            <div>
                <div>
                    <Button className="mb-5" primary rounded outline onClick={handleOnClick}>
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
            {/* Second Column */}
            <div>
                <div>
                    <Button className="mb-5" primary rounded onClick={handleOnClick}>
                        Primary
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" secondary rounded>
                        Secondary
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" success rounded>
                        <GoThumbsup/>Success
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" warning rounded>
                        <GoAlert/>Warning
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" danger rounded>
                        <GoFlame/>Danger
                    </Button>
                </div>
            </div>
            {/* Third Column */}
            <div>
                <div>
                    <Button className="mb-5" primary outline onClick={handleOnClick}>
                        Primary
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" secondary outline>
                        Secondary
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" success outline>
                        <GoThumbsup/>Success
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" warning outline>
                        <GoAlert/>Warning
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" danger outline>
                        <GoFlame/>Danger
                    </Button>
                </div>
            </div>
             {/* Fourth Column */}
            <div>
                <div>
                    <Button className="mb-5" primary onClick={handleOnClick}>
                        Primary
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" secondary>
                        Secondary
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" success>
                        <GoThumbsup/>Success
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" warning>
                        <GoAlert/>Warning
                    </Button>
                </div>
                <div>
                    <Button className="mb-5" danger>
                        <GoFlame/>Danger
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ButtonPage;
