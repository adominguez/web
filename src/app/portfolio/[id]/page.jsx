import Image from "next/image";
import Head from "next/head";
import Modal from "../../components/Modal";

const fetchPost = (id) => {
    return fetch(`https://myblog-ar9m5tg6pv.live-website.com/wp-json/wp/v2/posts?slug=${id}`, {
        next: {
            revalidate: 60
        }
    }).then(res => res.json())
}

export default async function Project({params}) {
    const { id } = params
    const posts = await fetchPost(id)
    const post = posts?.[0]
    const markup = { __html: post?.content?.rendered };
    const { title: { rendered } = {}, images: {large}, yoast_head_json } = post || {};

    return (
        <>
            <Head>
                <title>{rendered}</title>
                <meta property="og:title" content={rendered} key="title" />
            </Head>
            {/* <div className="relative w-full h-44">
                <Image
                    src={large || '/default-image.png'}
                    alt={rendered}
                    fill
                    sizes="100vw"
                    className='object-cover'
                />
            </div> */}
            <h1 className="py-8 text-4xl font-light text-emerald-600">{rendered}</h1>
            <div className="blog-article" dangerouslySetInnerHTML={markup} />
            <Modal />
        </>
    )
}