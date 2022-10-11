import React, { useState } from 'react'
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../redux/contactsSlice";
import { useDispatch } from "react-redux";

function Form() {
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        if (name && number) {

            dispatch(addContact({ id: nanoid(), name: name, number: number }));

            setName("");
            setNumber("");

        } else {

            alert("İsim ve numara alanlarını doldurunuz!");
        }

    }

    return (
        <div>
        
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name...' value={name} onChange={e => setName(e.target.value)} />

                <input type="text" placeholder='Phone number...' value={number} onChange={e => setNumber(e.target.value)} />

                <button type='submit'>Add</button>
                
            </form>
        </div>
    )
}

export default Form