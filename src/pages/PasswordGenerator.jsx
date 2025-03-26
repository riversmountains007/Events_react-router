import React, { useCallback, useEffect, useState } from 'react'
import Dependents from '../components/Dependents'

function PasswordGenerator() {

    const [password,setPassword] = useState('')
    const [passwordLength,setPasswordLength] = useState(8)
    const [includeNumbers,setIncludeNumbers] = useState(false)
    const [includeSpecialChars,setIncludeSpecialChars] = useState(false)


   const generatePassword = useCallback(()=>{

    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let newPass = ''


    const getRandomChar = (charSet)=>{
        return charSet[ Math.floor(Math.random() *charSet.length) ]
    }

    if(includeNumbers){
        chars += numbers
        newPass += getRandomChar(numbers)
    }

    if(includeSpecialChars){
        chars += specialChars
        newPass += getRandomChar(specialChars)
    }

    console.log(passwordLength - newPass.length);
    
    const till = passwordLength - newPass.length

    for (let i=0;i<till;i++){
        newPass += getRandomChar(chars)
        console.log('running',i);
        
    }

    setPassword(newPass)
   },[passwordLength,includeNumbers,includeSpecialChars])



   useEffect(()=>{
    
    generatePassword()

   },[generatePassword])
  return (
   <>
   <input type="text"
   value={password}
   readOnly
   />
   <button
   onClick={()=> navigator.clipboard.writeText(password).then(()=>alert(`Password Copied : ${password}`))}
   >Copy</button>
   
   <br />
   
   <Dependents
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeSpecialChars={includeSpecialChars}
        setIncludeSpecialChars={setIncludeSpecialChars}
   />
   </>
  )
}

export default PasswordGenerator


        
