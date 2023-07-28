import './App.css';
import { Container } from './common/Container';
import { Header } from './header/Header';

export const App = () => {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <Container>main</Container>
      <Container solidColor="#dedede">footer</Container>
      {/* header */}
      {/* main */}
      {/* footer */}
    </div>
  );
};
