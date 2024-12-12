import React, { useState }  from 'react'

const Form = ()=>{
    const [name, setName]=useState('')
    const [age, setAge]=useState('')
    const [mes, setMs]=useState('')
   const handleChange1 =(e)=>{
        setName(e.target.value)
    }
    const handleChange2 =(e)=>{
        setAge(e.target.value)
    }
    const handleClick = (e)=>{
        e.preventDefault()
        if(age<17){
            setMs('hello '+ name+', you are too young')
        }else if (age>60) {
            setMs('hello '+ name+', you have passed the age limit ')
        } else {
            setMs('hello '+ name +', you are '+ age + ', therefore you are qualify to be registers'  )
        }
         
         setName('')
         setAge('')
         
    }
    return(
        <div>
            <form>
                <label>Name:</label><input name='name' onChange={handleChange1} value={name} type='text'/> <br/>
                <label>Age:</label><input name='name' onChange={handleChange2} value={age} type='number'/><br/>{  <p onClick={handleClick}>submit</p>}
                <p> {mes}</p>
            </form>
        </div>
    )
}

export default Form

