import { useState } from 'react';
import TableOne from './pages/TableOne';
import TableTwo from './pages/TableTwo';
import TableThree from './pages/TableThree';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar/>
      <TableOne />
      <TableTwo/>
      <TableThree /> 
    </>
  )
}

export default App
