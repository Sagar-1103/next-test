import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args)=> fetch(...args).then((res)=>res.json());

const User = ()=>{
    const router = useRouter();
    const {data,error} = useSWR(`https://dummyjson.com/users/${router.query.id}`,fetcher)
    if (error) return <h1>Error Occured!</h1>;
    if (!data) return <h1>Loading....</h1>;
    return (
        <div>
            {data && <ul>
                <li>Name : {data.id}</li>
                <li>Age : {data.firstName} {data.lastName}</li>
                <li>Gender : {data.gender}</li>
                <li>Email : {data.email}</li>
            </ul>}
        </div>
    );
}

export default User;