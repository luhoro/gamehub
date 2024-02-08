import Container from "@/components/container"
import { GameProps } from "@/utils/types/game"
import Image from "next/image"
import Link from "next/link"

import { BsArrowRightCircleFill } from "react-icons/bs"
import SearchInput from "@/components/searchInput"
import GameCard from "@/components/gameCard"

const getDailyGame = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    )
    return res.json()
  } catch (error) {
    throw new Error("Failed to fetch data")
  }
}

const getAllGames = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    })
    return res.json()
  } catch (error) {
    throw new Error("Failed to fetch data")
  }
}

export const Home = async () => {
  const dailyGame: GameProps = await getDailyGame()
  const allGames: GameProps[] = await getAllGames()

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-2xl mt-10 mb-5">
          Separamos um jogo exclusivo pra você
        </h1>

        <Link href={`/game/${dailyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="relative h-96 max-h-96 rounded-lg">
              <div className="absolute bottom-0 z-10 p-4 flex gap-4 items-center">
                <p className="font-bold text-xl text-white drop-shadow-intense">
                  {dailyGame.title}
                </p>
                <BsArrowRightCircleFill size={24} color="#ffffff" />
              </div>

              <Image
                src={dailyGame.image_url}
                alt={dailyGame.title}
                priority={true}
                quality={100}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                className="max-h-96 object-cover rounded lg opacity-60 hover:opacity-90 transition-all duration-200"
              />
            </div>
          </section>
        </Link>

        <SearchInput />

        <h2 className="text-xl font-bold text-center mt-10 mb-5">
          Jogos para conhecer
        </h2>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </section>
      </Container>
    </main>
  )
}

export default Home
