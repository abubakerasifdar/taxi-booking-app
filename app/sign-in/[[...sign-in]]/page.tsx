import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (<div className="h-screen flex flex-col justify-center items-center text-center">
    <SignIn />

  </div>)
}