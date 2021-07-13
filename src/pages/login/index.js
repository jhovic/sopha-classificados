import React from "react";
import "./login.css";
//import { MdEmail, MdLock } from "react-icons/md";
 
function Login() {
  return (
    <main className="Login">
        <div className="painel">
            <div className="logo">
                <img src="https://planejados.sopha.com.br/images/logo.png"alt="Logo do Sopha"/>
            </div>
            <form action="">
                <div className="loginInputEmail">
                    <input type="text" placeholder="digite seu e-mail" />
                </div>

                <div className="loginInputPassword">
                    <input type="password" placeholder="digite sua senha" />
                </div>

                <input type="submit" value="Entrar" id="button"/>

                <div className="loginEsqueciSenha">
                    <a href="#">esqueci minha senha</a>
                </div>
            </form>
            
        </div>
        <div className="rodapeDireitos">
            <p>Sopha © 2021</p>
        </div>
    </main>
  );
}

export default Login;
