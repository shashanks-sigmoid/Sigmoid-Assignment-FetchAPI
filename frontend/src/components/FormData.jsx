import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import '../stylesheets/formData.css'
import axios from 'axios';

function FormData(props) {

    const REACT_APP_PRIVATE_KEY = props.keyId
    const SHEET_ID = "1Q-B2btkfurhJUQriLhJaagiDJB5foh-hUjToX21yWXE"
    const [studentName, setStudentName] = useState("")
    const [gender, setGender] = useState("")
    const [classLevel, setClassLevel] = useState("")
    const [homeState, setHomeState] = useState("")
    const [major, setMajor] = useState("")
    const [extracurricularActivity, setExtracurricularActivity] = useState("")

    const clearState = () => {
        setStudentName("")
        setGender("")
        setClassLevel("")
        setHomeState("")
        setMajor("")
        setExtracurricularActivity("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            'Student Name': studentName,
            'Gender': gender,
            'Class Level': classLevel,
            'Home State': homeState,
            'Major': major,
            'Extracurricular Activity': extracurricularActivity
        }

        // console.log([Object.values(data)])
        const body = JSON.stringify({ values: [Object.values(data)] })
        await axios
            .post(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A32:append?valueInputOption=RAW`,
                body, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${REACT_APP_PRIVATE_KEY}`,
                }
            })
            .then((res) => {
                console.log(res)
                clearState()
            })
            .catch((err) => {
                console.log(err)
            })
        // const k = JSON.stringify({ values: [Object.values(data)] })
        // const response = await fetch(
        //     `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A32:append?valueInputOption=RAW`,
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${REACT_APP_PRIVATE_KEY}`,
        //         },
        //         body: JSON.stringify({
        //             values: [Object.values(data)],
        //         }),
        //     }
        // )
        // const result = await response.json();

        // if (result.error) {
        //     console.error(result.error.message);
        // } else {
        //     console.log("Data added to Google Sheet successfully!");
        //     console.log(k)
        // }


    }

    return (
        <div>
            <h2>Google Sheet Form</h2>
            <FormControl className="form">
                <TextField
                    value={studentName}
                    variant="outlined"
                    onChange={e => setStudentName(e.target.value)}
                    type="text"
                    label="Student Name"
                    className='input-field'
                />
                <TextField
                    value={gender}
                    variant="outlined"
                    onChange={e => setGender(e.target.value)}
                    type="text"
                    label="Gender"
                    className='input-field'
                />
                <TextField
                    value={classLevel}
                    variant="outlined"
                    onChange={e => setClassLevel(e.target.value)}
                    type="text"
                    label="Class Level"
                    className='input-field'
                />
                <TextField
                    value={homeState}
                    variant="outlined"
                    onChange={e => setHomeState(e.target.value)}
                    type="text"
                    label="Home State"
                    className='input-field'
                />
                <TextField
                    value={major}
                    variant="outlined"
                    onChange={e => setMajor(e.target.value)}
                    type="text"
                    label="Major"
                    className='input-field'
                />
                <TextField
                    value={extracurricularActivity}
                    variant="outlined"
                    onChange={e => setExtracurricularActivity(e.target.value)}
                    type="text"
                    label="Extra-curricular Activity"
                    className='input-field'
                />
                <Button variant='contained' onClick={handleSubmit} size='medium' className='submit-button'>
                    Submit
                </Button>
            </FormControl>
        </div>
    )
}

export default FormData