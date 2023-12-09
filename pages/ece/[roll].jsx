import { useRouter } from "next/router";

const Students = (props)=>{
    console.log(props.data);
    return (
        <div>
            <h1>ECE Students</h1>
            {/* {
                props.data.map((student)=>(
                    <div key={student.roll_no}>
                        <li>{student.roll_no} : {student.name}</li>
                    </div>
                ))
            } */}
        </div>
    );
}

export const getStaticPaths = async()=>{
    const data = await (await fetch("https://ece-7b7q.onrender.com/all")).json();
    const rolls = data.map((user)=>user.roll_no);

    return {
        paths: rolls.map((roll_no)=> ({params:{roll_no:`${roll_no}`}})),
        fallback:false
    }
}

export const getStaticProps = async(context)=>{
    const router = useRouter();
    const data =await (await fetch(`https://ece-7b7q.onrender.com/${context.params.roll}`)).json();
    return {
        props:{
            data,
        },
    }
}
export default Students;