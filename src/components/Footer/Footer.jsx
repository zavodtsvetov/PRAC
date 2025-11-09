import { useEffect, useState } from 'react';
import { Icon } from '../../components';
import styled from 'styled-components';
const StyledDate = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temp, setTemp] = useState('');
	const [weather, setWeather] = useState('');
	const date = new Date().toLocaleString('ru', {
		day: 'numeric',
		month: 'long',
	});

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=beeba7c971b326c83ed0b036306433cf',
		)
			.then((response) => response.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemp(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);
	return (
		<>
			<div className={className}>
				<div>
					<div>Блог веб-разработчика</div>
					<div>meatfough@mail.ru</div>
				</div>
				<div>
					<StyledDate>
						<span>{date}</span>
						<Icon
							id="fa-calendar"
							fontSize="20px"
							padding="0 0 0 10px"
						/>{' '}
					</StyledDate>
					<div>
						{' '}
						{city}, {weather} {temp} °C
					</div>
				</div>
			</div>
		</>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px 0 40px;
	height: 90px;
	width: 1000px;
	box-shadow: 0px 2px 17px #000;
	background-color: white;
	font-weight: bold;
`;
