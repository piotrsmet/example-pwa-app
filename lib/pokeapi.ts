import { Pokemon, PokemonApiResponse, PokemonDetail } from '@/types/pokemon'

const POKEMON_API = 'https://pokeapi.co/api/v2'

export const GENERATIONS = [
	{ id: 1, name: 'Gen I', limit: 151, offset: 0 },
	{ id: 2, name: 'Gen II', limit: 100, offset: 151 },
	{ id: 3, name: 'Gen III', limit: 135, offset: 251 },
	{ id: 4, name: 'Gen IV', limit: 107, offset: 386 },
	{ id: 5, name: 'Gen V', limit: 156, offset: 493 },
	{ id: 6, name: 'Gen VI', limit: 72, offset: 649 },
	{ id: 7, name: 'Gen VII', limit: 88, offset: 721 },
	{ id: 8, name: 'Gen VIII', limit: 96, offset: 809 },
	{ id: 9, name: 'Gen IX', limit: 120, offset: 905 },
]

export async function getPokemonList(
	limit: number = 151,
	offset: number = 0
): Promise<Pokemon[]> {
	const res = await fetch(
		`${POKEMON_API}/pokemon?limit=${limit}&offset=${offset}`
	)

	if (!res.ok) {
		throw new Error('Failed to fetch pokemon list')
	}

	const data: PokemonApiResponse = await res.json()

	return data.results.map(p => {
		const id = parseInt(p.url.split('/').slice(-2, -1)[0])
		return {
			name: p.name,
			url: p.url,
			id,
		}
	})
}

export async function getPokemonDetail(id: string): Promise<PokemonDetail> {
	const res = await fetch(`${POKEMON_API}/pokemon/${id}`)

	if (!res.ok) {
		throw new Error(`Failed to fetch pokemon detail for id: ${id}`)
	}

	const data = await res.json()

	return {
		id: data.id,
		name: data.name,
		url: `${POKEMON_API}/pokemon/${data.id}/`,
		height: data.height,
		weight: data.weight,
		types: data.types,
		stats: data.stats,
		abilities: data.abilities,
	}
}
