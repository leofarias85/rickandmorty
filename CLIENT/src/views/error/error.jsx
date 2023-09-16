import React from 'react';
import './error.css'; // Importa un archivo de estilos específico para la página de error
import errorImg from '../../assets/errors.jpg';

function ErrorPage() {
  return (
    <div className="error-container">
      <img src={errorImg} alt="error404" className="error-image" />
    </div>
  );
}

export default ErrorPage;