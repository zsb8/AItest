import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import Country from './components/Country'
const App = () => {
  const [notes, setNotes] = useState([])
  const [newFilter,setNewFilter] = useState('搜啥')
  const [countries,setCountries] = useState([])  
  let a = {}
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  const handleFilter = (event) =>{
    event.preventDefault()
    setNewFilter(event.target.value)
    const filterCountry =notes.filter(
      (country)=>{
        const name=(country.name).toLowerCase()//转小写
        return(
          name.search(newFilter)!=-1 //用serach()来匹配，注意!=-1否则是反效果
        )
      }
      )
    setCountries(filterCountry)
  }
  const message = 'Too many matches, specify another filter.'
  console.log(countries)
  return(
    <div>
      find countries <input onChange={handleFilter} defaultValue={newFilter} /> <br/>
        { countries.length<20 ? 
        ( countries.length !=1 ? 
          countries.map(item=>{return(<div key={item.name}>{item.name}</div>) }) 
          :  <Country country={countries} />
          )
        : message
      }
    </div>
  )

}

export default App 
