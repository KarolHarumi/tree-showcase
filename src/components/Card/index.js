import React, { useState, useEffect } from 'react';

import { 
    CardContainer, 
    Title, 
    Subtitle, 
    Image, 
    Button 
} from './Card';

function Card() {
    const [data, setData] = useState([]);
 
    useEffect(async () => {
        fetch('https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json')
        .then(response => response.json())
        .then(response => {
            if(response !== undefined) {
                setData(response.trees);
            } 
        });
    },[]);
    
  return (
    <>
        {data.map((tree, index) => (
            <CardContainer key={index}>
                <Title>{tree.name}</Title>
                <Subtitle>{tree.species_name}</Subtitle>

                <Image 
                    className={'Image-container'} 
                    style={{backgroundImage: `url(${tree.image})`}} 
                />

                <Button href="#" className={'Button'}>Show image</Button>
            </CardContainer>
        ))}
    </>

  );
}

export default Card;