'use client'
import { Home, FileClock, WalletCards, Settings } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function SideNav() {

  const menuList = [
    {
      name:'Home',
      icon:Home,
      path:'/dashboard'
    },
    {
      name:'History',
      icon:FileClock,
      path:'/dashboard/history'
    },
    {
      name:'Billing',
      icon:WalletCards,
      path:'/dashboard/billing'
    },
    {
      name:'Setting',
      icon:Settings,
      path:'/dashboard/setting'
    },
  ];

  const path = usePathname();
  useEffect(() => {

  },[]);

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={120} height={120} />
      </div>
      <hr className='my-6 border' />
      <div className="mt-3">
        {
          menuList.map((menu: any, index: number) => (
            <div key={index}
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer item-center ${path === menu.path && 'bg-primary text-white'}`}>
              <menu.icon className='h-6 w-6' />
              <h2 className='text-lg'>{menu.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SideNav
