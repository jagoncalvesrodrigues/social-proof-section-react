import CARDS_INFO from './components/constants/rates-info';
import CARDS_OPINIONS from './components/constants/userOpinion-info';
import Container from './components/Container/Container';
import InfoBox from './components/Container/InfoBox';
import Rates from './components/Rates/Rates';
import RatesBox from './components/Rates/RatesBox';
import Texts from './components/texts/Texts';
import Title from './components/titles/Titles';
import OpinionBox from './components/UserOpinion/OpinionBox';
import UserOpinion from './components/UserOpinion/UserOpinion';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Container>
				{/* COMO METER TODO AQUI SIN CREAR UN COMPONENTE */}
				<InfoBox>
					<Title/>
					<Texts/>
					<RatesBox>
						{CARDS_INFO.map(rate => (
							<Rates key={rate.id}{...rate}/>
						))}
					</RatesBox>
				</InfoBox>
				<OpinionBox>
					{CARDS_OPINIONS.map(opinion=>(
						<UserOpinion key={opinion.id}{...opinion}/>
					))}
				</OpinionBox>
			</Container>
		</div>
	);
};

export default App;
