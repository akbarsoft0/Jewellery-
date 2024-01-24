import Link from "next/link"

async function page() {

    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await res.json()
    console.log(data)

    return (
        <>
            <section>
                <div className="md:flex justify-between bg-gray-500 p-8 mb-4 rounded sticky top-20">
                    <input type="text" className="md:w-[40%] bg-slate-300 font-semibold capitalize mb-4 md:mb-0" />
                    <select name="categry" id="catagry" className="w-full md:w-60 p-4 uppercase bg-slate-400 rounded">
                        <option value="a">a</option>
                    </select>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data.slice(0, 9).map((e: any) => (
                        <article key={e.id} className="bg-gray-700 rounded p-4">
                            <h3 className="text-main text-lg uppercase">
                                <Link href={e.title}>
                                    {e.title}
                                </Link>
                            </h3>
                            <p className="">{e.body}</p>
                            <Link
                                href={e.title}
                                className="center w-28 h-10 text-black hover:text-black font-semibold bg-main hover:opacity-45 rounded-xl float-end active:scale-90"
                            >
                                read
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default page