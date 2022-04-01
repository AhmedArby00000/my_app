import React from 'react';
import './style/global.scss';

import AppRoutes from "./routes";


const TodoApp = () => (
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);

export default TodoApp;
