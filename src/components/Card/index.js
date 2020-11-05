import React from 'react';
import { 
    CardContainer, 
    Title, 
    Subtitle, 
    Image, 
    Button 
} from './Card';

function Card() {
  return (
    <CardContainer>
        <Title>Red Mangrove</Title>
        <Subtitle>Rhizophora mangle</Subtitle>

        <Image 
            className={'Image-container'} 
            style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg)'}} 
        />

        <Button href="#" className={'Button'}>Show image</Button>
    </CardContainer>
  );
}

export default Card;