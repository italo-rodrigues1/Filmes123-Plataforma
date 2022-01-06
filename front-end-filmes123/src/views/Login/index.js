import { Container} from './styles'
import Header from '../../components/Header';
import FormLogin from '../../components/FormLogin';
import GlobalStyle from '../../globalStyled';

export default function Login() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Header/>
        <FormLogin/>
      </Container>
    </>
 );  
}
