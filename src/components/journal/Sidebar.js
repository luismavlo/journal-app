import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogOut } from '../../redux/actions/auth';
import { startNewNote } from '../../redux/actions/notes';
import JournalEntries from './JournalEntries'

const Sidebar = () => {

    const { name } = useSelector( state => state.auth );


    const dispatch = useDispatch();

    const handleLogOut = () =>{
        dispatch( startLogOut() )
    }

    const handleAddNew = () =>{
        dispatch( startNewNote() );
    }

  return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5'>
                    <i className='fa fa-moon'></i>
                    <span> { name } </span>
                </h3>

                <button className='btn' onClick={handleLogOut}>
                    Logout
                </button>
            </div>
            <div 
                className='journal__new-entry'
                onClick={ handleAddNew }
            >
                <i className='fa fa-calendar-plus fa-5x'></i>
                <p className='mt-5'>
                    New entry
                </p>
            </div>

            <JournalEntries />
        </aside>
  )
}

export default Sidebar