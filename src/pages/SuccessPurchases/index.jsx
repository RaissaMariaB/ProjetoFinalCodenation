import React from 'react';
import successGif from '../../assets/img/success.gif';
import './style.scss';

const SuccessPurchases = () => {
  return (
    <div className="success-purchase">
      <img src={successGif} className="success-purchase__gif" alt=""/>
      <h1 className="success-purchase__title">Compra aprovada com sucesso!</h1>
    </div>
  );
};

export default SuccessPurchases;
