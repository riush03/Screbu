import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from "zod";

const userSchema = z.object({
  email: z.string().min(1,"Email required").email('Invalid Email'),
  username: z.string().min(1,"Username is required").max(100),
  password: z.string().min(1,"Password is required").min(8,"Must have 8 characters")
});

export async function POST(req:Request){
  try{
    const body = await req.json();
    const {email, username,password} = userSchema.parse(body);

    //check if email already exists
    const existingUserEmail = await prisma.user.findUnique({
      where: {email: email}
    });
    if(existingUserEmail){
      return NextResponse.json({error: "Email already exists"}, {status: 400});
    }

    //check existing username
    const existingUsername = await prisma.user.findUnique({
      where: {username: username}
    });
    if(existingUsername){
      return NextResponse.json({error: "Username already exists"}, {status: 400});
    }

    //store new user data to the database
    const hashPassword = await hash(password,10);
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashPassword
      }
    });

    const {password: newUserPassword, ...rest} = newUser;

    return NextResponse.json({user: rest,message:"User Signed Up Successdully"},{status:201});
  } catch (error){
    return NextResponse.json({error: "Internal Server Error"}, {status: 500});
  }
}