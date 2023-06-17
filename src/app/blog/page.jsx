import ListsOfPosts from "../components/ListsOfPosts"

export default async function Blog() {
    return (
        <div className="p-4">
            <h1 className="py-3 text-2xl font-medium text-emerald-600">Blog</h1>
            <section>
                <ListsOfPosts />
            </section>
        </div>
    )
}