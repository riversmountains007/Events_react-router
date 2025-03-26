import React from 'react'

const Dependents = React.memo( ({
        passwordLength,
        setPasswordLength,
        includeNumbers,
        setIncludeNumbers,
        includeSpecialChars,
        setIncludeSpecialChars
}) =>{

    console.log(typeof(passwordLength));
    console.log(includeNumbers);
    console.log(includeSpecialChars);
    
  return (
   
    <div className="dependents">
    
    <h2> Password Length </h2> : {passwordLength}
    <input type="range" 
    name="passwordlength" 
    value={passwordLength} 
    min = '8' max = '50' 
    onChange={(e)=>setPasswordLength(e.target.value)}

    />
    <input type="checkbox" name="numbers" 
    onChange={(e)=>setIncludeNumbers(e.target.checked)}
    checked ={includeNumbers}

    />Numbers
    <input type="checkbox" name="specialchar" 
    onChange={(e)=>setIncludeSpecialChars(e.target.checked)}
    checked ={includeSpecialChars}
    
    />Special-Characters
   </div>
    
  )
}

)
export default Dependents


        