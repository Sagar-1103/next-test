import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args)=> fetch(...args).then((res)=>res.json());

const UserPage = ()=>{
    const  {data,error} = useSWR("https://dummyjson.com/users",fetcher);
    if (error) return <h1>Error Occured!</h1>;
    if (!data) return <h1>Loading......</h1>;

    return (
        <div>
            <h1>Users</h1>
            {   data &&
                data.users.map((user)=>(
                    <Link href={`/users/${user.id}`}  key={user.id}>
                        <div className="bg-pink-500 inline-block mx-6 my-1 p-1 rounded-lg">{user.firstName} {user.lastName}</div>
                        <br />
                        </Link>
                ))
            }
        </div>
    );
}

export default UserPage;