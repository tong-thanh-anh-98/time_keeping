// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ListMember from './components/ListMember';
import Contact from './components/Contact';
import CreateTimeCard from './components/CreateTimeCard';

function App() {

  return (
    <>
      <div className='bg-dark text-center py-2 shadow-lg'>
        <h1 className='text-white'>Time Keeping</h1>
      </div>

      <Routes>
        <Route path='/' element={ <ListMember />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/timecard' element={ <CreateTimeCard />} />
      </Routes>
    </>
  )
}

export default App
