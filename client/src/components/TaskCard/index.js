import React from 'react';

import {Card, CardContent, Typography, Avatar} from "@mui/material"


export const TaskCard = ({task, handleOnDragStart}) => (
    <Card
        sx={{width: '100%', maxWidth: 360, boxShadow: 3, border:0.5}}
        key={task.taskID} draggable onDragStart={handleOnDragStart}>
        <CardContent>
            <Avatar>{task.assignee[0]}</Avatar>
            <Typography variant="body2" fontWeight="bold">{task.taskID}</Typography>
            <Typography variant="h6" fontWeight="bold">{task.summary}</Typography>
            <Typography variant="body2">{task.epic}</Typography>
            <Typography variant="subtitle2">{task.priority}</Typography>
            <Typography variant="body1" mt={1}>{task.assignee}</Typography>
            <Typography variant="body1">{task.status}</Typography>
        </CardContent>
    </Card>
);