import { useState, useEffect } from "react";
import FormData from "form-data"

//Link to mongoDB backend server
const BASE_URL = "https://info30005-pear.herokuapp.com";


/*!*-------------*/
/* 	Conversation */
/*-------------*!*/

/* retrieve conversation from backend
*/
function getConversations() {
    const endpoint = BASE_URL + '/conversation/readAll';
    console.log(getConversations);
    return fetch(endpoint).then(res => res.json());
}

/* wrapper for get conversations
*/
export function useConversations() {
    const [loading, setLoading] = useState(true);
    const [conversations, setConversations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getConversations()
            .then(conversations => {
                setConversations(conversations);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        conversations,
        error
    };
}

/* add conversation to the database
*/
export function addConversation(conversation) {
    const { topic, category, image } = conversation;
    if (!topic || !category) {
        alert("must include all required fields");
        return;
    }

    if (image == undefined){
        alert("no image detected, default image used in place")
    }

    const data = new FormData();
    data.append('topicImage', image);
    data.append('topic', topic);
    data.append('category', category);

    const endpoint = BASE_URL + `/conversation/create/`;
    console.log("addConversation");

    return fetch(endpoint, {
        method: "POST",
        body: data
    }).then(res => window.location.reload());
}
