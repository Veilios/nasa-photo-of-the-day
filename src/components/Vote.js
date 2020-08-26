import React, { useState } from 'react';



const Vote = () => {

    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);

    const upVoting = () => {
        setUpvote((upvote) => upvote + 1);
    };

    const downVoting = () => {
        setDownvote((downvote) => downvote - 1);
    };

    return (
        <div className="voting">
            <div className="voter1">
                <h3>Upvote: {upvote}</h3>
                <button onClick={upVoting}>+</button>
            </div>
            <div className="voter2">
                <h3>Downvote: {downvote}</h3>
                <button onClick={downVoting}>-</button>
            </div>
        </div>
    );
};

export default Vote;