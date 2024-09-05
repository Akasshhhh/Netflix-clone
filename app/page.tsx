import { Button } from '@/components/ui/button'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from './utils/auth';
import { redirect } from 'next/navigation';


const page = async () => {
  const session = await getServerSession(authOptions);
  
  if(!session) {
    return redirect('/login')
  }else{
    return redirect('/home')
  }
}

export default page