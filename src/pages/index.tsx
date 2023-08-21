import { useState } from 'react';
import { Heading, Text, Tag, Button, Input, TextArea, Rating } from '../components';


const Index = () => {
  const [isClick, setIsClick] = useState(false);
  const [rating, setRating] = useState<number>(4);
  return (
    <div>
      <Heading tag='h1'>Heading</Heading>
      <Text size='l'>Text</Text>
      <Tag size='s' color='red'>Legendary</Tag>
      <Tag size='m' color='green'>Legendary</Tag>
      <Button appearance='primary'>Primary</Button>
      <Button appearance='ghost'>Ghost</Button>
      <Button appearance='ghost' arrow={isClick ? 'down' : 'right'} onClick={() => setIsClick (prev => !prev)}>
				Arrow
			</Button>
      <Button appearance='primary' arrow='down'>
				down
			</Button>
      <br />
      <Input placeholder='Enter'/>
      <TextArea placeholder='Message'/>

      <br/>
      <Rating rating={rating} isEditabled={true} setRating={setRating}/>
    </div>
  );
};

export default Index;