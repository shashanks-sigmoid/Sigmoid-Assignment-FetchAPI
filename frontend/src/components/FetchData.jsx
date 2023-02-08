import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import "../stylesheets/fetchData.css"
//require("dotenv").config();

function FetchData(props) {

    const SHEET_ID = "1Q-B2btkfurhJUQriLhJaagiDJB5foh-hUjToX21yWXE"
    const REACT_APP_PRIVATE_KEY = props.keyId
    const [fetchData, setFetchData] = useState([])

    useEffect(() => {
        getDataFromSheet();
        // eslint-disable-next-line
    }, [])

    const getDataFromSheet = () => {

        axios
            .get(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:F31`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${REACT_APP_PRIVATE_KEY}`,
                }
            })
            .then((result) => {
                setFetchData(result.data.values)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <h1>Google Sheet Fetch API</h1>
            <table className='table'>
                <tbody className='rows'>
                    {fetchData.map((rows, key) => {
                        if (key === 0)
                            return (
                                <tr key={key}>
                                    {rows.map((row, i) => {
                                        return <td className='header' key={i}>{i === 2 ? row.slice(3) : row}</td>
                                    })}
                                </tr>
                            )
                        else
                            return (
                                <tr key={key}>
                                    {rows.map((row, i) => {
                                        return <td className='element' key={i}>{i === 2 ? row.slice(3) : row}</td>
                                    })}
                                </tr>
                            )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FetchData