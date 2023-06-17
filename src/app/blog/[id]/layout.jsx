const fetchComments = (id) => {
    return fetch(`https://myblog-ar9m5tg6pv.live-website.com/wp-json/wp/v2/comments?post=${id}`)
        .then(res => res.json())
}

export default async function postLayout({params, children}) {
    const {id} = params
    const comments = await fetchComments(id)
    return (
        <div className="flex flex-col w-full h-screen md:flex-row">
            <article className="flex-1 p-4 text-lg font-thin md:h-full md:overflow-auto">
                {children}
            </article>
            <div className="p-4 text-lg font-thin border-l md:h-full md:overflow-auto md:border-l-gray-300 md:dark:border-l-neutral-700 w-80">
                <h2 className="py-3 text-xl font-medium text-emerald-600">Comentarios</h2>
                {
                    comments?.length ?
                    <ul>
                        {comments.map(comment => {
                            const markup = { __html: comment?.content?.rendered };
                            return (<><li dangerouslySetInnerHTML={markup}></li><li dangerouslySetInnerHTML={markup}></li><li dangerouslySetInnerHTML={markup}></li><li dangerouslySetInnerHTML={markup}></li><li dangerouslySetInnerHTML={markup}></li><li dangerouslySetInnerHTML={markup}></li><li dangerouslySetInnerHTML={markup}></li><li dangerouslySetInnerHTML={markup}></li><li dangerouslySetInnerHTML={markup}></li><li dangerouslySetInnerHTML={markup}></li><li dangerouslySetInnerHTML={markup}></li></>)
                        })}
                    </ul>
                    : 'Todavía no hay comentarios'
                }
            </div>
        </div>
    )
}