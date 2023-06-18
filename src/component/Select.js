import React,{useState} from 'react'
const Select = () => {
  const [contry,setContry] = useState("")
    const countries = [

        {
          name:"India",
          state:["karnataka","bihar","rajsthan",""]
        },
        {
            name:"Pakistan",
            state:["karnataka","bihar","rajsthan","Lahore"]
          }
    ]
    const handleCountry = (e)=>{
      setContry(e.target.value)
    
    }

  return (
    <div style = {{display:"flex"}}>
   <div>
       <select value = {contry} onChange = {(e)=>{handleCountry(e)}}>
       <option>Please select country</option>
           {countries.length>0 && countries.map(
               (con)=>
           
           <option value = {con.name}>{con.name}</option>
           
           )
           
           }
       </select>
   </div>

   <div>
       <select >
       <option>Please select state</option>ß
           {countries.length>0 &&
            countries.find((con)=>con.name === contry)?.state.map(e=> <option key = {e} value = {e}>{e}</option>)
           }
       </select>
   </div>
    </div>
  )
}

export default Select