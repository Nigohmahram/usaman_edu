import { useState } from 'react';
import { Heading, Text, Tag, Button, Input, TextArea, Rating, Card } from '../components';
import { withLayout } from '../layout/layout';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { MenuItem } from '../interfaces/menu.interface';

const Index = (): JSX.Element => {
	const [isClick, setIsClick] = useState(false);
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Heading tag='h2'>Heading</Heading>
			<Text size='l'>Text</Text>
			<Tag size='s' color='red'>
				Legendary
			</Tag>
			<Tag size='m' color='green'>
				Legendary
			</Tag>
			<Button appearance='primary'>Primary</Button>
			<Button appearance='ghost'>Ghost</Button>
			<Button appearance='ghost' arrow={isClick ? 'down' : 'right'} onClick={() => setIsClick(prev => !prev)}>
				Arrow
			</Button>
			<Button appearance='primary' arrow='down'>
				down
			</Button>
			<br />
			<Input placeholder='Enter' />
			<TextArea placeholder='Message' />

			<br />
			<Rating rating={rating} isEditabled={true} setRating={setRating} />
			<br />
			<Card color='white'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque incidunt suscipit voluptate ratione facere quos
				amet. Adipisci, cum eaque?
			</Card>
			<br />
			<Card color='primary'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque incidunt suscipit voluptate ratione facere quos
				amet. Adipisci, cum eaque?
			</Card>
		</>
	);
};

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory });

	return {
		props: {
			menu,
			firstCategory,
		},
	};
};
interface HomeProps extends Record<string, unknown> {
	firstCategory: number;
	menu: MenuItem[];
}
