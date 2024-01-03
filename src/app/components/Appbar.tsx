// components/AppBar.tsx
import React from 'react';

const AppBar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-blue-500 p-4 text-white">
            {/* Contenido de la barra de aplicación */}
            <h1 className="text-2xl font-bold">Mi Aplicación</h1>
        </div>
    );
};

export default AppBar;
