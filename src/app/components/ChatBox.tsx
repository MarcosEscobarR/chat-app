// components/ChatBox.tsx
import React from 'react';

interface ChatBoxProps {
    chatId: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ chatId }) => {
    return (
        <div className="bg-white p-4">
            <h2 className="text-lg font-bold mb-4">Chat: {chatId}</h2>
            {/* Aquí puedes incluir la lógica para mostrar los mensajes del chat */}
        </div>
    );
};

export default ChatBox;
