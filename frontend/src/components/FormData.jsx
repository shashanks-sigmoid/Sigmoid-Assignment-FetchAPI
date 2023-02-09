import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../stylesheets/formData.css'
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function FormData(props) {
    const { SHEET_ID, REACT_APP_PRIVATE_KEY,
        formField, setFormField, isRefress,
        setIsRefress, length } = props;


    const [open, setOpen] = useState(false)

    const handleOpen = (() => {
        setOpen(true)
    })

    const handleClose = (() => {
        setOpen(false)
    })

    const handleFormField = (e) => {
        e.persist();
        setFormField((formField) => ({
            ...formField,
            [e.target.name]: e.target.value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log([Object.values(formField)])
        const body = JSON.stringify({ values: [Object.values(formField)] })
        await axios
            .post(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A${length + 1}:append?valueInputOption=RAW`,
                body, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${REACT_APP_PRIVATE_KEY}`,
                }
            })
            .then((res) => {
                console.log(res)
                setFormField({
                    "Student Name": "",
                    "Gender": "",
                    "Class Level": "",
                    "Home State": "",
                    "Major": "",
                    "Extracurricular Activity": "",
                })
                setIsRefress(!isRefress)
                handleOpen()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <hr className='hr-line' />
            <h2>Google Sheet Form</h2>
            <FormControl className="form">
                <TextField
                    value={formField["Student Name"]}
                    variant="outlined"
                    onChange={handleFormField}
                    type="text"
                    name='Student Name'
                    label="Student Name"
                    className='input-field'
                />
                <TextField
                    value={formField["Gender"]}
                    variant="outlined"
                    onChange={handleFormField}
                    type="text"
                    name='Gender'
                    label="Gender"
                    className='input-field'
                />
                <TextField
                    value={formField["Class Level"]}
                    variant="outlined"
                    onChange={handleFormField}
                    type="text"
                    name='Class Level'
                    label="Class Level"
                    className='input-field'
                />
                <TextField
                    value={formField["Home State"]}
                    variant="outlined"
                    onChange={handleFormField}
                    type="text"
                    name='Home State'
                    label="Home State"
                    className='input-field'
                />
                <TextField
                    value={formField["Major"]}
                    variant="outlined"
                    onChange={handleFormField}
                    type="text"
                    name='Major'
                    label="Major"
                    className='input-field'
                />
                <TextField
                    value={formField["Extracurricular Activity"]}
                    variant="outlined"
                    onChange={handleFormField}
                    type="text"
                    name='Extracurricular Activity'
                    label="Extra-curricular Activity"
                    className='input-field'
                />
                <Button variant='contained' onClick={handleSubmit} size='medium' className='submit-button'>
                    Submit
                </Button>
            </FormControl>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Form Submitted Successfully !!
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default FormData