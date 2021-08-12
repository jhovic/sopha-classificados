import React from "react";
import HeaderLogo from "../../components/headerLogo";
import Container from "../../components/container";
import Input from "../../components/input";
import Button from "../../components/button";
import { AiTwotoneShop, AiOutlineUserAdd} from "react-icons/ai";
import {BsArrowRightShort} from "react-icons/bs";
import {FaUserEdit} from "react-icons/fa";
import "./home.css";
import { Form } from "@unform/web";

function Home() {

	function handleSubmit(data, {reset}) {
		console.log(data);
		
		reset();
	}
	return(
		

		<> <title>Sopha | Home</title>
        
			<Container>
				<HeaderLogo/>
				<main className="Home">
					{/* Titulo Central da página  */}
					<div className="titulo"> 
						<h1>O melhor caminho para transformar ideias de <strong>móveis planejados</strong> em realidade.</h1>
					</div>
                        
					<Form className="formBuscaCidade">
						<Input name="query" placeholder="Em qual cidade você procura?" />
						<Button onSubmit={handleSubmit} >Buscar</Button>
						<p>Nome da cidade que deseja procurar ou <a href="#">onde estou</a></p>
					</Form>

					<hr className="separadorHorizontal"/>
					<section className="informacoes">
						<div className="card">
							<AiTwotoneShop style={{opacity:"50%",fill:"var(--preto)"}} size={100}/>
							<div className="texto-card">
								<h3>14132</h3>
								<p>Lojas de móveis e<br/> Decoração</p>
							</div>
						</div>

						<div className="card">
							<FaUserEdit style={{opacity:"50%" , fill:"var(--preto)"}} size={100}/>
							<div className="texto-card">
								<h3>286</h3>  
								<p>Profissionais de <br/> home design</p>
							</div>
						</div>

						<div className="card">
							<AiOutlineUserAdd style={{opacity:"50%",fill:"var(--preto)"}} size={100}/>
							<div className="texto-card">
								<h4>É loja ou profissional?</h4>

								<h4><a href="#"> Cadaste seu perfil <BsArrowRightShort/></a></h4>
							</div>
						</div>
					</section>
				</main>
				<footer>
					<h4>Lojas de móveis planejados</h4>
				</footer>
			</Container>
		</>
	);
    
}

export default Home;