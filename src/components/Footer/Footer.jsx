import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import Container from "../Container";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer-subscription">
          <h3 className="footer-heading">FIQUE POR DENTRO</h3>
          <label htmlFor="email">

            <input type="text" name="email" className="footer-input" placeholder="cadastre seu e-mail"/>
            <button className="subscribe-btn" type="submit">
              ASSINAR
              <FontAwesomeIcon
                icon={faEnvelope}
                size={"1x"}
                className="icon"
              />
            </button>
          </label>
        </div>

        <div className="footer-info">

          <div className="footer-about">
            <h3 className="footer-heading">SOBRE</h3>
            <ul className="footer-details">
              <li>A Marca</li>
              <li>A Equipe</li>
              <li>Carreiras</li>
              <li>Imprensa</li>
            </ul>
          </div>

          <div className="footer-help">
            <h3 className="footer-heading">AJUDA</h3>
            <ul className="footer-details">
              <li>Atendimento</li>
              <li>Frete & Entregas</li>
              <li>Devoluções</li>
              <li>Fornecedores</li>
            </ul>
          </div>

          <div className="footer-account">
            <h3 className="footer-heading">CONTA</h3>
            <ul className="footer-details">
              <li>Minha Conta</li>
              <li>Meus Pedidos</li>
              <li>Meus Créditos</li>
              <li>Minhas Trocas</li>
            </ul>
          </div>
        </div>
        <div className="footer-credits">
          <span role="img" aria-label="coração" >feito por squad one 🧡 AceleraDev - todos os direitos reservados.</span>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
