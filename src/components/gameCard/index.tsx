import Link from "next/link"
import Image from "next/image"
import { BiRightArrowCircle } from "react-icons/bi"
import { GameProps } from "@/utils/types/game"

interface GameCardProps {
  game: GameProps
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link href={`/game/${game.id}`}>
      <section className="w-full bg rounded-lg p-4 mb-5 transition-all duration-300 hover:shadow-medium hover:bg-white">
        <div className="relative w-full h-56">
          <Image
            className="rounded-md object-cover "
            src={game.image_url}
            alt={game.title}
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          />
        </div>

        <div className="flex items-center mt-3 justify-between border-b border-main-blue">
          <p className="text-sm font-bold py-1 text-ellipsis truncate whitespace-nowrap overflow-hidden">
            {game.title}
          </p>
          <BiRightArrowCircle size={24} color="#3865d7" />
        </div>
      </section>
    </Link>
  )
}

export default GameCard
