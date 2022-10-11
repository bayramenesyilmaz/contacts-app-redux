import React from 'react'
import { Link } from "react-router-dom";

import { contactsSelector } from "../redux/contactsSlice";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, deleteAllContacts } from "../redux/contactsSlice";

function List() {
    const dispatch = useDispatch();

    const contacts = useSelector(contactsSelector.selectAll);
    const total = useSelector(contactsSelector.selectTotal);

    function handleDelete(id) {
        dispatch(deleteContact(id))
    }

    function handleDeleteAll() {
        dispatch(deleteAllContacts())
    }


    return (
        <ul className='contacts-ul'>
        
            {
                total > 0 && <button className='delete-all' onClick={handleDeleteAll}>DeleteAll</button>
            }

            {
                contacts.length < 1
                    ?
                    <li className='contact-li' >No registered person</li>
                    :
                    contacts.map(contact => {
                        return <li className='contact-li' key={contact.id}>

                            <span className='contact-name'>{contact.name}</span>
                            <span className='contact-number'>{contact.number}</span>

                            <div className='contact-settings'>
                                <Link to={`/update/${contact.id}`}>
                                    <i className="fa-solid fa-pen-to-square update-btn"></i>
                                </Link>
                                <i className="fa-solid fa-trash delete-btn" onClick={() => handleDelete(contact.id)}></i>
                            </div>

                        </li>
                    })
            }
        </ul>
    )
}

export default List