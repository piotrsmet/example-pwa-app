import Image from 'next/image'
import Link from 'next/link'
import { getPokemonDetail } from '@/lib/pokeapi'

interface PageProps {
	params: Promise<{ id: string }>
}

export default async function PokemonDetail({ params }: PageProps) {
	const { id } = await params
	const pokemon = await getPokemonDetail(id)

	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900 p-8 flex flex-col items-center'>
			<div className='w-full max-w-3xl'>
				<Link
					href='/'
					className='inline-block mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
				>
					&larr; Back to Pokedex
				</Link>

				<div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden'>
					<div className='bg-blue-600 p-8 flex justify-center'>
						<div className='relative w-64 h-64'>
							<Image
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
								alt={pokemon.name}
								fill
								className='object-contain drop-shadow-lg'
								priority
							/>
						</div>
					</div>

					<div className='p-8'>
						<div className='flex justify-between items-center mb-6'>
							<h1 className='text-4xl font-bold capitalize text-gray-900 dark:text-white'>
								{pokemon.name}
							</h1>
							<span className='text-2xl font-mono text-gray-500 dark:text-gray-400'>
								#{pokemon.id.toString().padStart(3, '0')}
							</span>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
									Types
								</h2>
								<div className='flex gap-2 mb-6'>
									{pokemon.types.map(t => (
										<span
											key={t.type.name}
											className='px-4 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 capitalize'
										>
											{t.type.name}
										</span>
									))}
								</div>

								<h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
									Measurements
								</h2>
								<div className='grid grid-cols-2 gap-4 mb-6'>
									<div className='bg-gray-100 dark:bg-gray-700 p-4 rounded-lg'>
										<p className='text-sm text-gray-500 dark:text-gray-400'>
											Height
										</p>
										<p className='text-lg font-medium text-gray-900 dark:text-white'>
											{pokemon.height / 10} m
										</p>
									</div>
									<div className='bg-gray-100 dark:bg-gray-700 p-4 rounded-lg'>
										<p className='text-sm text-gray-500 dark:text-gray-400'>
											Weight
										</p>
										<p className='text-lg font-medium text-gray-900 dark:text-white'>
											{pokemon.weight / 10} kg
										</p>
									</div>
								</div>
							</div>

							<div>
								<h2 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>
									Base Stats
								</h2>
								<div className='space-y-3'>
									{pokemon.stats.map(s => (
										<div key={s.stat.name}>
											<div className='flex justify-between mb-1'>
												<span className='text-sm font-medium text-gray-700 dark:text-gray-300 capitalize'>
													{s.stat.name.replace(
														'-',
														' '
													)}
												</span>
												<span className='text-sm font-medium text-gray-900 dark:text-white'>
													{s.base_stat}
												</span>
											</div>
											<div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5'>
												<div
													className='bg-blue-600 h-2.5 rounded-full'
													style={{
														width: `${Math.min(
															s.base_stat,
															100
														)}%`,
													}}
												></div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
