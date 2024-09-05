import GithubSignInButton from '@/app/components/GithubSignInButton'
import GoogleSignInButton from '@/app/components/GoogleSignInButton'
import { authOptions } from '@/app/utils/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'


type Props = {}

const SignUp = async (props: Props) => {
  const session = await getServerSession(authOptions);
  if(session){
    return redirect('/home')
  }
  return (
    <div className=' mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
      <form method='post' action='/api/auth/signin'>
        <h1 className=' text-white text-3xl font-semibold'>Sign Up</h1>
        <div className=' space-y-4 mt-5'>
          <Input type='email' name='email' placeholder='Email' className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block' />
          <Button className=' w-full bg-[#e50914] font-semibold' variant="destructive">Sign Up</Button>
        </div>
      </form>
      <div className=' text-gray-500 mt-2 text-sm'>Already have an account? <Link className=' text-white hover:underline' href="/login">Log in now!</Link></div>

      <div className=' flex w-full justify-center items-center gap-x-4 mt-6'>
      <GithubSignInButton />
      <GoogleSignInButton />
      </div>
    </div>
  )
}

export default SignUp