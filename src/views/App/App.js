import React, { useEffect, useState } from 'react'
import './App.css'
import { phonebook } from "./../../data/phonebook"
import Contactcard from "../../component/Contactcards/Contactcard";

function App() {
  const [contacts, setContacts] = useState(phonebook);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filtercontacts = phonebook.filter((contact) => {
      const name = contact.name.toLowerCase();
      const mobile = contact.mobile.toString();

      const query = searchTerm.toLowerCase();

      return (name.includes(query) || mobile.includes(query))
    })
    setContacts(filtercontacts);
  }, [searchTerm])

  return (
    <>
      <div className='text-center'>
        <h1 className='text-center'>MYCONTACT</h1>
        <input type='search'
          placeholder='search'
          className='search'
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />

        <div >
          {contacts.map((contact, index) => {
            const { name, mobile } = contact;
            return <Contactcard key={index} name={name} mobile={mobile} />
          })}

        </div>
      </div>
    </>

  )
}

export default App;

