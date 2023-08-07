import { GithubFilled, GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import Head from "next/head";
import React from "react";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="This is a pc builder app by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center h-screen">
        <div className="w-[20%] h-[400px] m-auto f shadow border ">
          <h1 className="text-3xl text-center text-blue-400 font-medium mt-3">
            Login System
          </h1>
          <div className="text-center">
            <div className="p-3 rounded-sm border mx-4 mt-20 flex items-center space-x-2 justify-center cursor-pointer" onClick={() => signIn("github",{callbackUrl:`${process.env.LOCALHOST_URL}/pc-builder`})}>
              <GithubFilled/>
              <h3>Login with Github</h3>
            </div>
            <div className="p-3 rounded-sm border mx-4 mt-4 flex items-center space-x-2 justify-center cursor-pointer" onClick={() => signIn("google",{callbackUrl:`${process.env.LOCALHOST_URL}/pc-builder`})}>
              <GoogleOutlined />
              <h3>Login with Google</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
