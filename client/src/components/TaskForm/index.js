import React, {useRef, useState} from 'react';
import Button from '@mui/material/Button';
import {Typography} from "@mui/material";

export const TaskForm = () => {
    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current?.showModal();
    };

    const closeModal = () => {
        modalRef.current?.close();
    };

    const [formData, setFormData] = useState({
        title: '',
        epic: '',
        priority: '',
        assignee: '',
        status: '',
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'title is required';
        }

        if (!formData.epic.trim()) {
            newErrors.epic = 'epic is required';
        }

        if (!formData.assignee.trim()) {
            newErrors.assignee = 'assignee is required';
        }

        if (!formData.priority.trim()) {
            newErrors.priority = 'priority is required';
        }

        if (!formData.status.trim()) {
            newErrors.status = 'status is required';
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

                console.log('Success');

            } catch (e) {
                console.log('Network error', e);
            }


            console.log('Form submitted successfully', formData);
            alert('Form submitted successfully');

            setFormData({
                title: '',
                epic: '',
                priority: '',
                status: '',
                assignee: ''
            });

            closeModal();
        }


        // create new TaskID - check last taskID from db and create new one.
    };

    return <>
        <Button variant="contained" id="openModel" onClick={openModal}>Create</Button>

        <dialog id="modal" ref={modalRef} className='modalBox'>
            <div className="createFormHeader">
                <Button variant="contained" id="closeModal" color="secondary" onClick={closeModal}>X</Button>
                <Typography variant="h5">Create Task</Typography>
            </div>

            <form className='creationForm' onSubmit={handleSubmit} noValidate>

                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    {errors.title && <p style={{color: 'red'}}>{errors.title}</p>}
                </div>

                <div>
                    <label htmlFor="epic">Epic:</label>
                    <select
                        name="epic"
                        id="epic"
                        onChange={handleChange}
                    >
                        <option value=""></option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    {errors.epic && <p style={{color: 'red'}}>{errors.epic}</p>}
                </div>

                <div>
                    <label htmlFor="priority">Priority:</label>
                    <select
                        name="priority"
                        id="priority"
                        onChange={handleChange}
                    >
                        <option value=""></option>
                        <option value="P0">Urgent (P0)</option>
                        <option value="P1">High (P1)</option>
                        <option value="P2">Medium (P2)</option>
                        <option value="P3">Low (P3)</option>
                    </select>
                    {errors.priority && <p style={{color: 'red'}}>{errors.priority}</p>}
                </div>

                <div>
                    <label htmlFor="assignee">Assignee:</label>
                    <select
                        name="assignee"
                        id="assignee"
                        onChange={handleChange}
                    >
                        <option value=""></option>
                        <option value="ashok">Ashok</option>
                        <option value="sahu">Sahu</option>
                        <option value="saji">Saji</option>
                        <option value="faizal">Faizal</option>
                    </select>
                    {errors.assignee && <p style={{color: 'red'}}>{errors.assignee}</p>}
                </div>

                <div>
                    <label htmlFor="status">Status:</label>
                    <select
                        name="status"
                        id="status"
                        onChange={handleChange}
                    >
                        <option value=""></option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                    {errors.status && <p style={{color: 'red'}}>{errors.status}</p>}
                </div>

                <button type='submit'>Create</button>
            </form>
        </dialog>
    </>;
};