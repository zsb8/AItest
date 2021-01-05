const Numbers = ({ newPersons }) => {
    return (
        <ul>
        {newPersons.map((item)=>{
          return(<div key={item.name}>{item.name}: {item.number}</div>)
        }
          )
          }
        </ul>
    )
  }
  
  export default Numbers