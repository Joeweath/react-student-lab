

const Student = (props) => {
  console.log(props.student, 'Inherited from parent component')
  return ( 
    <div>
      <h2>{props.student.name}</h2>
      <p>{props.student.bio}</p>
      {props.student.scores.map((score, idx) => (
       <div key={idx}>
         <p>{score.date}</p>
         <p>{score.score}</p>

       </div> 
      ))}
    </div>
    );
}

export default Student;