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
                <svg onClick={upVoting} width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-arrow-up-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>
  <path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"/>
</svg>
            </div>
            <div className="voter2">
                <h3>Downvote: {downvote}</h3>
                <svg onClick={downVoting} width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
</svg>
            </div>
        </div>
    );
};

export default Vote;