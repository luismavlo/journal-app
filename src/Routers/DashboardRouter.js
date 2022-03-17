import React from 'react'
import JournalScreen from '../components/journal/JournalScreen'
import { Routes, Route } from "react-router-dom";

const DashboardRouter = () => {
  return (
       <Routes>
            <Route path='journal' element={<JournalScreen />}/>
            <Route path='/' element={<JournalScreen />} />
        </Routes> 
  )
}

export default DashboardRouter