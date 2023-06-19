import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '@theme'
import { Center, Heading, Skeleton, Text, VStack } from 'native-base'

export type InfoProps = {
	type: string
	body: string
	heading: string
}

export function Info({ type, body, heading }: InfoProps) {
	return (
		<VStack w={40} bg="gray.100" py={4} rounded="lg" shadow="2" my={4} mr={5}>
			<Center>
				{type ? (
					<MaterialCommunityIcons
						name={
							type === 'kwh'
								? 'lightning-bolt-outline'
								: type === 'percentage'
								? 'percent'
								: type === 'trees'
								? 'tree'
								: 'molecule-co2'
						}
						size={32}
						color={theme.colors.primary}
					/>
				) : (
					<Skeleton w="10" h="6" m="1" rounded="md" />
				)}

				{body ? (
					<Text pt={1.5} color="gray.700" fontFamily="body">
						{body}
					</Text>
				) : (
					<Skeleton w="10" h="6" m="1" rounded="md" />
				)}

				{heading ? (
					<Heading pt={1.5} color="primary" fontFamily="heading">
						{heading}
					</Heading>
				) : (
					<Skeleton w="16" h="6" mt="2" rounded="md" />
				)}
			</Center>
		</VStack>
	)
}
