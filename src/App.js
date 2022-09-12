import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Index';
import { MainContainer } from './components/Index';
import { CreateContainer } from './components/Index';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary ">
        <Header />
        <main className="md:mt-20 mt-14 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
