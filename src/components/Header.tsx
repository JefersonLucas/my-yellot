import userPhotoDefault from '@assets/userPhotoDefault.png'
import LogoSvg from '@assets/yellot-logo.svg'
import { Avatar, HStack } from 'native-base'

export function Header() {
	return (
		<HStack
			pt={12}
			px={4}
			pb={4}
			bg="gray.100"
			alignItems="center"
			shadow="2"
			justifyContent="space-between"
		>
			<LogoSvg />

			<Avatar source={userPhotoDefault} size="lg" rounded="full" />
		</HStack>
	)
}
