import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-gray-800 ">
      <div className="z-20 w-full px-4 py-12 mx-auto font-thin text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl text-black dark:text-white sm:text-4xl">
          <span className="block">
            La página que buscas no existe
          </span>
          <span className="block text-indigo-500">
            Prueba a ir a otro sitio diferente
          </span>
        </h2>
        <p className="max-w-md mx-auto mt-4 text-xl text-gray-400">
          I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex mt-12 rounded-md shadow">
            <Link href="/" className="w-full px-6 py-4 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
              Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}