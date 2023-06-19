export interface Data {
	data_type: DataType
	x_labels: string[]
	generation: number[]
	expected: number[]
	totals: Totals
}

export type DataType = 'hourly' | 'daily' | 'monthly' | 'yearly'

export interface Totals {
	kwh: number
	percentage: number
	trees: number
	co2: number
}
