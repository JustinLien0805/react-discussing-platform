import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const LoginBtn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut()} className="text-xl font-normal">
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()} className="font-normal text-xl">
        Sign in
      </button>
    </>
  );
};

export default LoginBtn;
