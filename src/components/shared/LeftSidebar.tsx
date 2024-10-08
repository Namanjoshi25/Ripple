"use client"
import React from 'react'
import {sidebarLinks} from '@/constants/index'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { SignedIn, SignOutButton, useAuth } from '@clerk/clerk-react'
function LeftSidebar() {
  const { userId } = useAuth();
  const router = useRouter()
  const pathname = usePathname()
  return (
    <section className='section-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link)=>{
          const isActive =(pathname.includes(link.route ) && link.route.length >1 || pathname === link.route)
          
          if (link.route === "/profile") link.route = `${link.route}/${userId}`;
 return (
 <Link href={link.route}
 key={link.label}
 className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>
  <Image 
  src={link.imgURL}
  alt={link.label}
  height={24}
  width={24}
  />
  <p className=' text-light-1 max-lg:hidden'>{link.label}</p>
 </Link>
        )}
      )}

      </div>
      <div className=' mt-10 px-6'>
      <SignedIn>
                    <SignOutButton redirectUrl='/sign-in'>
                        <div className=' gap-4 p-4 flex cursor-pointer'>
  <Image
  src="/assets/logout.svg"
  alt='logout'
  height={24}
  width={24}

/>
<p className=' text-light-2 max-lg:hidden'>Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
      </div>
    </section>
  )
}

export default LeftSidebar