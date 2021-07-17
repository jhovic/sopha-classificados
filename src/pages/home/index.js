import React from "react";
import Header from "../../components/header";
import Container from "../../components/container";
import InputForm from "../../components/inputForm";
import Button from "../../components/button";
import { AiTwotoneShop, AiOutlineUserAdd} from "react-icons/ai";
import {BsArrowRightShort} from "react-icons/bs";
import {FaUserEdit} from "react-icons/fa";
import "./home.css";

function Home() {
    return(
        <>
            <Container>
                <Header />
                <main className="Home">
                    {/* Titulo Central da página  */}
                    <div className="titulo"> 
                        <h1>O melhor caminho para transformar ideias de <strong>móveis planejados</strong> em realidade.</h1>
                    </div>
                    
                    <form className="formBuscaCidade" action="#" method="get">
                        <InputForm placeholder="Em qual cidade você procura?" />
                        <Button>Buscar</Button>
                        <p>Nome da cidade que deseja procurar ou <a href="#">onde estou</a></p>
                    </form>
                    <hr className="separadorHorizontal"/>
                    <section className="informacoes">
                        <div className="card">
                            <AiTwotoneShop style={{opacity:"50%",fill:"var(--preto)"}} size={100}/>
                            <div className="texto-card">
                                <h3>14132</h3>
                                <p>Lojas de móves e<br/> Decoração</p>
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
    )
    
}

export default Home;