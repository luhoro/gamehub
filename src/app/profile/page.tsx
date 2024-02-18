import Container from "@/components/container"
import Image from "next/image"
import userImg from "/public/user.svg"
import { FaShareAlt } from "react-icons/fa"

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
            <button className="bg-white shadow-light hover:shadow-medium font-medium p-2 rounded-xl duration-200">
              Configurações
            </button>

            <button className="bg-white shadow-light hover:shadow-medium p-2 rounded-xl duration-200">
              <FaShareAlt size={24} color="" />
            </button>
          </div>

        </section>
      </Container>
    </main>
  )
}

export default Profile
