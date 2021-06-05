import './sass/style.scss';
import '../node_modules/bootstrap/js/dist/collapse.js';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Technologies from './pages/Technologies/Technologies';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Layout from './Layout/Layout';




function App() {

  const header = (
    <Navbar />
  )
  const content = (
    <Switch>
      <Route path='/technologies' component={Technologies} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
      <Route exact path='/' component={Home} />
    </Switch>
  )
  const footer = (
    <Footer />
  )

  return (
    <>
      <Router>
        <Layout
          header={header}
          content={content}
          footer={footer}
        />
      </Router>
    </>
  )
}

export default App;