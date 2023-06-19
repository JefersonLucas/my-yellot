import { Center, Heading } from 'native-base'

type TitleProps = { title: string }

export function Title({ title }: TitleProps) {
	return (
		<Center my={4}>
			<Heading color="primary" fontFamily="heading">
				{title}
			</Heading>
		</Center>
	)
}
