import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './app';
import {Provider} from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider>
		<App />
		<ToastContainer position="top-center" theme="dark"/>
	</Provider>
);