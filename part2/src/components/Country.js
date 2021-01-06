import Weather from './Weather.js'
const Country = ({ country }) => {
    let api_key = process.env.REACT_APP_API_KEY //unususal this time
    api_key = ''
    let url='http://api.weatherstack.com/current?access_key='+api_key+'&query='
    return (
        <div>
            {
            country.map(
                (i,key1)=>{
                    return (
                        <div key={key1}>
                            <h2>{i.name}</h2>
                            alpha2Code: {i.alpha2Code}<br/>
                            capital: {i.capital}<br/>
                            population: {i.population}<br/>
language : <ul>{i.languages.map((item,key2)=>{return(<li key={key2}>{item.name}</li>) }) }</ul>
                            <img width='100px' src={i.flag} />
                            <h2><pre>Weather in {i.capital}</pre></h2>
                            <Weather url={url+i.capital}/>
                        </div>
                    )
                }
            )
            }
        </div>
    )
  }
  
  export default Country