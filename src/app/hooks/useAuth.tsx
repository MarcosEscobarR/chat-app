import { useState, useEffect } from "react";
import { User } from "../components/Sidebar";
import { getCurrentUser } from "@/utils/auth";

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchUser = async () => {

            getCurrentUser((user) => setUser(user), (error) => setError(error));
            setLoading(false);

        };
        fetchUser();
    }, []);

    return { user, loading, error };
};

export default useAuth;