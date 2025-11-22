<template>
	<div>
		<header></header>
		<div class="main-wrapper">
			<div class="container">
				<div class="card card_price">
					<div class="card__title">Оплата маршрута</div>
					<div class="price__optionsList">
						<div class="price__optionsListTitle">Метро</div>
						<div class="price__optionsListItems">
							<Option
								v-for="item in priceOptionsMetro"
								:text="item.text"
								:info="item.info"
								:active="activePriceMetro == item.text"
								:key="item.text"
								@click="activePriceMetro = item.text"
							/>
						</div>
					</div>
					<div class="price__optionsList">
						<div class="price__optionsListTitle">Электричка</div>
						<div class="price__optionsListItems">
							<Option
								v-for="item in priceOptionsElka"
								:text="item.text"
								:info="item.info"
								:active="activePriceElka == item.text"
								:key="item.text"
								@click="activePriceElka = item.text"
							/>
						</div>
					</div>
					<div class="price__optionsList">
						<div class="price__optionsListTitle">Трамвай</div>
						<div class="price__optionsListItems">
							<Option
								v-for="item in priceOptionsTram"
								:text="item.text"
								:info="item.info"
								:active="activePriceTram == item.text"
								:key="item.text"
								@click="activePriceTram = item.text"
							/>
						</div>
					</div>
				</div>
				<div class="card card_path">
					<div class="card__title">Маршрут г. Раменское - РУТ (МИИТ)</div>

					<div class="pathsContainer">
						<div v-for="(item, index) in paths" :key="index" class="pathBlock">
							<div v-for="({ name, road, color }, index2) in item.transport" :key="index2" class="pathTransport">
								<div class="pathTransportTitle">{{ name }}</div>
								<div class="pathTransportRoad" :style="{ backgroundColor: color }">{{ road }}</div>
							</div>
							<a :href="item.link" target="_blank">
								<Option :text="item.price + ' руб'" :active="true" />
							</a>
						</div>
					</div>
				</div>
				<div class="card card_moscow">
					<div class="card__title">Карта москвича</div>
					<div class="card__text">
						Стоимость поездок туда и обратно на месяц:<br /><br /><strong
							>{{ getMinPrice }} руб * 30 дней * 2 = {{ getMinPrice * 30 * 2 }}</strong
						>
					</div>
					<br />
					<div class="card__text">Карта москвича на месяц стоит <strong>1160 руб</strong></div>
					<div class="card__attention">По карте Москвича<br /><span style="color: #ff7676">выгодно</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const activePriceMetro = ref('Тройка');
const activePriceElka = ref('Тройка');
const activePriceTram = ref('Тройка');

const priceOptionsMetro = {
	Тройка: {
		text: 'Тройка',
		info: '67 р',
		value: 67,
	},
	Карта: {
		text: 'Карта',
		info: '74 р',
		value: 74,
	},
	FacePay: {
		text: 'FacePay',
		info: '63 р',
		value: 63,
	},
};

const priceOptionsElka = {
	Тройка: {
		text: 'Тройка',
		info: '76 р',
		value: 76,
	},
	Карта: {
		text: 'Карта',
		info: '97 р',
		value: 97,
	},
};

const priceOptionsTram = {
	Тройка: {
		text: 'Тройка',
		info: '67 р',
		value: 67,
	},
	Карта: {
		text: 'Карта',
		info: '74 р',
		value: 74,
	},
};

const paths = computed(() => [
	{
		transport: [
			{
				name: 'Электричка',
				icon: '',
				road: 'D3',
				color: '#EA5B02',
			},
			{
				name: 'Метро',
				icon: '',
				road: '11',
				color: '#60BFBF',
			},
		],
		price: +getMetroPrice.value + +getElkaPrice.value,
		link: 'https://yandex.ru/maps/10738/lubercy/?ll=37.915154%2C55.681112&mode=routes&rtext=55.567586%2C38.225004~55.790333%2C37.604449&rtn=1&rtt=mt&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA2MzQ3NBJF0KDQvtGB0YHQuNGPLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KDQsNC80LXQvdGB0LrQvtC1IgoNZ-YYQhU1RV5C~ymapsbm1%3A%2F%2Forg%3Foid%3D67669664555&source=serp_navig&z=9',
	},
	{
		transport: [
			{
				name: 'Электричка',
				icon: '',
				road: 'D3',
				color: '#EA5B02',
			},
			{
				name: 'Трамвай',
				icon: '',
				road: '50',
				color: '#FF4433',
			},
		],
		price: +getTramPrice.value + +getElkaPrice.value,
		link: 'https://yandex.ru/maps/?ll=37.913086%2C55.521947&mode=routes&rtext=55.567586%2C38.225004~55.790333%2C37.604449&rtn=2&rtt=mt&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA2MzQ3NBJF0KDQvtGB0YHQuNGPLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KDQsNC80LXQvdGB0LrQvtC1IgoNZ-YYQhU1RV5C~ymapsbm1%3A%2F%2Forg%3Foid%3D67669664555&source=serp_navig&z=9',
	},
	{
		transport: [
			{
				name: 'Электричка',
				icon: '',
				road: 'Экспресс',
				color: '#5A4680',
			},
			{
				name: 'Трамвай',
				icon: '',
				road: '50',
				color: '#FF4433',
			},
		],
		price: +getTramPrice.value + 310,
		link: 'https://yandex.ru/maps/10738/lubercy/?ll=37.915154%2C55.681112&mode=routes&rtext=55.567586%2C38.225004~55.790333%2C37.604449&rtt=mt&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzA2MzQ3NBJF0KDQvtGB0YHQuNGPLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KDQsNC80LXQvdGB0LrQvtC1IgoNZ-YYQhU1RV5C~ymapsbm1%3A%2F%2Forg%3Foid%3D67669664555&source=serp_navig&z=9',
	},
]);

const getMetroPrice = computed(() => priceOptionsMetro[activePriceMetro.value].value);
const getElkaPrice = computed(() => priceOptionsElka[activePriceElka.value].value);
const getTramPrice = computed(() => priceOptionsTram[activePriceTram.value].value);

const getMinPrice = computed(() => {
	const metro_elka = +getMetroPrice.value + +getElkaPrice.value;
	const elka_tram = +getElkaPrice.value + +getTramPrice.value;

	const prices = [metro_elka, elka_tram];
	return Math.min(...prices);
});
</script>

<style>
html,
body {
	height: 100%;
}

header {
	background-color: #252b2a;
	height: 60px;
	width: 100%;
	margin-bottom: 200px;
}

* {
	margin: 0;
	padding: 0;
	font-family: Montserrat, sans-serif;
}

a {
	text-decoration: none;
}

body {
	background-color: #e9e9e9;
}

body {
	margin: 0;
	padding: 0;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

.main-wrapper {
	max-width: 1280px;
	margin: 0 auto;
	flex: 1;
}

.container {
	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: auto auto;
	grid-template-areas:
		'price path'
		'price moscow';
	gap: 20px;
	margin-bottom: 100px;
}

.card {
	background-color: #ffffff;
	border-radius: 16px;
	padding: 32px 42px;
}

.card_price {
	grid-area: price;
}

.card_path {
	grid-area: path;
}

.card_moscow {
	grid-area: moscow;
}

.card__title {
	font-size: 20px;
	font-weight: 700;
	margin-bottom: 42px;
	color: #252b2a;
}

.price__optionsList {
	margin-bottom: 24px;
}

.price__optionsListItems {
	display: flex;
	gap: 8px;
}

.price__optionsListTitle {
	font-weight: 700;
	font-size: 18px;
	margin-bottom: 10px;
}

.card__attention {
	padding: 14px 80px 14px 14px;
	background-color: #fdf4f4;
	font-weight: 700;
	width: fit-content;
	border-radius: 16px;
	margin: 32px 0 0 auto;
}

.pathBlock {
	display: flex;
	gap: 10px;
	position: relative;
}

.pathsContainer {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.pathTransport {
	display: flex;
	gap: 6px;
	align-items: center;
}

.pathTransport:not(:last-child)::after {
	content: '';
	width: 50px;
	height: 3px;
	background-color: #d9d9d9;
	border-radius: 2px;
	margin: 0 15px;
}

.pathTransportRoad {
	padding: 2px 3px 1px;
	line-height: 14px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	width: fit-content;
	color: #ffffff;
	font-size: 8px;
	font-weight: 700;
}

.pathTransportTitle {
	font-size: 18px;
	font-weight: 700;
}

@media (max-width: 1230px) {
	.container {
		display: flex;
		flex-direction: column;
	}

	.main-wrapper {
		max-width: 700px;
	}

	.price__optionsListItems {
		flex-wrap: wrap;
	}

	header {
		margin-bottom: 60px;
	}
}

@media (max-width: 700px) {
	.pathBlock {
		flex-wrap: wrap;
	}

	.pathTransport:not(:last-child)::after {
		width: 5px;
	}
}
</style>
