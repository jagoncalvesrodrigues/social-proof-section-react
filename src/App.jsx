import Button from './components/button/Button';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<h1>10,000+ of our users love our products.</h1>
			<p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
			<Rates text="Rated 5 Stars in Reviews"/>
			<Rates text="Rated 5 Stars in Report Guru"/>
			<Rates text="Rated 5 Stars in BestTech"/>
			<Opinions>
				<UserOpinion/>
				<UserOpinion/>
				<UserOpinion/>
			</Opinions>
			{/* <h1>Curso de React</h1>
			<Button color='steelblue'>Click Me!</Button>
			<Button color='#f0f'>Click Me!</Button> */}
		</div>
	);
};

export default App;
