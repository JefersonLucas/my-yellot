import { Center, FlatList, HStack, Text } from 'native-base'
import { Info, InfoProps } from './Info'

type TotalInfoProps = { data: InfoProps[] }

export function TotalInfo({ data }: TotalInfoProps) {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.type}
			renderItem={({ item }) => (
				<Info type={item.type} body={item.body} heading={item.heading} />
			)}
			horizontal
			showsHorizontalScrollIndicator={false}
			ListEmptyComponent={
				<HStack height="16" padding={2} my={4}>
					<Center>
						<Text pt={1.5} color="gray.700" fontFamily="body" fontSize="md">
							Escolha um tipo de serviço
						</Text>
					</Center>
				</HStack>
			}
		/>
	)
}
