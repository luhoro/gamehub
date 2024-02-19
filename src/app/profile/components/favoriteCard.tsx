"use client"

import React from "react"
import { FiEdit3, FiCheck } from "react-icons/fi"
import { useState } from "react"

const Favorites = () => {
  const [input, setInput] = useState("")
  const [showInput, setShowInput] = useState(false)
  const [nameGame, setNameGame] = useState("")

  const handleButton = () => {
    setShowInput(!showInput)

    if (input !== "") {
      setNameGame(input)
    }
    setInput("")
  }

  return (
    <div className=" flex flex-col justify-between flex-grow flex-wrap bg-white shadow-medium h-44 py-3 px-4 rounded-xl ">
      {showInput ? (
        <form className="flex items-center gap-3 border-b border-main-blue">
          <input
            type="text"
            value={input}
            onChange={event => setInput(event.target.value)}
            className="w-full px-1 pt-1 mb-1"
          />

          <button type="submit" onClick={handleButton} >
            <FiCheck size={24} color="#3865d7" />
          </button>
        </form>
      ) : (
        <button
          className="w-fit flex-start hover:scale-110 duration-200 transition-all"
          onClick={handleButton}
        >
          <FiEdit3 size={24} color="#3865d7" />
        </button>
      )}

      {nameGame ? (
        <div>
          <p className="font-medium">Jogo favorito</p>
          <p className="font-bold border-b border-main-blue">{nameGame}</p>
        </div>
      ) : (
        <p className="font-medium">Adicionar jogo</p>
      )}
    </div>
  )
}

export default Favorites
