// components/Chat.tsx
import React from 'react';

interface ChatProps {
    chatId: string;
}

const Chat: React.FC<ChatProps> = ({ chatId }) => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-2">Chat: {chatId}</h2>
            {/* Aquí puedes incluir la lógica para mostrar los mensajes del chat */}
        </div>
    );
};

export default Chat;
