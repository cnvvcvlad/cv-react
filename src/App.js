import React from 'react'; // utilise la librairie React
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // on va chercher des elements de la librairie react-router-dom
//import de toutes nos pages de l'appplication, on les ecrit avec le chemin absolu
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


//on utilse souvent les fonctions flechées, dans notre cas, partout où on utilisera App, cela donne le code de la fonction
const App = () => {
  return (
    // <div>
    //   <h1>Hello React!</h1>
    // </div>

    <>
      {/* Notre navigation est dans BrowserRouter */}
      <BrowserRouter basename="/cv-react">
        {/* on utilise un switch case pour que la page 404 s'affiche au bon endroit */}
        <Switch>
          {/* Creation des routes et on ajoute la page componente */}
          <Route path="/" exact component={Home}></Route> {/*Notre page d'accueil*/}
          <Route path="/competences" component={Knowledges}></Route> {/*Notre page competences*/}
          <Route path="/portfolio" component={Portfolio}></Route> {/*Notre page portofolio*/}
          <Route path="/contact" component={Contact}></Route> {/*Notre page contact*/}
          <Route component={NotFound}></Route> {/*Notre page 404*/}
        </Switch>

      </BrowserRouter>
    </>
  );
};

export default App;
