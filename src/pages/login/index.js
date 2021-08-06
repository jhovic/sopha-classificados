import React from "react";
import "./login.css";
import {Form} from "@unform/web";
//import {Scope} from "@unform/core";
import Input from "../../components/input";
 
function Login() {

	function handleSubmit(data, {reset}) {
		console.log(data.lenght);


		reset();
	}

	return (
		<>
			<title>Sopha | Login</title>
			<main className="Login">
				<div className="painel">
					<div className="logo">
						<img src="https://planejados.sopha.com.br/images/logo.png"alt="Logo do Sopha"/>
					</div>
					<Form className="loginInput"onSubmit={handleSubmit}>
						{/* <Scope path="user"> */}

						<Input placeholder="Digite seu e-mail: "name="email" type="email" required/>
						<Input placeholder="Digite sua senha: "name="password" type="password" required/>

						<button type="submit">Entrar</button>
						{/* </Scope> */}
					</Form>
                 
				</div>
				<div className="rodapeDireitos">
					<p>Sopha © 2021</p>
				</div>
			</main>
		</>
	);
}

export default Login;
