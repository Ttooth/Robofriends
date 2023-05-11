import React from 'react';
import Card from './Card';

const CardsArray = ({ robots }) => {
    return (
        <div>
           {
                robots.map((user, i) => {
                return (
                <Card 
                key={robots[i].id} 
                name={robots[i].name} 
                id={robots[i].id} 
                email={robots[i].email} 
                username={robots[i].username}
                />
                );
            })
         }
        </div>
    );
}

export default CardsArray;