import logoImg from "../../../public/logo.svg"
import Image from "next/image"
import Link from "next/link"

import { LiaGamepadSolid } from "react-icons/lia"

const Header = () => {
  return (
    <header className="h-28 px-8">
      <div className="h-full relative max-w-screen-xl mx-auto flex justify-center sm:justify-between items-center">
        <nav className="flex justify-center items-center gap-4">
          <Link href="/">
            <Image
              src={logoImg}
              alt="Logo do site GameHub"
              quality={100}
              priority={true}
              className="w-full"
            />
          </Link>

          <Link href="/" className="links">Games</Link>

          <Link href="/profile" className="links">Perfil</Link>
        </nav>

        <div className="hidden sm:flex rounded-full p-1 shadow-md shadow-slate-500 transition-all duration-300 hover:scale-110">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#3865d7" />
          </Link>
        </div>

        <div className="line"></div>
      </div>
    </header>
  )
}

export default Header
