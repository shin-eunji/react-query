import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import { useSetRecoilState } from "recoil";
import {isDarkAtom} from "../atoms";

const Title = styled.h1`
font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`
const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const CoinsList = styled.ul`
    
`;
const Coin = styled.li`
  background: #fff;
  color: ${props => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  text-decoration: none;
  list-style: none;
  border: 1px solid ${props => props.theme.textColor};
  background: ${props => props.theme.bgColor };
  a {
    display:flex;
    align-items:center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;
const Loader = styled.span`
  text-align:center;
  display:block;
`;
const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface InterfaceCoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom(prev => !prev);
  const { isLoading, data } = useQuery<InterfaceCoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet><title>코인</title></Helmet>
      <Header>
        <Title>코인</Title>
        <button onClick={toggleDarkAtom}>Toggle Mode</button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
        ) : (
          <CoinsList>
            {data?.slice(0,100).map(coin =>
              <Coin key={coin.id}>
                <Link to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}>
                  <Image src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol}`}
                       alt={coin.symbol.toLowerCase()}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            )}
          </CoinsList>
        )
      }
    </Container>
  );
}

export default Coins;