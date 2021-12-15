import React, { useState } from 'react';
import { Input, Button } from '@mui/material';
import './Header.scss';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');

    const onSearch = (e) => {
        setSearchInput(e.target.value);
        console.log('searchInput', searchInput)
    }

    return (
        <div className="container">
            <div className='left'>
                <span>LOGO</span>
                <Input type='text' placeholder='Search' onChange={onSearch} />
            </div>
            <div className='right'>
                <Button>
                    <AccountCircleIcon />
                </Button>
                <Button>
                    <ChatIcon />
                </Button>
            </div>
        </div>
    )  
}

export default Header;
