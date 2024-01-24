'use client'
import Link from "next/link";
import { useState } from "react";
import { FaAlignLeft, FaXmark } from "react-icons/fa6";
import ScoialIcons from "./ScoialIcons";


function NavButton() {
    const [open, setOpen] = useState(false)

    return (
        <div className="md:hidden text-2xl">
            <button onClick={() => setOpen(!open)}>
                <FaAlignLeft />
            </button>
            <div>
                {(open) && (<div>
                    <div className="fixed grid grid-flow-row ps-8 items-center  bg-black/85 text-slate-500 w-[50%] gap-6 right-0 top-0 bottom-0 z-10">
                        <button className="absolute top-6 right-3 " onClick={() => setOpen(false)}>
                            <FaXmark />
                        </button>
                        <nav className="flex flex-col justify-center text-md">
                            <Link href="/">home</Link>
                            <Link href="/products">products</Link>
                            <Link href="/products">featurse</Link>
                            <Link href="/blogs">blogs</Link>
                            <Link href="/portfolio">portfoilo</Link>
                            <Link href="/contacts">contact us</Link>
                        </nav>
                        <div id="mob-icons" className="-rotate-90">
                            <ScoialIcons />
                        </div>
                    </div>
                </div>)}
            </div>
        </div >

    )
}

export default NavButton

