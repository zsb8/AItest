const Part = ({ parts }) => {
    return (
      <div>
          <ul>
            {parts.map((i)=>{
                return(
                    <li key={i.id}>{i.name}: {i.exercises}</li>
                )
            })}
          </ul>

      </div>
    )
  }
  
  export default Part