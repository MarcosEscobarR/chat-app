'use client'

import { useEffect, useState } from "react";
import LoginInput from "../login/components/LoginInput";
import { register } from "@/utils/auth";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(true);
    const router = useRouter();

    const handleRegister = async () => {
        if (!password || !username || !email) {
            return;
        }
        register(
            username,
            password,
            email,
            (result) => {
                console.log('Inicio de sesión exitoso', result);
                router.push('/login')
            },
            (err) => {
                console.error('Error en el inicio de sesión', err);
                // Manejar el error, mostrar mensajes, etc.
            }
        );
    };

    useEffect(() => {
        if (confirmPassword !== password) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }


    }, [confirmPassword, password]);
    return (
        <div className="container flex flex-col items-center justify-center h-full">
            <div className="w-full max-w-md pt-10">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <LoginInput
                            label="Email" placeholder="Email" type="email" id="email" setInput={setEmail} />
                    </div>
                    <div className="mb-4">
                        <LoginInput
                            label="Username" placeholder="Username" type="text" id="username" setInput={setUsername} />
                    </div>
                    <div className="mb-6">
                        <LoginInput
                            label="Password" placeholder="Password" type="password" id="password" setInput={setPassword} />
                    </div>
                    <div className="mb-6">
                        <LoginInput
                            label="Confirm Password" placeholder="Password" type="password" id="confirm-password" setInput={setConfirmPassword} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            disabled={disabled}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleRegister}
                        >
                            Register
                        </button>

                    </div>
                </div>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2021 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>

    )

}

export default Register;