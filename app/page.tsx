import { getServerSession } from 'next-auth'
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