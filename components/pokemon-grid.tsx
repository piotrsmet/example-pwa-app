'use client'

import { useState } from 'react'
import { Pokemon } from '@/types/pokemon'
import { PokemonCard } from './pokemon-card'

interface PokemonGridProps {
	pokemonList: Pokemon[]
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
	const [search, setSearch] = useState('')

	const filteredPokemon = pokemonList.filter(p =>
		p.name.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div className='w-full max-w-5xl'>
			<div className='mb-8'>
				<input
					type='text'
					placeholder='Search Pokemon...'
					className='w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</div>

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{filteredPokemon.map(pokemon => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</div>

			{filteredPokemon.length === 0 && (
				<p className='text-center text-gray-500 mt-8'>
					No Pokemon found.
				</p>
			)}
		</div>
	)
}
