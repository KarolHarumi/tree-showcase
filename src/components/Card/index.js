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
    const [showImage, setShowImage] = useState({});

    const toggleImage = index => {
        setShowImage(
            prevImage => ({...prevImage, [index]: !prevImage[index]})
        );    
    };

    const fetchTreeData = () => {
        fetch('https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json')
        .then(response => response.json())
        .then(response => {
            if(response !== undefined) {
                setData(response.trees);
            } 
        });
    };

    useEffect(async () => {
        fetchTreeData();
    },[]);

  return (
    <>
        {data.map((tree, index) => (
            <CardContainer key={index}>
                <Title>{tree.name}</Title>
                <Subtitle>{tree.species_name}</Subtitle>

                {showImage[index] ? 
                    <Image 
                        className={'Image-container'}  
                        style={{backgroundImage: `url(${tree.image})`}} 
                    /> :  null
                }

                <Button href="#" className={'Button'} onClick={() => toggleImage(index)}>
                    {showImage[index] ? 'Hide image' : 'Show image'}
                </Button>
            </CardContainer>
        ))}
    </>

  );
}

export default Card;