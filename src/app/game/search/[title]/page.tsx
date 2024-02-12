import { GameProps } from "@/utils/types/game"
import Container from "@/components/container"
import SearchInput from "@/components/searchInput"
import GameCard from "@/components/gameCard"

const getGame = async (title: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    )
    return res.json()
  } catch (error) {
    return null
  }
}

const Search = async ({ params: { title } }: { params: { title: string } }) => {
  const gameSearch: GameProps[] = await getGame(title)

  return (
    <main className="w-full">
      <Container>
        <SearchInput />

        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja o que encontramos na nossa base:
        </h1>

        {!gameSearch && <p>Esse jogo não foi encontrado!</p>}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gameSearch && gameSearch.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </section>
      </Container>
    </main>
  )
}
export default Search
