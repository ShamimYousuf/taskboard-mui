import React, {useRef, useState} from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    DialogActions,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText
} from "@mui/material";

export const TaskForm = ({open, onClose}) => {

    const initialFormData = {
        title: '',
        epic: '',
        priority: '',
        assignee: '',
        status: '',
    };
    const initialErrors = {
        title: false,
        epic: false,
        priority: false,
        assignee: false,
        status: false,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        setErrors({
            ...errors,
            [name]: false
        })
    }



    const validateForm = () => {
        let newErrors = {};


        if (!formData.title) {
            newErrors.title = true
        }

        if (!formData.epic) {
            newErrors.epic = true
        }

        if (!formData.assignee) {
            newErrors.assignee = true
        }

        if (!formData.priority) {
            newErrors.priority = true
        }

        if (!formData.status) {
            newErrors.status = true
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (validateForm()) {

            try {

                const response = await fetch('http://localhost:5000/api/task/submit', {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            ...formData
                        }
                    ),
                    headers: {"Content-Type": "application/json"}
                })

                const result = response.json();

                if (!response.ok) {
                    console.log(result.message);
                    console.log('result: ', result);
                }

                console.log('Form submitted successfully', formData);
                alert('Form submitted successfully');

            } catch (e) {
                console.log('Network error', e);
                handleCloseDialog()
            }
        }
    };

    const handleOpenDialog = () => {
        setFormData(initialFormData);
        setErrors(initialErrors);
    };

    const handleCloseDialog = () => {
        onClose();
        handleOpenDialog();
    };

    return (
        <Dialog open={open} onClose={handleOpenDialog}>
            <DialogTitle>Create Task</DialogTitle>
            <DialogContent>
                <TextField
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    error={errors.title}
                    helperText={errors.title ? "Title is required" : ""}
                />

                <FormControl fullWidth margin="normal" error={errors.epic}>
                    <InputLabel id="select-label-epic">Epic</InputLabel>
                    <Select
                        labelId="select-label-epic"
                        name="epic"
                        value={formData.epic}
                        onChange={handleChange}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                    </Select>
                    {errors.epic && <FormHelperText>Epic is required</FormHelperText>}
                </FormControl>


                <FormControl fullWidth margin="normal" error={errors.assignee}>
                    <InputLabel id="select-label-assignee">Assignee</InputLabel>
                    <Select
                        labelId="select-label-assignee"
                        name="assignee"
                        value={formData.assignee}
                        onChange={handleChange}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="optionA">Option A</MenuItem>
                        <MenuItem value="optionB">Option B</MenuItem>
                    </Select>
                    {errors.assignee && <FormHelperText>Assignee is required</FormHelperText>}
                </FormControl>


                <FormControl fullWidth margin="normal" error={errors.priority}>
                    <InputLabel id="select-label-priority">Priority</InputLabel>
                    <Select
                        labelId="select-label-priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="optionA">Option A</MenuItem>
                    </Select>
                    {errors.priority && <FormHelperText>Priority is required</FormHelperText>}
                </FormControl>

                <FormControl fullWidth margin="normal" error={errors.status}>
                    <InputLabel id="select-label-status">Status</InputLabel>
                    <Select
                        labelId="select-label-status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        error={errors.status}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="optionA">Option A</MenuItem>
                    </Select>
                    {errors.assignee && <FormHelperText>Sttaus is required</FormHelperText>}
                </FormControl>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
                <Button onClick={handleSubmit} color="primary">Submit</Button>
            </DialogActions>
        </Dialog>
    );
}