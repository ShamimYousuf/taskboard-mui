import React from 'react';
import logo from '../../images/flowerlogogrey.png';
import {SearchBox} from '../SearchBox';
import {TaskForm} from '../TaskForm';
import {AppBar, Toolbar, Box} from "@mui/material";


export const Header = () => {
    return <AppBar position="static">
        <Toolbar>
            <Box>
                <a href='/'>
                    <img className="logo" src={logo} alt="Crown Clean"/>
                </a>
            </Box>
            <TaskForm/>
            <SearchBox/>
        </Toolbar>
    </AppBar>
};