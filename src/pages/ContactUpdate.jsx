import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { updateContact, contactsSelector } from "../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

function Form() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { id } = useParams();

    const contact = useSelector(state => contactsSelector.selectById(state, id))

    const [name, setName] = useState(contact.name)
    const [number, setNumber] = useState(contact.number)

    function handleSubmit(e) {
        e.preventDefault();

        if (name && number) {

            dispatch(updateContact({
                id: contact.id,
                changes: {
                    name,
                    number
                }
            }));

            navigate("/")

        } else {

            alert("İsim ve numara alanlarını doldurunuz!");
        }

    }

    return (
        <div>
            <h1 className="title">Update Contact</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name...' value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Phone number...' value={number} onChange={e => setNumber(e.target.value)} />

                <button type='submit'>Update</button>

            </form>
        </div>
    )
}

export default Form