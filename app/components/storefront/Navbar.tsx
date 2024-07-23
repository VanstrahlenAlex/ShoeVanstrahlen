import Link from 'next/link'
import React from 'react'
import { NavbarLinks } from './NavbarLinks'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { ShoppingBag } from 'lucide-react';
import UserDropdown from './UserDropdown';
import { Button } from '@/components/ui/button';

export default async function Navbar() {
	const { getUser } = getKindeServerSession();
	const user = await getUser();
  return (
	<nav className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-5 flex items-center justify-between'>
		<div className='flex items-center justify-between'>
			<Link href={"/"}>
				<h1 className='text-black font-bold text-xl lg:text-3xl'>
					Shoe<span className='text-primary'>Vanstrahlen</span>
				</h1>
			</Link>
			<NavbarLinks />
		</div>
		<div className='flex items-center'>
			{user ? (
				<>
					<Link href={"/bag"} className='group p-2 flex items-center mr-2'>
						<ShoppingBag className='w-6 h-6 text-gray-500 group-hover:text-gray-500' />
						<span className='ml-2 text-sm font-medium text-gray-700 hover:text-gray-800'>5</span>
					</Link>
					<UserDropdown 
						email={user.email as string} 
						name={user.given_name as string} 
						userImage={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`} />
				</>
			):(
				<>
					<div className='hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2'>
						<Button>Sign In</Button>
					</div>
				</>
			)}
		</div>
	</nav>
  )
}
