import { FontAwesome } from '@expo/vector-icons'
import { theme } from '@theme'
import { Button as ButtonNB } from 'native-base'

type ButtonProos = {
	onPress?: () => void
}

export function Button({ onPress }: ButtonProos) {
	return (
		<ButtonNB
			height={12}
			w={14}
			minW="1/5"
			ml={4}
			leftIcon={
				<FontAwesome name="search" size={24} color={theme.colors.primary} />
			}
			bg="success"
			onPress={onPress}
		/>
	)
}
