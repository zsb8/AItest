import Part from './Part.js'
const Content = ({ course }) => {
    return (
      <div>
          {course.map(
            (cou,i)=>{return(
            <div key={i}>
              <h3>{cou.name}</h3>
              <Part parts={cou.parts}/>
            </div>
            )}
            )}


          
      </div>
    )
  }
  
  export default Content