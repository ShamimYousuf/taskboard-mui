import React from "react";


import './styles.scss'
import './index.scss';
import {Header} from "./components/Header";
import { TaskBoard } from "./components/TaskBoard";
import {TasksProvider} from "./state/TasksProvider";
import {SummaryWidget} from "./components/SummaryWidget";

import {useState, useEffect} from "react";

const App = () => {
    const [ serverStatus, setServerStatus ] = useState(null);

    useEffect( () => {
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
        <div className="appInfoContainer"><h1 className="appName">Task Dashboard</h1><p className={getClassName(serverStatus)}>{serverStatus}</p></div>
        <TasksProvider>
            <div className="dashboard">
                <Header/>
                <div className="content">
                <SummaryWidget/>
                    <main className="main">
                        <TaskBoard/>
                    </main>
                </div>
            </div>
        </TasksProvider>
    </>
}

export default App;

