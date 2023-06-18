import { Select } from '@components'
import { render } from '@testing-library/react-native'
import { theme } from '@theme'
import { NativeBaseProvider } from 'native-base'

describe('<Select />', () => {
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

	const inset = {
		frame: { x: 0, y: 0, width: 0, height: 0 },
		insets: { top: 0, left: 0, right: 0, bottom: 0 },
	}

	it('checks if hourly value is the same as the label', () => {
		const { getByTestId } = render(
			<NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
				<Select value="hourly" items={items} />
			</NativeBaseProvider>,
		)

		const selectName = getByTestId('select-input')

		expect(selectName.props.value).toEqual('Hora em hora')
	})

	it('checks if daily value is the same as the label', () => {
		const { getByTestId } = render(
			<NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
				<Select value="daily" items={items} />
			</NativeBaseProvider>,
		)

		const selectName = getByTestId('select-input')

		expect(selectName.props.value).toEqual('Diário')
	})

	it('checks if monthly value is the same as the label', () => {
		const { getByTestId } = render(
			<NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
				<Select value="monthly" items={items} />
			</NativeBaseProvider>,
		)

		const selectName = getByTestId('select-input')

		expect(selectName.props.value).toEqual('Por mês')
	})

	it('checks if yearly value is the same as the label', () => {
		const { getByTestId } = render(
			<NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
				<Select value="yearly" items={items} />
			</NativeBaseProvider>,
		)

		const selectName = getByTestId('select-input')

		expect(selectName.props.value).toEqual('Anual')
	})
})
