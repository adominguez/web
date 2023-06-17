'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation';
import { ROUTES } from '../constants/navigation'

const fetchPost = async (id) => {
  return fetch(`https://nuevaweb.porticosport.es/wp-json/wp/v2/posts/${id}`)
      .then(res => res.json())
}

export default async function Breadcrumb() {
  const { id } = useParams();
  let post = {};
  if (id) {
    post = await fetchPost(id)
  }
  return (
    <ul className='flex w-full gap-6 p-4 border-b border-r-gray-300 dark:border-r-neutral-700'>
      <li>
        <Link
          className='flex items-baseline gap-4 text-lg font-thin'
          href={ROUTES.find(item => item.label === 'Inicio')?.route}
        >
          <i className={`fi ${ROUTES.find(item => item.label === 'Inicio')?.icon }`} />
          <span>
            { ROUTES.find(item => item.label === 'Inicio')?.label }
          </span>
        </Link>
      </li>
      {
        id ? <li>
          <Link
            className='flex items-baseline gap-4 text-lg font-thin'
            href={ROUTES.find(item => item.label === 'Blog')?.route}
          >
            <i className={`fi ${ROUTES.find(item => item.label === 'Blog')?.icon }`} />
            <span>
              { ROUTES.find(item => item.label === 'Blog')?.label }
            </span>
          </Link>
        </li> : <li className='flex items-baseline gap-4 text-lg font-bold'>
          <i className={`fi ${ROUTES.find(item => item.label === 'Blog')?.icon }`} />
          {ROUTES.find(item => item.label === 'Blog')?.label}
        </li>
      }
      {
        post ? <li className='flex items-baseline gap-4 text-lg font-bold'>{post?.title?.rendered}</li> : null
      }
    </ul>
  )
}