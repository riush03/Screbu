import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = { 
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
                return null
            }

            const existingUser = await prisma.user.findUnique({
                where: {
                    email: credentials?.email
                }
            });

            if(!existingUser) {
                return null
            }

            const passowrdMatch = await compare(credentials.password,existingUser.password);
            if(!passowrdMatch) {
                return null
            }

            return {
                id: existingUser.id.toString(),
                email: existingUser.email,
                username: existingUser.username
            }


          },
          
        })
      ],
      callbacks: {
        session: ({ session, token }) => {
          console.log("Session Callback", { session, token });
          return {
            ...session,
            user: {
              ...session.user,
              id: token.id,
              randomKey: token.randomKey,
            },
          };
        },
        jwt: ({ token, user }) => {
          console.log("JWT Callback", { token, user });
          if (user) {
            const u = user as unknown as any;
            return {
              ...token,
              id: u.id,
              randomKey: u.randomKey,
            };
          }
          return token;
        },
      },
}