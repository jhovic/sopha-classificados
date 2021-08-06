/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";

const Head = styled.header`
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content:flex-end;
    height:40px;
    padding: 5px 30px;
    
    .navegacao{
        display:flex;
        
    }

    .navegacao li{
        margin:2px;
        padding:2px;
        list-style-type:none;
    }

    .navegacao li a {
        color:white;
        text-decoration:none;
    }`;

const Header = () =>(
	// eslint-disable-next-line react/react-in-jsx-scope
	<Head>
		<ul className="navegacao">
			<li><a href="https://www.sopha.com.br/">Home</a></li>
			<li><a href="https://www.sopha.com.br/">Participe</a></li>
			<li><a href="https://www.sopha.com.br/">Lojas</a></li>
			<li><a href="https://www.sopha.com.br/">Profissionais</a></li>
		</ul>
	</Head>

);

export default Header;