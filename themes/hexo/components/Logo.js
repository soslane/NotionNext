import { siteConfig } from '@/lib/config'
import Link from 'next/link'

const Logo = props => {
  return (
    <Link href='/' passHref legacyBehavior>
      <div className='flex justify-center items-center cursor-pointer space-y-3'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='https://img.myla.eu.org/api/file/ad9308e6b3653ffe18d1a.png' className='w-auto h-10'/>
        <div className='invisible font-medium text-lg p-1.5 rounded dark:border-white dark:text-white menu-link transform duration-200'> {siteConfig('TITLE') }</div>
      </div>
    </Link>
  )
}
export default Logo
