import { Chart, Header, Select, Title, TotalInfo } from '@components'
import { Data } from '@interfaces/Data'
import { api } from '@services/api'
import { AppError } from '@utils/AppError'
import { formatedData } from '@utils/formatedData'
import { Center, HStack, ScrollView, VStack, useToast } from 'native-base'
import React, { useEffect, useState } from 'react'

export function HomeScreen() {
	const [service, setService] = useState('')
	const [data, setData] = useState<Data | undefined>(undefined)
	const [loading, setLoading] = useState(false)

	const toast = useToast()

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

	async function handleFetchData() {
		try {
			setLoading(true)

			if (service) {
				const { data } = await api.get(`/test-2023?dataType=${service}`)

				setData(data.data)
			}

			setLoading(false)
		} catch (error) {
			const isAppError = error instanceof AppError

			const title = isAppError
				? error.message
				: 'Não foi possível acessar seus dados. Tente novamente mais tarde'

			toast.show({
				title,
				placement: 'top',
				bgColor: 'red.500',
			})
		} finally {
			setLoading(false)
		}
	}

	const { infos, eData, gData } = formatedData({ data, service })

	useEffect(() => {
		handleFetchData()
	}, [service])

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
					<Select
						value={service}
						setValue={setService}
						items={items}
						disabled={loading}
					/>
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
