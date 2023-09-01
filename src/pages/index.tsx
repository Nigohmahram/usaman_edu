import { useState } from 'react';
import { Heading, Text, Tag, Button, Input, TextArea, Rating, Card } from '../components';
import { withLayout } from '../layout/layout';
import axios from 'axios';
import { GetServerSideProps } from 'next';

const Index = () => {
	const [isClick, setIsClick] = useState(false);
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Heading tag='h1'>Heading</Heading>
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

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory: 0 });

	return {
		props: {
			data,
		},
	};
};
