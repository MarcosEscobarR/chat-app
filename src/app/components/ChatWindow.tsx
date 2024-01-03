// components/ChatWindow.tsx
import React from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface ChatWindowProps {
    messages: { username: string; message: string }[];
    onSendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSendMessage }) => {
    return (
        <div className="flex flex-col h-screen bg-gray-100 p-4 pt-20">
            <div className="flex-1 overflow-y-auto">
                {messages.map((msg, index) => (
                    <ChatMessage key={index} username={msg.username} message={msg.message} />
                ))}
            </div>
            <ChatInput onSendMessage={onSendMessage} />
        </div>
    );
};

export default ChatWindow;
