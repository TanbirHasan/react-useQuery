import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { SuperHeroes } from './components/SuperHeroes';
import { RQSuperHeroes } from './components/RQSuperHeroes';
import { ReactQueryDevtools } from 'react-query/devtools'

import {
 
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { RQSuperHero } from './components/RQSuperHero';
import { RQcars } from './components/RQcars';
import { RQInfiniteCars } from './components/RQInfiniteCars';
import { PostingHeros } from './components/PostingHeros';

const queryClient = new QueryClient()


function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
       
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/superheroes" element={<SuperHeroes/>}/>
        <Route path="/rqsuperheroes" element={<RQSuperHeroes/>}/>
        <Route path="/rqcars" element={<RQcars/>}/>
        <Route path="/postsuperheroes" element={<PostingHeros/>}/>
        <Route path="/rqinfinitecars" element={<RQInfiniteCars/>}/>
        <Route path="/rqsuperheroes/:id" element={<RQSuperHero/>}/>
      </Routes>

      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
      
  
      
    </div>
  );
}

export default App;
