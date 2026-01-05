'use client'

import { GENERATIONS } from '@/lib/pokeapi'
import { useRouter, useSearchParams } from 'next/navigation'

export function GenerationSelector() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const currentGen = Number(searchParams.get('gen')) || 1

	const handleGenChange = (genId: number) => {
		const params = new URLSearchParams(searchParams)
		params.set('gen', genId.toString())
		router.push(`/?${params.toString()}`)
	}

	return (
		<div className='flex flex-wrap justify-center gap-2 mb-8'>
			{GENERATIONS.map(gen => (
				<button
					key={gen.id}
					onClick={() => handleGenChange(gen.id)}
					className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
						currentGen === gen.id
							? 'bg-red-600 text-white shadow-lg scale-105 ring-2 ring-red-400'
							: 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
					}`}
				>
					{gen.name}
				</button>
			))}
		</div>
	)
}
