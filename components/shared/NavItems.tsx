'use client';
import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = () => {
	const pathname = usePathname();
	return (
		<ul className='w-full md:flex-between md:flex-row flex flex-col gap-5 items-start'>
			{headerLinks.map(({ label, route }) => {
				const isActive = pathname === route;
				return (
					<Link
						href={route}
						key={route}
						className={`${
							isActive ? 'active-link' : ''
						} flex-center p-medium-16 whitespace-nowrap`}
					>
						{label}
					</Link>
				);
			})}
		</ul>
	);
};

export default NavItems;
