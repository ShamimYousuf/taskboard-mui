import {TaskCard} from '../TaskCard';
import React, {useState} from 'react';
import {useTasks} from '../../state/TasksProvider';
import {Typography, Grid, Paper} from "@mui/material";

export const TaskBoard = () => {

    const [draggedTaskId, setDraggedTaskID] = useState(null);

    const TO_DO = 'To Do';
    const IN_PROGRESS = 'In Progress';
    const DONE = 'Done';

    const statuses = [TO_DO, IN_PROGRESS, DONE];
    const {
        searchResults,
        setSearchResults
    } = useTasks();

    const handleDragStart = (id) => {
        setDraggedTaskID(id);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (status) => {
        if (draggedTaskId == null) return;

        setSearchResults((prevTasks) => prevTasks.map((task) => task.taskID === draggedTaskId ? {
            ...task,
            status
        } : task));
    };

    return (
        <Grid container direction="row" spacing={3} p={2} alignItems="stretch"
              style={{height: "100%", display: 'flex'}}>
            {
                statuses.map((status) => (
                    <Grid key={status} item my={4} xs={12} sm={6} md={4} onDragOver={handleDragOver}
                          onDrop={() => handleDrop(status)} elevation={3}
                          sx={{display: 'flex', alignItems: 'start', justifyContent: 'center'}}>

                        <Paper
                               elevation={24}
                               sx={{
                                   p: 2,
                                   height: "80vh",
                                   display: "flex",
                                   flexDirection: "column",
                                   bgcolor: "#A4BF5B",
                                   overflowY: "auto",
                               }}
                        >
                            <Typography
                                variant="h5">({status} {searchResults.filter((task) => task.status === status).length} Tasks)</Typography>
                            {searchResults.filter((task) => task.status === status)
                                .map((task) =>
                                    <TaskCard
                                        key={task.taskID}
                                        handleOnDragStart={() => handleDragStart(task.taskID)}
                                        task={task}
                                    />
                                )
                            }
                        </Paper>

                    </Grid>
                ))
            }
        </Grid>
    );
};