import { GameProps } from "@/utils/types/game"
import { redirect } from "next/navigation"
import Image from "next/image"
import React from "react"
import Container from "@/components/container"

const getGame = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`
    )
    return response.json()
  } catch (error) {
    throw new Error(`Error in -> ${error}`)
  }
}

const Game = async ({ params: { id } }: { params: { id: string } }) => {
  const game: GameProps = await getGame(id)

  if (!game) {
    redirect("/")
  }

  return (
    <main className="mt-10">
      <Container>
        <div className="bg-black border sm:h-96 h-80 relative">
          <Image
            alt={game.title}
            src={game.image_url}
            fill={true}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            quality={100}
            className="object-cover opacity-80"
          />
        </div>

        <h1 className="font-bold text-xl my-4">{game.title}</h1>
        <p>{game.description}</p>
      </Container>
    </main>
  )
}

export default Game
