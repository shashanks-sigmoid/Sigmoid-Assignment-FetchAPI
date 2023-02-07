import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
//require("dotenv").config();

function FetchData() {

    const SHEET_ID = "1Q-B2btkfurhJUQriLhJaagiDJB5foh-hUjToX21yWXE"
    const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY
    const [fetchData, setFetchData] = useState([])

    useEffect(() => {
        getDataFromSheet();
        // eslint-disable-next-line
    }, [])

    const getDataFromSheet = () => {

        axios
            .get(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:F31`, {
                headers: {
                    // "Content-Type": "application/json",
                    Authorization: `Bearer ${PRIVATE_KEY}`,
                }
            })
            .then((result) => {
                console.log(result)
                setFetchData(result)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <h1>Google Sheet Fetch API</h1>
        </div>
    )
}

export default FetchData