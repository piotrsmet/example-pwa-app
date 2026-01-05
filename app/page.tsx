import { PokemonGrid } from '@/components/pokemon-grid'
import { GenerationSelector } from '@/components/generation-selector'
import { NotificationButton } from '@/components/notification-button'
import { getPokemonList, GENERATIONS } from '@/lib/pokeapi'

interface HomeProps {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({ searchParams }: HomeProps) {
	const params = await searchParams
	const genId = Number(params.gen) || 1
	const generation = GENERATIONS.find(g => g.id === genId) || GENERATIONS[0]

	const pokemonList = await getPokemonList(
		generation.limit,
		generation.offset
	)

	return (
		<main className='min-h-screen bg-gray-100 dark:bg-gray-900'>
			<div className='bg-red-600 pb-24 pt-12 px-4 shadow-lg relative overflow-hidden'>
				<div className='absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 pointer-events-none'></div>
				<div className='absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-10 -mt-10 pointer-events-none'></div>

				<div className='max-w-5xl mx-auto text-center relative z-10'>
					<h1 className='text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow-md'>
						Pokédex
					</h1>
					<p className='text-red-100 text-lg font-medium'>
						Select a generation to explore
					</p>
				</div>
			</div>

			<div className='max-w-6xl mx-auto px-4 -mt-12 relative z-20'>
				<div className='bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-8 border-t-8 border-red-500'>
					<GenerationSelector />
					<PokemonGrid pokemonList={pokemonList} />
				</div>
			</div>

			<NotificationButton />

			<footer className='text-center py-8 text-gray-500 text-sm'>
				Data provided by{' '}
				<a
					href='https://pokeapi.co'
					className='underline hover:text-red-600'
				>
					PokeAPI
				</a>
			</footer>
		</main>
	)
}
