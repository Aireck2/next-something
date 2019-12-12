import { Layout } from "antd";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
const { Header, Content, Footer } = Layout;
const Home = () => (
  <Layout>
    <Header>
      <Navbar />
    </Header>

    <Content>
      <Main />
    </Content>

    <Footer></Footer>
  </Layout>
);
export default Home;
