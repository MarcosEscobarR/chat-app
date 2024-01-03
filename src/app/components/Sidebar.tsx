// components/Sidebar.tsx
'use client'
import React, { useEffect, useState } from 'react';

import ChatRoom from './ChatRoom';
import Contact from './Contact';
import { getCurrentUser } from '@/utils/auth';
import useAuth from '../hooks/useAuth';

export interface Chat {
    _id: string;
    name: string;
}

export interface User {
    _id: string;
    displayName: string;
    email: string;
    photoURL?: string;
}

const Sidebar: React.FC = () => {
    // const dispatch = useDispatch();
    // const chats = useSelector((state: RootState) => state.chats.chats);



    const chats: Chat[] = [
        { _id: '1', name: 'Chat 1' },
        { _id: '2', name: 'Chat 2' },
        { _id: '3', name: 'Chat 3' },
    ];

    const currentUser: User = {
        _id: "123",
        displayName: "John Doe",
        email: "test@test.com",
        photoURL: "https://picsum.photos/200/300"

    };

    const [selectedChat, setSelectedChat] = useState<number>(0);
    const [currentChat, setCurrentChat] = useState<Chat>(chats[0]);
    const [nonContacts, setNonContacts] = useState([]);
    const [contactIds, setContactIds] = useState([]);

    const changeCurrentChat = (index: number, chat: Chat) => {
        setSelectedChat(index);
        setCurrentChat(chat);
    };




    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <div className="container mx-auto h-full">
            <div className="min-w-full bg-white border-x border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded lg:grid lg:grid-cols-3">
                <div className="bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-700 lg:col-span-1">
                    {/* <button className="bg-blue-500 text-white p-2 mb-4">
                        Crear Chat
                    </button> */}
                    <ul className="overflow-auto h-[30rem]">
                        <h2 className="my-2 mb-2 ml-2 text-gray-900 dark:text-white">Chats</h2>
                        <li>
                            {chats.map((chatRoom, index) => (
                                <div
                                    key={index}
                                    className={classNames(
                                        index === selectedChat
                                            ? "bg-gray-100 dark:bg-gray-700"
                                            : "transition duration-150 ease-in-out cursor-pointer bg-white border-b border-gray-200 hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700",
                                        "flex items-center px-3 py-2 text-sm "
                                    )}
                                    onClick={() => changeCurrentChat(index, chatRoom)}
                                >
                                    <Contact user={currentUser} onlineUsersId={[0]} />
                                </div>
                            ))}
                        </li>

                    </ul>
                </div>
                <ChatRoom currentChat={currentChat} currentUser={currentUser} socket={undefined} />

            </div>
        </div>
    );
};

export default Sidebar;
