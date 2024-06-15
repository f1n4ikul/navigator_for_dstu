var description_korpus1,
	description_korpus2,
	description_korpus3,
	description_korpus4,
	description_korpus5,
	description_korpus6,
	description_korpus7,
	description_korpus8,
	description_korpus9,
	description_korpus10,
	description_korpus11,
	description_korpus12,
	description_korpus13,
	description_korpus14,
	description_korpus15,
	description_korpus16,
	description_korpus17,
	description_korpus18,
	description_korpus19,
	description_korpus20,
	description_korpus21,
	description_korpus22,
	description_korpus23,
	description_korpus24,
	description_korpus25,
	description_korpus26;

var to_varible_tagto = document.getElementById("tagto");
var to_varible_tagfrom = document.getElementById("tagfrom");
var getElem = document.getElementById("content_to");

var to_coord_build;

// Добавляем обработчик события "input" на поле ввода
to_varible_tagto.addEventListener("input", function (event) {
	var newValue = event.target.value;

	// Объект для сопоставления Названий с функциями
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

	// Предыдущее описание для удаления
	if (window.currentDescription) {
		window.currentDescription.remove();
		window.currentDescription = undefined;
	}

	// Если функция существует для данного корпуса, вызови её и сохраняем описание
	if (korpusDescriptions[newValue]) {
		window.currentDescription = korpusDescriptions[newValue]();
	}
	// if (window.currentRemoveFunction) {
	// 	window.currentRemoveFunction(); // Удаляем предыдущие объекты
	// }

	// // Сохраняем новую функцию удаления
	// window.currentRemoveFunction = show_korpus(point_kampus[newValue], 17, 30);

	// Какой-то общий функционал для всех корпусов
	if (newValue in point_kampus) {
		to_coord = point_kampus[newValue];
		selectedTags.push(to_coord);
		markers.push(
			new mapgl.Marker(map, {
				coordinates: to_coord,
				icon: "https://docs.2gis.com/img/dotMarker.svg",
			})
		);
		console.log(to_coord, from_coord, "its test 4");
		// Roteuting(from_coord, to_coord);
	}
});

to_varible_tagfrom.addEventListener("input", function (event) {
	const newValue = event.target.value;

	if (!availableTags.includes(newValue)) {
		// Если значение из input не существует в массиве доступных тегов,
		// то можно выйти из функции или выполнить какие-то другие действия
		console.error(
			"Выбранное значение тега не найдено среди доступных тегов."
		);
		return;
	}

	from_coord = point_kampus[newValue];
	if (!from_coord) {
		// Проверка на существование координат для выбранного значения
		console.error("Координаты для выбранного значения не найдены.");
		return;
	}

	if (newValue in point_kampus) {
		from_coord = point_kampus[newValue];
		selectedTags.push(from_coord);
		markers.push(
			new mapgl.Marker(map, {
				coordinates: to_coord,
				icon: "https://docs.2gis.com/img/dotMarker.svg",
			})
		);
		console.log(to_coord, from_coord, "its test 2");
	}
});
