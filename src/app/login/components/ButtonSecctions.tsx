interface ButtonSeccionProps {
   
}
const ButtonSeccion = () => {
    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
            >
                Sign In
            </button>
            <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
            >
                Forgot Password?
            </a>
        </>
    )
}

export default ButtonSeccion;