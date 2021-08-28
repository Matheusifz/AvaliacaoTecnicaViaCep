import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { FaRoad, FaCity } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { BiMapPin } from "react-icons/bi";
import { RiMapPinLine } from "react-icons/ri";
import { Container, Content } from "./style";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";

interface Address {
  localidade: string;
  bairro: string;
  uf: string;
  logradouro: string;
  cep: string;
}

const Home: React.FC = () => {
  const [address, setAddress] = useState<Address | null>();
  const [query, setQuery] = useState("33855610");

  const onChange = (e: any) => {
    setQuery(e.target.value);
  };

  const getAddress = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${query}/json/`)
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
    setAddress(response);
  };

  useEffect(() => {
    getAddress();
  }, []);

  const handleInputSubmit = (e: any) => {
    e.preventDefault();
    getAddress();
  };

  return (
    <Container>
      <Card width="680" height="43">
        <Input query={query} onChange={onChange} />
        <Button onClick={handleInputSubmit}>
          <GoSearch size={24} color="#F8F8F8" />
        </Button>
      </Card>
      {!!address && (
        <Card width="680" height="262">
          <Content>
            <li>
              <FaRoad size={20} color="#F8F8F8" />
              <span>Cidade de: {address.localidade}</span>
            </li>
            <li>
              <FaCity size={20} color="#F8F8F8" />
              <span>
                Logradouro:
                {address.logradouro}
              </span>
            </li>
            <li>
              <BsFillHouseFill size={20} color="#F8F8F8" />
              <span>Bairro: {address.bairro}</span>
            </li>
            <li>
              <BiMapPin size={20} color="#F8F8F8" /> 
              <span>
                Estado de:
                {address.uf}
              </span>
            </li>
            <li>
              <RiMapPinLine size={20} color="#F8F8F8" />
              <span>CEP: {address.cep}</span>
            </li>
          </Content>
        </Card>
      )}
    </Container>
  );
};

export default Home;
