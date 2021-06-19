import React, { useState, useEffect } from 'react'

const SectionCards = () => {
    const [personagens, setPersonagem] = useState([])
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(() => {
        fetch('http://hp-api.herokuapp.com/api/characters')
            .then(resposta => resposta.json())
            .then(dados => setPersonagem(dados))
    }, [])

    useEffect(() => {
        setFiltroPersonagem(
            personagens.filter(personagem => {
                return personagem.name.includes(busca)
            })
        )
    }, [busca, personagens])

    return (
        <>
            <input placeholder="Digite um personagem" onChange={e => { setBusca(e.target.value) }} />
            {filtroPersonagem.map(personagem => (
                <div key={personagem.id}>
                    <p>{personagem.name}</p>
                    <img src={personagem.image} alt={personagem.name} />
                </div>

            ))}
        </>
    )
}

export default SectionCards