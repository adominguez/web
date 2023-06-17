import Link from "next/link";
import Image from "next/image";

const fetchPosts = async () => {
    return fetch('https://myblog-ar9m5tg6pv.live-website.com/wp-json/wp/v2/posts?categories=1', {
        next: {
            revalidate: 60
        }
    }).then(res => res.json())
}

export default async function ListsOfPosts() {
    const posts = await fetchPosts()
    return (<div className="grid grid-cols-1 gap-2 font-thin sm:grid-cols-2 md:grid-cols-3">{
        posts?.length && posts.map(post => {
            const markup = { __html: post?.excerpt?.rendered };
            const { title: { rendered }, images: { medium }, slug } = post || {};
            return (
                <Link key={slug} href={`blog/${slug}`}>
                    <article className="border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 hover:dark:bg-neutral-800/30" key={post.id}>
                        <div className="relative w-full h-44">
                            <Image
                                src={medium || '/default-image.png'}
                                alt={rendered}
                                fill
                                sizes="100vw"
                                className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert object-cover'
                                priority
                            />
                        </div>
                        <h2 className="m-2 text-xl font-medium text-emerald-600">{rendered}</h2>
                        <div className="m-2" dangerouslySetInnerHTML={markup} />
                    </article>
                </Link>
            )
        })
    }</div>)
}