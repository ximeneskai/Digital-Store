import Colecoes from "../components/Colecoes";
import Destaques from "../components/Destaques";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";

const HomePage = () => {
    return (
    <>
    <Header />
    <Layout />
    <Colecoes />
    <Destaques />
    <ProductCard />
    <Section/>
    <Footer />
    </>
    );
}
 
export default HomePage;