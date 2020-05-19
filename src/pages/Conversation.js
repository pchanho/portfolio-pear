import React from 'react';
import { useConversations} from "../API";
import { NavLink, useHistory } from "react-router-dom";
import "../css/conversationStyles.css";

// Present conversation list, conversation creation
export default function Conversation() {
    const { loading, conversations, error } = useConversations();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return (
        <div className='join-main'>
            <h1 id='join-heading'>Conversation List</h1>
            <div className="join-container">
                <NavLink to="/create" className="btn-join">+</NavLink>
                {conversations.map(conversation => (
                    <ConversationList key={conversation.id} {...conversation} />
                ))}
            </div>
            <div className='btn-help'>Help</div>

        </div>
    );
}

// Fetch conversation data from mongoDB
function ConversationList(conversation) {
    const {_id, status, topic, category, topicImage} = conversation;

    const history = useHistory();

// Store topicImage on user click and redirect to chat page
    function handleClick(event) {
        event.preventDefault();
        history.push("/chat");
        sessionStorage.setItem('currentTopicImage', topicImage);
    }


    return (
        <button
            className={`conversation-item conversation-${topic}`}
            key={topic}
            style={{backgroundImage: `url(${topicImage})`}}
            onClick={handleClick}
        >
            🏷 {category}<br></br>🗣 {topic}
        </button>
    );
}


