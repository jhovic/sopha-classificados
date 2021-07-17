import styled from "styled-components";

const Head = styled.header`

    display: flex;
    flex-wrap:wrap;
    align-items: center;
    align-content:center;
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
    
  }

  .logo img{
    margin-top:10px;
    height:40px;
    
  }


`;
const Header = () => (
    <Head>
      <div className="logo">
          <img src="https://static.wixstatic.com/media/ac7da6_06a22f364387403e8967485ba44d2cf4~mv2.png/v1/fill/w_289,h_108,al_c,q_85,usm_0.66_1.00_0.01/ac7da6_06a22f364387403e8967485ba44d2cf4~mv2.webp" alt=""/>
      </div>
      <ul className="navegacao">
        <li><a href="https://www.sopha.com.br/">Participe</a></li>
        <li><a href="https://www.sopha.com.br/">Lojas e profissionais</a></li>
      </ul>
    </Head>
  );

export default Header;