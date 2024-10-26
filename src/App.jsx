import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Others from "./components/Others";
import Difference from "./components/Difference";

const App = () => {
	return (
		<main className="bg-black">
			<Navbar />
			<Hero />
			<Highlights />
			<Features />
			<HowItWorks />
			<Others />
			<Difference />
			<Footer />
		</main>
	);
};

export default App;
