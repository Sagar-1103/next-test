
const Students = (props)=>{
    return (
        <div>
            <h1>ECE Students</h1>
            {
                props.data.map((student)=>(
                    <div key={student.roll_no}>
                        <li>{student.roll_no} : {student.name}</li>
                    </div>
                ))
            }
        </div>
    );
}

export const getStaticProps = async()=>{
    const data =await (await fetch("https://ece-7b7q.onrender.com/all")).json();
    return {
        props:{
            data,
        },
    }
}
export default Students;