import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers:[
        GithubProvider({
            clientId:'177cc232624462603b6b',
            clientSecret:'668161daed28a650b291324c395b28d090e31c9b'
        })
    ]
}

export default NextAuth(authOptions);