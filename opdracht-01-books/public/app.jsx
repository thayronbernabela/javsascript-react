import Header from './components/header';
import Layout from './components/layout';
import BookList from './components/bookList';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <BookList />
      </Layout>
    </>
  );
}

export default App;
