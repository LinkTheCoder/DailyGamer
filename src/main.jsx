import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import "./index.css";
import App from "./App";
import News from "./pages/news";
import Nav from "./components/nav";
import NavSmall from "./components/navsmall";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Nintendo" element={<News NameNews="nintendo+games" />} />
          <Route path="/Playstation" element={<News NameNews="playstation+games" />} />
          <Route path="/Xbox" element={<News NameNews="xbox+games" />} />
          <Route path="/PC" element={<News NameNews="pc+games" />} />
          <Route path="/Retro" element={<News NameNews="retro+games" />} />
          <Route path="/Indie" element={<News NameNews="indie+games" />} />
        </Routes>
        <NavSmall />
      </BrowserRouter>
      
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
