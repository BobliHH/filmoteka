import "./App.css";
import {Title} from "./common/Title"
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
      <Title tag="h1" title="Filmoteka" />
      <Title tag="h2" title="Filmoteka" />
      <Title tag="h3" title="Filmoteka" />
      <Title tag="h4" title="Filmoteka" />
    </div>
  );
};

