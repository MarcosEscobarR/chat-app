// components/ChatMessage.tsx
import React from 'react';

interface ChatMessageProps {
    username: string;
    message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ username, message }) => {
    return (
        <div className="flex flex-col mb-2">
            <span className="text-gray-600">{username}:</span>
            <p className="bg-gray-200 p-2 rounded-md">{message}</p>
        </div>
    );
};

export default ChatMessage;
