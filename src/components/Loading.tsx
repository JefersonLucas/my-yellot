import LogoSvg from '@assets/yellot-logo.svg'
import { Center, Spinner, VStack } from 'native-base'

export function Loading() {
	return (
		<VStack flex={1} bg="gray.100">
			<Center flex={1}>
				<LogoSvg />
				<Spinner size={50} my={8} color="success" />
			</Center>
		</VStack>
	)
}
