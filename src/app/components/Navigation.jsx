import Link from 'next/link'
import Image from 'next/image'
import { ROUTES } from '../constants/navigation'

export default function Navigation() {
    return (
        <nav className='absolute flex flex-col w-12 h-screen border-r md:w-60 md:relative border-r-gray-300 dark:border-r-neutral-700'>
            <Link
                className='flex justify-center w-full p-4'
                href={ROUTES.find((item) => item.label === 'Inicio').route}
            >
                <Image
                    className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert hidden md:block'
                    src='/next.svg'
                    alt='Next.js Logo'
                    width={180}
                    height={37}
                    priority
                />
            </Link>
            <Image
                className='self-center hidden md:block'
                src='/alberto-dominguez.png'
                alt='Next.js Logo'
                width={213}
                height={234}
                priority
            />
            <ul className='overflow-x-hidden overflow-y-auto'>
                {ROUTES.map(({ route, icon, label }) => (
                    <li key={route}>
                        <Link
                            className='flex items-baseline w-full gap-4 p-4 text-lg font-thin transition-all border-b group border-b-gray-300 dark:border-b-neutral-700 hover:bg-gray-100 hover:dark:bg-neutral-800/30 hover:gap-6'
                            href={route}
                        >
                            <i className={`fi ${icon}`} />
                            <span className='hidden md:block'>
                                {label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center gap-4">Social icons</div>
        </nav>
    )
}