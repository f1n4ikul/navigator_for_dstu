const map = new mapgl.Map("container", {
	center: [39.713214, 47.236867],
	zoom: 17,
	key: process.env.API_KEY,
});

const building = [
	[39.76721, 47.246014], // корпус 9
	[39.7576215714366, 47.2492756534822], // k10 пл. Страны Cоветов, 1,
	[39.710975, 47.238049], // - 8 корпус
	[39.712324, 47.238304], // - 7 корпус
	[39.713041, 47.238447], // - 2 корпус
	[39.712304, 47.238777], // 6 корпус
	[39.710004, 47.238381], // - 4 корпус
	[39.705064, 47.231491], // - корпус на варфоломеева 215
	[39.7318081010745, 47.2231193550741], // k 22 and k23
	[39.7322121285642, 47.2238252154089], // k21
	[39.653966, 47.251092], // - Учебный военный центр Шаповалова, 2
	[39.7340194631063, 47.2232108384907], // - к 25
	[39.7329956068245, 47.22301094226], // - к 24
	[39.7329427298842, 47.2233790542979], // - к 26
	[39.7093213044641, 47.2407639769308], // - манеж
	[39.77297, 47.26229], // - казахская улица 57а (кадетский)
	[39.7725022347446, 47.2596705193141], // - корпус №12
	[39.6546034605336, 47.2510632291049], // k11 Ул. Шаповалова, 2а
];

building.forEach((coord) => {
	const markernew = new mapgl.Marker(map, {
		coordinates: coord,
	});
});

const marker = new mapgl.Marker(map, {
	coordinates: [39.712242, 47.237353],
	icon: "https://docs.2gis.com/img/mapgl/marker.svg",
});

const directions = new mapgl.Directions(map, {
	directionsApiKey: process.env.API_KEY,
});
const markers = [];

let firstPoint;
let secondPoint;

var point_kampus = {
	"Главный корпус": [39.712279, 47.237204],
	"Корпус № 2": [39.713041, 47.238447],
	"Корпус № 3": [39.709728, 47.23807],
	"Корпус № 4": [39.710004, 47.238381],
	"Корпус № 5": [39.709728, 47.23807],
	"Корпус № 6": [39.712304, 47.238777],
	"Корпус № 7": [39.712324, 47.238304],
	"Корпус № 9": [39.76721, 47.246014],
	"Корпус № 8": [39.710975, 47.238049],
	"Корпус № 26": [39.7329427298842, 47.2233790542979],
	"Корпус № 21": [39.7322121285642, 47.2238252154089],
	"Корпус № 22": [39.7318081010745, 47.2231193550741],
	"Корпус № 23": [39.7318081010745, 47.2231193550741],
	"Корпус № 24": [39.7329956068245, 47.22301094226],
	"Корпус № 25": [39.7340194631063, 47.2232108384907],
	Манеж: [39.7093213044641, 47.2407639769308],
	"Корпус № 10": [39.7576215714366, 47.2492756534822],
	"Корпус № 11": [39.6546034605336, 47.2510632291049],
	"Корпус № 12": [39.7725022347446, 47.2596705193141],
};

var selectedTags = [];

var from_coord;

const availableTags = [
	"Главный корпус",
	"Корпус № 2",
	"Корпус № 3",
	"Корпус № 4",
	"Корпус № 5",
	"Корпус № 6",
	"Корпус № 7",
	"Корпус № 8",
	"Корпус № 9",
	"Корпус № 10",
	"Корпус № 11",
	"Корпус № 12",
	"Корпус № 13",
	"Корпус № 14",
	"Корпус № 15",
	"Корпус № 16",
	"Корпус № 17",
	"Корпус № 18",
	"Корпус № 19",
	"Корпус № 20",
	"Корпус № 21",
	"Корпус № 22",
	"Корпус № 23",
	"Корпус № 24",
	"Корпус № 25",
	"Корпус № 26",
];

$(function () {
	var count = 0;
	$("#tagfrom").autocomplete({
		source: availableTags,
		select: function (event, ui) {
			from_coord = point_kampus[ui.item.value];
			console.log("это метка из - ", from_coord);
			markers.push(
				new mapgl.Marker(map, {
					coordinates: from_coord,
					icon: "https://docs.2gis.com/img/dotMarker.svg",
				})
			);
			if (selectedTags.length != 0) {
				console.log("Метка из tagto уже была выбрана ранее");
			} else {
				console.log("Метка из tagto еще не была выбрана");
			}
		},
	});
});

var to_coord;

var korpusDescriptions = {
	"Главный корпус": korpus1,
	"Корпус № 2": korpus2,
	"Корпус № 3": korpus3,
	"Корпус № 4": korpus4,
	"Корпус № 5": korpus5,
	"Корпус № 6": korpus6,
	"Корпус № 7": korpus7,
	"Корпус № 8": korpus8,
	"Корпус № 9": korpus9,
	"Корпус № 10": korpus10,
	"Корпус № 11": korpus11,
	"Корпус № 12": korpus12,
	"Корпус № 13": korpus13,
	"Корпус № 14": korpus14,
	"Корпус № 15": korpus15,
	"Корпус № 16": korpus16,
	"Корпус № 17": korpus17,
	"Корпус № 18": korpus18,
	"Корпус № 19": korpus19,
	"Корпус № 20": korpus20,
	"Корпус № 21": korpus21,
	"Корпус № 22": korpus22,
	"Корпус № 23": korpus23,
	"Корпус № 24": korpus24,
	"Корпус № 25": korpus25,
	"Корпус № 26": korpus26,
};

$(function () {
	$("#tagto").autocomplete({
		source: availableTags,
		select: function (event, ui) {
			to_coord = point_kampus[ui.item.value];
			console.log("это метка в - ", to_coord);
			selectedTags.push(to_coord);
			markers.push(
				new mapgl.Marker(map, {
					coordinates: to_coord,
					icon: "https://docs.2gis.com/img/dotMarker.svg",
				})
			);

			if (window.currentDescription) {
				window.currentDescription.remove();
				window.currentDescription = undefined;
			}

			if (korpusDescriptions[newValue]) {
				window.currentDescription = korpusDescriptions[newValue]();
			}
		},
	});
});

function Roteuting(secondPoint, firstPoint) {
	if (firstPoint && secondPoint) {
		directions.pedestrianRoute({
			points: [firstPoint, secondPoint],
		});
	}
}

var selected_Route = null;
function RoteutingCar(secondPoint, firstPoint) {
	if (firstPoint && secondPoint) {
		directions.carRoute({
			points: [firstPoint, secondPoint],
		});
	} else {
		console.log("not coord");
	}
	console.log("func rotate car");
}

function RoteutingPedestrian(secondPoint, firstPoint) {
	if (firstPoint && secondPoint) {
		directions.pedestrianRoute({
			points: [firstPoint, secondPoint],
		});
	} else {
		console.log("not coord");
	}
	console.log("func rotate pedestrian");
}

const buttonText = "Reset points";

const btn = `<button id="reset">${buttonText}</button> `;
new mapgl.Control(map, btn, {
	position: "topleft",
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
	firstPoint = undefined;
	secondPoint = undefined;
	directions.clear();
	selectedTags = [];
});
