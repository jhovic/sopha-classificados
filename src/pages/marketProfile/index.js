import React from "react";
import "./marketProfile.css";
import  Header from "../../components/header";
import Button from "../../components/button";
import Container from "../../components/container";


function MarketProfile() {
	return (
		<>
			<title>Sopha | Perfil da Loja</title>
			<main className="userProfile">
                
				<section className="leftSection">
					<div>
						<img src="https://static.wixstatic.com/media/ac7da6_ec560998f13d4c17a4bdf9c6ec3003f2~mv2.png/v1/fill/w_180,h_160,al_c,q_85,usm_0.66_1.00_0.01/_Logo_Sopha_Original%20-%20fundo%20transparent.webp" alt="" />
					</div>
					<hr />
					<div className="title-userProfile">
						<span><a href="#">Perfil Pessoal</a></span>
					</div>
					<hr />
					<div className="title-marketProfile">
						<span><a href="#"><strong>Perfil da Loja</strong></a></span>
					</div>
					<hr />
				</section>
				<section className="rightSection">
					<Header/>
					<Container>
						<h1 className="title-rightSection">Informações</h1>
						<form action="#" className="painelFormulario">
							<div>
								<label htmlFor="usernameInput">Nome da Loja:</label>
								<input id="usernameInput" type="text"   required/>
							</div>
							<div>
								<label htmlFor="nameInput">CNPJ:</label>
								<input id="nameInput" type="number"  required/>
							</div>
							<div>
								<label htmlFor="emailInput">Endereço:</label>
								<input id="emailInput" type="text" required/>
							</div>
							<div>
								<label htmlFor="passwordInput">CEP:</label>
								<input id="passwordInput" type="number"  required/>
							</div>
							<div>
								<label htmlFor="passwordInput">Especialização:</label>
								<input id="passwordInput" type="text"  required/>
							</div>
							<div className="textAreaAligner">
								<label htmlFor="aboutInput">Observação:</label>
								<textarea name="aboutInput" id="aboutInput" cols="30" rows="10" placeholder="Fale um pouco sobre sua loja :)"></textarea>
							</div>
							<div id="posicionaButao">
                                
								<Button>Editar e Salvar</Button>
								<Button>Cancelar</Button>

							</div>
                            
						</form>
						<div className="rodapeDireitos">
							<p>Sopha © 2021</p>
						</div>
					</Container>
                     
				</section>
                 
			</main>

		</>
	);
}

export default MarketProfile;