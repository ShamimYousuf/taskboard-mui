import React, {useState} from 'react';
import logo from '../../images/flowerlogogrey.png';
import {SearchBox} from '../SearchBox';
import {TaskForm} from '../TaskForm';
import {AppBar, Button, Toolbar, Box} from "@mui/material";


export const Header = () => {

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    }

    const handleCloseDialog = () => {
        setDialogOpen(false);
    }

    return <AppBar position="static">
        <Toolbar>
            <Box>
                <a href='/'>
                    <img className="logo" src={logo} alt="Crown Clean"/>
                </a>
            </Box>
            <Button onClick={handleOpenDialog} variant="contained">Create</Button>
            <TaskForm open={dialogOpen} onClose={handleCloseDialog}></TaskForm>
            <SearchBox/>
        </Toolbar>
    </AppBar>
};