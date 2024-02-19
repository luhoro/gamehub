import Container from "@/components/container"
import Image from "next/image"
import userImg from "/public/user.svg"
import { FaShareAlt } from "react-icons/fa"
import FavoriteCard from "./components/favoriteCard"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meu perfil | GameHub - O seu arsenal de jogos",
  description: "Perfil Maria Neves | GameHub - O seu arsenal de jogos"
}

const Profile = () => {
  return (
    <main className="">
      <Container>
        <section className="mt-12 mb-8 flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-3">
          <div className="flex items-center gap-4 text-lg flex-col sm:flex-row">
            <Image
              src={userImg}
              alt="Imagem pergil do usuário"
              className="rounded-full w-56 h-56 object-cover"
            />

            <h1 className="font-bold text-2xl">Maria Neves</h1>
          </div>

          <div className="flex gap-4 sm:self-start">
            <button className="bg-dark-gray text-white hover:opacity-80 font-medium p-2 rounded-lg duration-200">
              Configurações
            </button>

            <button className="bg-dark-gray hover:opacity-80 p-2 rounded-lg duration-200">
              <FaShareAlt size={24} color="#ffffff" />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <FavoriteCard />

          <FavoriteCard />

          <FavoriteCard />
        </section>
      </Container>
    </main>
  )
}

export default Profile
