import React from "react";
import './styles.scss'
import './index.scss';
import {Header} from "./components/Header";
import {TaskBoard} from "./components/TaskBoard";
import {TasksProvider} from "./state/TasksProvider";
import {Typography, Box} from "@mui/material";

import {useState, useEffect} from "react";

const App = () => {
    const [serverStatus, setServerStatus] = useState(null);

    useEffect(() => {
        const callHealthCheckApi = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/health/check')
                if (response.ok) {
                    setServerStatus('Server is Up')
                } else {
                    setServerStatus('Server is Down')
                }
            } catch (e) {
                setServerStatus('Server is Unreachable')
            }
        }
        callHealthCheckApi();

    }, [])


    const getClassName = (status) => {
        switch (status) {
            case 'Server is Up':
                return 'appStatus'
            case 'Server is Down':
                return 'appStatusDown'
            case 'Server is Unreachable':
                return 'appStatusDown'
        }
    }

    return <>
        <div className="appInfoContainer">
            <Typography variant="h3">Task Dashboard</Typography>

            <p className={getClassName(serverStatus)}>{serverStatus}</p>
        </div>

        <TasksProvider>
            <Box>
                <Header/>
                <div className="content">
                    <main className="main">
                        <TaskBoard/>
                    </main>
                </div>
            </Box>
        </TasksProvider>
    </>
}

export default App;

