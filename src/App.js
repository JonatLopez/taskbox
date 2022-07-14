import './App.scss';
import Provider from './provider';
import AppRouter from './router/Router';
import Amplify from "aws-amplify";
import awsconfig from './aws-exports'
import { withAuthenticator } from "@aws-amplify/ui-react";

import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);

function App() {
  return (
    <Provider>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default withAuthenticator(App);
