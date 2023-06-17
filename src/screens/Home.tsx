import { Button, Chart, Header, Select, Title, TotalInfo } from '@components'
import { InfoProps } from '@components/Info'
import { Data, fetchData } from '@utils/fakeDatas'
import { Center, HStack, ScrollView, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'

export function HomeScreen() {
	const [service, setService] = useState('')
	const [data, setData] = useState<Data | undefined>(undefined)

	const items = [
		{
			label: 'Hora em hora',
			value: 'hourly',
		},
		{
			label: 'Diário',
			value: 'daily',
		},
		{
			label: 'Por mês',
			value: 'monthly',
		},
		{
			label: 'Anual',
			value: 'yearly',
		},
	]

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

	function handleData() {
		if (service === 'hourly') setData(fetchData('hourly'))
		if (service === 'daily') setData(fetchData('daily'))
		if (service === 'monthly') setData(fetchData('monthly'))
		if (service === 'yearly') setData(fetchData('yearly'))
	}

	useEffect(() => handleData(), [service])

	return (
		<VStack flex={1} bg="gray.200">
			<Header />

			<Center px={4}>
				<Title title="Seu Dashboard" />

				<HStack
					bg="gray.100"
					p={6}
					alignItems="center"
					w="full"
					rounded="lg"
					shadow="2"
				>
					<Select value={service} setValue={setService} items={items} />

					<Button onPress={handleData} />
				</HStack>

				<TotalInfo data={infos} />

				{gData.length > 0 && (
					<HStack bg="gray.100" w="full" rounded="lg" shadow="2" pb={2}>
						{gData.length > 10 ? (
							<ScrollView horizontal showsHorizontalScrollIndicator={false}>
								<Chart expectedData={eData} generetedData={gData} />
							</ScrollView>
						) : (
							<Chart expectedData={eData} generetedData={gData} />
						)}
					</HStack>
				)}
			</Center>
		</VStack>
	)
}
