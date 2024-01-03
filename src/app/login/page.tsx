'use client'

import { useState } from "react";
import LoginInput from "./components/LoginInput";
import { signIn } from "@/utils/auth";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const router = useRouter();
    const handleSignIn = async () => {
        signIn(
            username,
            password,
            (session) => {
                console.log('Inicio de sesión exitoso', session);
                router.push('/')
            },
            (err) => {
                console.error('Error en el inicio de sesión', err);
                // Manejar el error, mostrar mensajes, etc.
            }
        );
    };
    return (
        <div className="container flex flex-col items-center justify-center h-full">
            <div className="w-full max-w-md pt-10">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <LoginInput
                            label="Username" placeholder="Username" type="text" id="username" setInput={setUsername} />
                    </div>
                    <div className="mb-6">
                        <LoginInput
                            label="Password" placeholder="Password" type="password" id="password" setInput={setPassword} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSignIn}
                        >
                            Sign In
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div
                        className="inline-flex align-middle font-bold text-sm text-blue-500 hover:text-blue-800"
                    >
                        <a href="/register">Register</a>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2021 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>

    )

}

export default Login;