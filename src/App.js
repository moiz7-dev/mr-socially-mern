import "./App.scss";
import Layout from "./components/layout/Layout";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AddPost from "./components/AddPost/AddPost";
import Posts from "./components/Posts/Posts";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000'
      },
    }
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Sora", "Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <Layout>
        <AddPost />
        <Posts />
      </Layout>
    </div>
    </ThemeProvider>
  );
}

export default App;
