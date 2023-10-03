import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenitcate'
import SignUpForm from './components/SignUpForms'

function App() {

  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  )
}

export default App
