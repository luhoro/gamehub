"use client"

import { FormEvent, useState } from "react"
import { FiSearch } from 'react-icons/fi'
import { useRouter } from "next/navigation"

const SearchInput = () => {
  const [input, setInput] = useState("")
  const router = useRouter()

  const handleSearch = (event: FormEvent) => {
    event.preventDefault()
    if (input === "") return
    router.push(`/game/search/${input}`)
  }

  return (
    <form onSubmit={handleSearch} 
      className="w-full bg-white my-5 p-2 flex gap-4 items-center justify-between"
    >
      <input 
        type="text" 
        placeholder="Procurando algum jogo?"
        value={input}
        onChange={event => setInput(event.target.value)}
        className="w-full outline-none focus:border-b border-blue-300"
      />

      <button type="submit">
        <FiSearch size={24} color="#3865d7" />
      </button>
    </form>
  )
}

export default SearchInput
