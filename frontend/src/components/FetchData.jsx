import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import "../stylesheets/fetchData.css"
import FormData from './FormData';
//require("dotenv").config();

function FetchData(props) {

    const SHEET_ID = "1Q-B2btkfurhJUQriLhJaagiDJB5foh-hUjToX21yWXE"
    const REACT_APP_PRIVATE_KEY = props.keyId
    const [fetchData, setFetchData] = useState([])
    const [isLoad, setIsLoad] = useState(0)
    const [msg, setMsg] = useState("")

    useEffect(() => {
        getDataFromSheet();
        // eslint-disable-next-line
    }, [])

    const getDataFromSheet = async () => {

        await axios
            .get(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:F60`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${REACT_APP_PRIVATE_KEY}`,
                }
            })
            .then((result) => {
                setFetchData(result.data.values)
                setIsLoad(1)
            })
            .catch((err) => {
                console.log(err.message)
                setIsLoad(2)
                setMsg(err.message)
            })
    }

    return (
        <div>
            <h1>Google Sheet Fetch API</h1>
            <h3>{isLoad === 1 ? "Loaded Succesfully" : isLoad === 2 ? msg : "Loading Data ..."}</h3>
            <table className='table'>
                <tbody className='rows'>
                    {fetchData.map((rows, key) => {
                        if (key === 0)
                            return (
                                <tr key={key}>
                                    {rows.map((row, i) => {
                                        return <td className='header' key={i}>{row}</td>
                                    })}
                                </tr>
                            )
                        else
                            return (
                                <tr key={key}>
                                    {rows.map((row, i) => {
                                        return <td className='element' key={i}>{row}</td>
                                    })}
                                </tr>
                            )
                    })}
                </tbody>
            </table>
            <FormData keyId={REACT_APP_PRIVATE_KEY} len={fetchData.length} />
        </div>
    )
}

export default FetchData