import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession,signIn,signOut } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const session = useSession();
  console.log(session);

  if (!session.data) {
    return (
    <button onClick={signIn} className="bg-pink-500 inline-block mx-6 my-1 p-1 rounded-lg">Login</button>
    );
  }
  return (
    <div>
      <h1 className='text-4xl'>Hello {session?.data?.user?.name}</h1>
      <button onClick={signOut} className="bg-pink-500 inline-block mx-6 my-1 p-1 rounded-lg">Logout</button>
    </div>
  )
}
