import { Heading, Text, Tag, Button } from '../components';


const Index = () => {
  return (
    <div>
      <Heading tag='h1'>Heading</Heading>
      <Text size='l'>Text</Text>
      <Tag size='s' color='red'>Legendary</Tag>
      <Tag size='m' color='green'>Legendary</Tag>
      <Button appearance='primary'>Primary</Button>
      <Button appearance='ghost'>Ghost</Button>
      <Button appearance='ghost' arrow='right' onClick={() => console.log('click')}>
				Arrow
			</Button>
      <Button appearance='primary' arrow='down'>
				down
			</Button>
    </div>
  );
};

export default Index;