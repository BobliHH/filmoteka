import './App.css';
import { Title } from './common/Title';
import { Alert } from './common/Alert';
export const App = () => {
  return (
    <div
      style={
        {
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101'
        }
      }
    >
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101'
          backgroundColor: 'black',
          padding: 10,
        }}
      >
        <Alert> ALERT!!!</Alert>
        <Alert type="info" modifiers={[]}>
          {' '}
          INFO!!!
        </Alert>
        <Alert type="success" modifiers={['is-outlined']}>
          {' '}
          SUCCESS!!!
        </Alert>
        <Alert type="error" modifiers={['is-elevated', 'is-outlined']}>
          {' '}
          Error!!!
        </Alert>
        <Alert type="warning" modifiers={['is-elevated']}>
          {' '}
          Warning!!!
        </Alert>
      </div>
      <Title tag="h1" title="Filmoteka" />
      <Title tag="h2" title="Filmoteka" />
      <Title tag="h3" title="Filmoteka" />
      <Title tag="h4" title="Filmoteka" />
    </div>
  );
};
