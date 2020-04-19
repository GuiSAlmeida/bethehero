import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import './style.scss';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whats, setWhats] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whats,
            city,
            uf
        };
        try {
            const response = await api.post('ongs', data);
            alert(`seu id ${response.data.id}`);
            history.push('/');
        } catch(error) {
            console.warn(error);
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero" />

                    <h1>Cadastro</h1>
                    <p>Fa&ccedil;a seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o logon
                    </Link>

                </section>

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Nome da ONG"
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="WhatsApp"
                        onChange={e => setWhats(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Cidade"
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="UF"
                            style={{ width:80 }}
                            onChange={e => setUF(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};