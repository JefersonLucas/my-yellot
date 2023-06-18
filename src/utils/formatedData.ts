import { InfoProps } from '@components'
import { Data } from '@interfaces/Data'

type Props = {
	data: Data | undefined
	service: string
}

export function formatedData({ data, service }: Props) {
	const infoValues: number[] | [] = data ? Object.values(data.totals) : []
	const infoKeys: string[] | [] = data ? Object.keys(data.totals) : []
	const labels: string[] | [] = data ? data.x_labels : []
	const generated = data ? data.generation : []
	const expected = data ? data.expected : []

	const infos: InfoProps[] = infoKeys.map((item, index) => {
		return {
			type: item,
			body:
				item === 'kwh'
					? 'Total de energia'
					: item === 'percentage'
					? 'Percentual'
					: item === 'trees'
					? 'Árvores cultivadas'
					: 'Carbono evitado',
			heading:
				item && item === 'kwh'
					? `${Number(infoValues[index]).toLocaleString('pt-BR')} kwh`
					: item && item === 'percentage'
					? `${Number(infoValues[index]).toLocaleString('pt-BR')}%`
					: item && item === 'trees'
					? `${Number(infoValues[index]).toLocaleString('pt-BR')}`
					: item && item === 'co2'
					? `${Number(infoValues[index]).toLocaleString('pt-BR')} kg`
					: '',
		}
	})

	const gData = labels.map((item, index) => {
		if (service === 'daily') {
			return {
				x: item.slice(8, 10),
				y: generated[index],
			}
		}
		if (service === 'hourly') {
			return {
				x: `${item.slice(0, 2)}h`,
				y: generated[index],
			}
		}
		if (service === 'monthly') {
			return {
				x: item.slice(0, 7).replace('-', '/'),
				y: generated[index],
			}
		}
		if (service === 'yearly') {
			return {
				x: item.slice(0, 4),
				y: generated[index],
			}
		}
	})

	const eData = labels.map((item, index) => {
		if (service === 'daily') {
			return {
				x: item.slice(8, 10),
				y: expected[index],
			}
		}
		if (service === 'hourly') {
			return {
				x: `${item.slice(0, 2)}h`,
				y: expected[0],
			}
		}
		if (service === 'monthly') {
			return {
				x: item.slice(0, 7).replace('-', '/'),
				y: expected[index] ? expected[index] : 0,
			}
		}
		if (service === 'yearly') {
			return {
				x: item.slice(0, 4),
				y: expected[index],
			}
		}
	})

	return { infos, gData, eData }
}
