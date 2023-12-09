
const UserPage = (props)=>{
    // console.log(props);
    return (
        <div>
            <h1>Users Page (SSG)</h1>
            {
                props.data.users.map(user=>
                    <div key={user.id}>
                    <li  className="bg-pink-500 inline-block mx-6 my-1 p-1 rounded-lg">{user.firstName} {user.lastName}</li>
                    <br />
                    </div>
                )
            }
        </div>
    );
}

export const getStaticProps = async()=>{
    const data = await (await fetch("https://dummyjson.com/users")).json();
    return {
        props:{
            data,
        },
    }
};

export default UserPage;