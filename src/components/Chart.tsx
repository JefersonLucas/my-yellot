import {
	VictoryBar,
	VictoryChart,
	VictoryGroup,
	VictoryLegend,
} from 'victory-native'

import { theme } from '@theme'

type ChartProps = {
	generetedData: readonly any[] | undefined
	expectedData: readonly any[] | undefined
}

export function Chart({ generetedData, expectedData }: ChartProps) {
	return (
		<VictoryChart
			width={generetedData!.length > 10 ? 800 : 350}
			padding={{ left: 70, top: 70, bottom: 30, right: 20 }}
		>
			<VictoryLegend
				x={generetedData!.length > 10 ? 250 : 90}
				y={20}
				centerTitle
				orientation="horizontal"
				gutter={20}
				style={{
					title: { fontSize: 18 },
				}}
				data={[
					{ name: 'Gerado', symbol: { fill: theme.colors.primary } },
					{
						name: 'Esperado',
						symbol: { fill: theme.colors.success },
					},
				]}
			/>

			<VictoryGroup
				offset={generetedData!.length > 10 ? 10 : 25}
				colorScale={[theme.colors.primary, theme.colors.success]}
			>
				<VictoryBar
					data={generetedData}
					animate={{
						duration: 2000,
						onLoad: { duration: 1000 },
					}}
				/>
				<VictoryBar
					data={expectedData}
					animate={{
						duration: 2000,
						onLoad: { duration: 1000 },
					}}
				/>
			</VictoryGroup>
		</VictoryChart>
	)
}
