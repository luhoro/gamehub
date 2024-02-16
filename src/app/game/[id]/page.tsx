import { GameProps } from "@/utils/types/game"
import { redirect } from "next/navigation"
import Image from "next/image"
import React from "react"
import Container from "@/components/container"
import Label from "./components/label"
import GameCard from "@/components/gameCard"

const getGame = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 60 } }
    )
    return response.json()
  } catch (error) {
    throw new Error(`Error in -> ${error}`)
  }
}

const getDailyGame = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    )
    return response.json()
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

const Game = async ({ params: { id } }: { params: { id: string } }) => {
  const game: GameProps = await getGame(id)
  if (!game) {
    redirect("/")
  }

  const dailyGame: GameProps = await getDailyGame()

  return (
    <main className="mt-10">
      <Container>
        <div className="bg-black border sm:h-96 h-80 relative rounded-lg">
          <Image
            alt={game.title}
            src={game.image_url}
            fill={true}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            quality={100}
            className="object-cover opacity-80 rounded-lg"
          />
        </div>

        <h1 className="font-bold text-xl my-4">{game.title}</h1>
        <p>{game.description}</p>

        <h2 className="text-lg font-bold mt-8 mb-3">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {game.categories.map(item => (
            <Label key={item} name={item} />
          ))}
        </div>

        <h2 className="text-lg font-bold mt-8 mb-3">Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {game.platforms.map(item => (
            <Label key={item} name={item} />
          ))}
        </div>

        <div className="mt-10 py-2 px-4 font-medium border border-main-blue rounded-md w-fit cursor-default">
          <p><strong className="">Data de lançamento:</strong> {game.release}</p>
        </div>

        <h2 className="text-lg font-bold mt-14 mb-3">Jogo recomendado</h2>
        <div className="sm:max-w-[520px] bg-white rounded-md">
          <GameCard game={dailyGame} />
        </div>
      </Container>
    </main>
  )
}

export default Game
