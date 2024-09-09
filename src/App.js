import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <header className="App-header flex flex-col items-center space-y-4">
        <img src={logo} className="App-logo w-32 h-32 animate-spin-slow" alt="logo" />
        <h1 className="text-5xl font-extrabold">Welcome to React</h1>
        <p className="text-lg font-light">
          Edit <code className="bg-gray-800 p-1 rounded">src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h2 className="text-3xl font-bold underline text-red-400 mt-8">
        Hello world!
      </h2>

      <footer className="mt-12">
        <p className="text-sm text-gray-500">
          Built with React and Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
