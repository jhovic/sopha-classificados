import React from "react";
import './userProfile.css';
import  Header from "../../components/header"
import Button from "../../components/button";
import Container from "../../components/container"


function UserProfile() {
    return (
        <>
            <title>Sopha | Perfil Pessoal</title>
            <main className="userProfile">
                
                <section className="leftSection">
                    <div>
                        <img src="https://static.wixstatic.com/media/ac7da6_ec560998f13d4c17a4bdf9c6ec3003f2~mv2.png/v1/fill/w_180,h_160,al_c,q_85,usm_0.66_1.00_0.01/_Logo_Sopha_Original%20-%20fundo%20transparent.webp" alt="" />
                    </div>
                    <hr />
                    <div className="title-userProfile">
                        <span><a href="#"><strong>Perfil Pessoal</strong></a></span>
                    </div>
                    <hr />
                    <div className="title-marketProfile">
                        <span><a href="">Perfil da Loja</a></span>
                    </div>
                    <hr />
                </section>
                <section className="rightSection">
                    <Header/>
                    <Container>
                        <h1 className="title-rightSection">Informações</h1>
                        <form action="#" className="painelFormulario">
                            <div>
                                <label for="usernameInput">Nome de Usuário:</label>
                                <input id="usernameInput" type="text" placeholder="Ex: joaquim-fernandes"  required/>
                            </div>
                            <div>
                                <label for="nameInput">Nome:</label>
                                <input id="nameInput" type="text" placeholder="Ex: Joaquim Fernandes" required/>
                            </div>
                            <div>
                                <label for="emailInput">E-mail:</label>
                                <input id="emailInput" type="email" placeholder="Ex: meuMelhorEmail@sopha.com"  required/>
                            </div>
                            <div>
                                <label for="passwordInput">Senha:</label>
                                <input id="passwordInput" type="password" placeholder="Senha:" required/>
                            </div>
                            <div className="textAreaAligner">
                                <label for="aboutInput">Sobre:</label>
                                <textarea name="aboutInput" id="aboutInput" cols="30" rows="10" placeholder="Fale um pouco sobre você :)"></textarea>
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

export default UserProfile;