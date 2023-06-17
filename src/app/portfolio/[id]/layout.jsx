export default async function ProjectLayout({children}) {
    return (
        <div className="flex flex-col w-full h-screen md:flex-row">
            <article className="flex-1 p-4 text-lg font-thin md:h-full md:overflow-auto">
                {children}
            </article>
        </div>
    )
}