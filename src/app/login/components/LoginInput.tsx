interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
    setInput: (value: string) => void;
}
const LoginInput = ({ label, placeholder, type, id, setInput }: InputProps) => {
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={id}
                type={type}
                placeholder={placeholder}
                onInput={onChange}
            />
        </>
    )

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }
};

export default LoginInput;
