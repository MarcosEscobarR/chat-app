import { useState, useEffect, useRef } from "react";

// import { getMessagesOfChatRoom, sendMessage } from "../../services/ChatService";

import Message, { IMessage } from "./Message";
import ChatForm from "./ChatForm";
import Contact from "./Contact";
import { Chat, User } from "./Sidebar";
import useAuth from "../hooks/useAuth";

interface ChatRoomProps {
    currentChat: Chat;
    currentUser: User;
    socket: any;
}

export default function ChatRoom({ currentChat, currentUser, socket }: ChatRoomProps) {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [incomingMessage, setIncomingMessage] = useState(null);
    const { error, loading, user } = useAuth();


    const scrollRef = useRef();



    useEffect(() => {
        const res: IMessage[] = [{
            message: "Hola",
            sender: "1",
            createdAt: "2021-08-12T21:44:00.000Z",
        }]
        setMessages(res);

        // fetchData();
    }, [currentChat._id]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    // useEffect(() => {
    //     socket.current?.on("getMessage", (data) => {
    //         setIncomingMessage({
    //             senderId: data.senderId,
    //             message: data.message,
    //         });
    //     });
    // }, [socket]);

    useEffect(() => {
        incomingMessage && setMessages((prev) => [...prev, incomingMessage]);
    }, [incomingMessage]);

    const handleFormSubmit = async (message: string) => {
        setMessages((prev) => [...prev, { message, sender: currentUser._id, createdAt: new Date().toISOString() }]);
        // const receiverId = currentChat.members.find(
        //     (member) => member !== currentUser._id
        // );

        // socket.current.emit("sendMessage", {
        //     senderId: currentUser._id,
        //     receiverId: receiverId,
        //     message: message,
        // });

        // const messageBody = {
        //     chatRoomId: currentChat._id,
        //     sender: currentUser._id,
        //     message: message,
        // };
        // const res = await sendMessage(messageBody);
        // setMessages([...messages, res]);
    };

    return (
        <div className="lg:col-span-2 lg:block">
            <div className="w-full">
                {
                    loading ?? <div className="p-3 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                        <Contact user={currentUser} onlineUsersId={[0]} />
                    </div>
                }

                <div className="relative w-full p-6 overflow-y-auto h-[30rem] bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <ul className="space-y-2">
                        {messages.map((message, index) => (
                            <div key={index} ref={scrollRef}>
                                <Message message={message} self={currentUser._id} />
                            </div>
                        ))}
                    </ul>
                </div>

                <ChatForm handleFormSubmit={handleFormSubmit} />
            </div>
        </div>
    );
}
