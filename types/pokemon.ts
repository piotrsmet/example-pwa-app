export interface Pokemon {
	name: string
	url: string
	id: number
}

export interface PokemonApiResult {
	name: string
	url: string
}

export interface PokemonApiResponse {
	count: number
	next: string | null
	previous: string | null
	results: PokemonApiResult[]
}

export interface PokemonDetail extends Pokemon {
	height: number
	weight: number
	types: {
		slot: number
		type: {
			name: string
			url: string
		}
	}[]
	stats: {
		base_stat: number
		effort: number
		stat: {
			name: string
			url: string
		}
	}[]
	abilities: {
		ability: {
			name: string
			url: string
		}
		is_hidden: boolean
		slot: number
	}[]
}
