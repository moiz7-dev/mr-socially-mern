import "./App.scss";
import Layout from "./components/Layout/Layout";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Posts from "./components/Post/Posts/Posts";
import AddPost from "./components/Post/AddPost/AddPost";

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
