import { useState } from "react";
import { GoSearch } from "react-icons/go";
import Loader from "react-loader-spinner";
import { FaRoad, FaCity } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { BiMapPin } from "react-icons/bi";
import { RiMapPinLine } from "react-icons/ri";
import { Container, Content } from "./style";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import api from "../../services/api";
import Text from "../../components/Text";

interface Address {
  city: string;
  neighborhood: string;
  state: string;
  street: string;
  cep: string;
}

const Home: React.FC = () => {
  const [address, setAddress] = useState<Address | null>();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (e: any) => {
    setQuery(e.target.value);
  };

  const getAddress = async () => {
    try {
      setIsLoading(true);
      const address = await api.get(`/?cep=${query}`);
      if (!!address) {
        setAddress(address.data.address);
        setIsLoading(false);
        setError(false);
      }
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  };

  const handleInputSubmit = (e: any) => {
    e.preventDefault();
    getAddress();
  };

  const renderContent = () => {
    if (isLoading) {
      return <Loader type="ThreeDots" color="#787c81" height={80} width={80} />;
    }

    if (error || !address) {
      return (
        <Text color="#b81c11" text="Sorry, we couldn't fetch this CEP..." />
      );
    }

    if (!!address) {
      return (
        <Card maxWidth="560px" width="70%" height="262px">
          <Content>
            <li>
              <FaRoad size={20} color="#F8F8F8" />
              <span>Cidade de: {address.city}</span>
            </li>
            <li>
              <FaCity size={20} color="#F8F8F8" />
              <span>
                Logradouro:
                {address.street}
              </span>
            </li>
            <li>
              <BsFillHouseFill size={20} color="#F8F8F8" />
              <span>Bairro: {address.neighborhood}</span>
            </li>
            <li>
              <BiMapPin size={20} color="#F8F8F8" />
              <span>
                Estado de:
                {address.state}
              </span>
            </li>
            <li>
              <RiMapPinLine size={20} color="#F8F8F8" />
              <span>CEP: {address.cep}</span>
            </li>
          </Content>
        </Card>
      );
    } else {
      <Text color="#787c81" text="Sorry, something unexpected happened..." />;
    }
  };

  return (
    <Container>
      <Card maxWidth="560px" width="70%" height="43px">
        <Input
          query={query}
          onChange={onChange}
          placeholder="Type your CEP here..."
        />
        <Button onClick={handleInputSubmit}>
          <GoSearch size={24} color="#F8F8F8" />
        </Button>
      </Card>
      {renderContent()}
    </Container>
  );
};

export default Home;
