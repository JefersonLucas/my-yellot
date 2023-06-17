import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '@theme'
import { Select as SelectNB } from 'native-base'

type ItemsProps = { label: string; value: string }

type SelectProps = {
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
	items: ItemsProps[]
}

export function Select({ value, setValue, items }: SelectProps) {
	return (
		<SelectNB
			selectedValue={value}
			minWidth="3/4"
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
			onValueChange={(itemValue) => setValue(itemValue)}
		>
			{items.map((item) => (
				<SelectNB.Item key={item.label} label={item.label} value={item.value} />
			))}
		</SelectNB>
	)
}
