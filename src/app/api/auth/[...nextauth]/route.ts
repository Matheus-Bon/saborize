import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    trustHost: true,
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {

                } catch (error) {
                    console.error(error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    }
})

export { handler as GET, handler as POST }