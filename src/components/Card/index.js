import React, { useState, useEffect } from 'react';

import { 
    CardContainer,
    CardContent, 
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
                {showImage[index] ? 
                    <Image  style={{backgroundImage: `url(${tree.image})`}} /> :  null
                }

                <CardContent>
                    <span>
                        <Title>{tree.name}</Title>
                        <Subtitle>{tree.species_name}</Subtitle>
                    </span>
                    
                    <Button onClick={() => toggleImage(index)}>
                        {showImage[index] ? 'Hide image' : 'Show image'}
                    </Button>
                </CardContent>
            </CardContainer>
        ))}
    </>

  );
}

export default Card;