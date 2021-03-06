import React from 'react';

const Card = ({ id, name, email, website }) => {
    return (
        <div className='tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' 
			src={`https://robohash.org/${id}?size=200x200`}/> 
		<div>
		<h2>{name}</h2>
		<p>Email: {email}</p>
		<p>Website: {website}</p>
		</div> 
		</div>
    );
}

export default Card;