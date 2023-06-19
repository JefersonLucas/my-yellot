import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '@theme'
import { Select as SelectNB } from 'native-base'

type ItemsProps = { label: string; value: string }

type SelectProps = {
	value?: string
	setValue?: React.Dispatch<React.SetStateAction<string>>
	items: ItemsProps[]
	disabled?: boolean
}

export function Select({ value, setValue, items, disabled }: SelectProps) {
	return (
		<SelectNB
			testID="select-input"
			selectedValue={value}
			isDisabled={disabled}
			flex={1}
			height={12}
			accessibilityLabel="Escolha o serviço"
			placeholder="Escolha o serviço"
			fontFamily="body"
			_selectedItem={{
				bg: 'gray.200',
				endIcon: (
					<MaterialCommunityIcons
						name="check-bold"
						size={24}
						color={theme.colors.primary}
					/>
				),
			}}
			mt={1}
			onValueChange={(itemValue) => setValue && setValue(itemValue)}
		>
			{items.map((item) => (
				<SelectNB.Item key={item.label} label={item.label} value={item.value} />
			))}
		</SelectNB>
	)
}
