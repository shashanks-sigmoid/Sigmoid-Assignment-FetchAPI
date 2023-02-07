import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import "../stylesheets/fetchData.css"
//require("dotenv").config();

function FetchData() {

    const SHEET_ID = "1Q-B2btkfurhJUQriLhJaagiDJB5foh-hUjToX21yWXE"
    const PRIVATE_KEY = 'ya29.a0AVvZVsrlQpOlrp1dyMT-NZid4vB40gpJDWmdUTW_aI4RqlOgVFUkWkTZg9oF87wqkSF2SS7X7ErRfKsz2Nn5RLz2FnHnyujwCwP_9j3xf10spbBPLQr1o5vaFrCu5l8TJDwdOYGz1_CPEJmw3oPCKAJw6wjTaCgYKAZsSARISFQGbdwaIMP2wGL0kgUqgLlmwEqweRA0163'

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
                    Authorization: `Bearer ${PRIVATE_KEY}`,
                }
            })
            .then((result) => {
                setFetchData(result.data.values)
                console.log(fetchData)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <h1>Google Sheet Fetch API</h1>
            <table className='table'>
                <thead className='columns'>
                    <tr>
                        {fetchData[0]?.map((col, i) => {
                            return <th className='header' key={i}>{col}</th>
                        })}
                    </tr>
                </thead>
                <tbody className='rows'>
                    {fetchData.slice(1).map((rows, key) => {
                        return (
                            <tr key={key}>
                                {rows.map((row, i) => {
                                    return <td className='element' key={i}>{i == 2 ? row.slice(3) : row}</td>
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