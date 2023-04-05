import Link from 'next/link'
import {Menu} from './nav/Menu'

export default function Navbar() {
  return (
    <>
      <h1
        className="
        relative w-fit
        bg-fuchsia-500 p-2 px-4
        font-semibold
        text-white
      ">
        NAVBAR from MainLayout
      </h1>
      <ul className="hidden gap-2 underline sm:flex ">
        <li>
          <Link href="/">Index</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <Menu />
      </div>
    </>
  )
}
