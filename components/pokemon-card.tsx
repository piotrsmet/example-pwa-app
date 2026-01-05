import Image from 'next/image'
import Link from 'next/link'
import { Pokemon } from '@/types/pokemon'

interface PokemonCardProps {
	pokemon: Pokemon
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
	return (
		<Link
			href={`/pokemon/${pokemon.id}`}
			className='flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 group'
		>
			<div className='relative w-32 h-32 mb-4 group-hover:scale-110 transition-transform duration-200'>
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
					alt={pokemon.name}
					fill
					className='object-contain'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					priority={pokemon.id <= 12}
				/>
			</div>
			<h2 className='text-xl font-semibold capitalize text-gray-800 dark:text-gray-100'>
				{pokemon.name}
			</h2>
			<p className='text-gray-500 dark:text-gray-400'>#{pokemon.id}</p>
		</Link>
	)
}
