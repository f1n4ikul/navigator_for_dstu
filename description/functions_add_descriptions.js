function korpus3() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 3 корпуса";
	description.textContent = "Это описание 3-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus1() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	const ul = document.createElement("ul");
	const arr = [
		"СГФ",
		"АМУ",
		"БЖИЭ",
		"ИБМ",
		"ИиВТ",
		"МТО",
		"ММТ",
		"ПТР",
		"ТМ",
		"АгроПром",
		"ФКС",
		"ППД",
		"БВМ",
	];
	for (i = 0; i < arr.length; i++) {
		const li = document.createElement("li");
		li.textContent = arr[i];
		ul.appendChild(li);
	}

	// Устанавливаем содержимое элементов
	title.textContent = "Факультеты Главного корпуса:";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(ul);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus2() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 2 корпуса";
	description.textContent = "Это описание 2-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus4() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 4 корпуса";
	description.textContent = "Это описание 4-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus5() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 5 корпуса";
	description.textContent = "Это описание 5-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus6() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 6 корпуса";
	description.textContent = "Это описание 6-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus7() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");
	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 7 корпуса";
	description.textContent = "Это описание 7-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus8() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	const arr = ["АТК"];
	const ul = document.createElement("ul");

	for (i = 0; i < arr.length; i++) {
		const li = document.createElement("li");
		li.textContent = arr[i];
		ul.appendChild(li);
	}

	// Устанавливаем содержимое элементов
	title.textContent = "Факультеты 8 корпуса:";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(ul);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus9() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 9 корпуса";
	description.textContent = "Это описание 9-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus10() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var ul = document.createElement("ul");
	const arr = ["Авиастроение", "ИЭН", "ФЭН"];

	for (i = 0; i < arr.length; i++) {
		const li = document.createElement("li");
		li.textContent = arr[i];
		ul.appendChild(li);
	}

	// Устанавливаем содержимое элементов
	title.textContent = "Факультеты 10 корпуса:";
	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(ul);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus11() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Факультеты 11 корпуса";
	description.textContent = "Школа Икс,";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus12() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 12 корпуса";
	description.textContent = "Это описание 12-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus13() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 13 корпуса";
	description.textContent = "Это описание 13-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus14() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 14 корпуса";
	description.textContent = "Это описание 14-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus15() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 15 корпуса";
	description.textContent = "Это описание 15-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus16() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 16 корпуса";
	description.textContent = "Это описание 16-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}
function korpus17() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Факультеты 17 корпуса";
	description.textContent = "Сервис и Туризм";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}
function korpus18() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 18 корпуса";
	description.textContent = "Это описание 18-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}
function korpus19() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 19 корпуса";
	description.textContent = "Это описание 19-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}
function korpus20() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 20 корпуса";
	description.textContent = "Это описание 20-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}
function korpus24() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 24 корпуса";
	description.textContent = "Это описание 24-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}
function korpus25() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");

	const ul = document.createElement("ul");
	const arr = ["ДТ", "ИС", "ИЭС", "ПГС", "АДИ", "ЮрФак", "СТ"];

	for (i = 0; i < arr.length; i++) {
		const li = document.createElement("li");
		li.textContent = arr[i];

		ul.appendChild(li);
	}

	// Устанавливаем содержимое элементов
	title.textContent = "Факультеты 25-корпуса";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(ul);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}
function korpus26() {
	// Создаем элементы
	var descriptionBlock = document.createElement("div");
	var title = document.createElement("h2");
	var description = document.createElement("p");

	// Устанавливаем содержимое элементов
	title.textContent = "Заголовок 26 корпуса";
	description.textContent = "Это описание 26-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock.appendChild(title);
	descriptionBlock.appendChild(description);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock);

	// Возвращаем созданный блок описания
	return descriptionBlock;
}

function korpus22() {
	// Создаем элементы
	var descriptionBlock22 = document.createElement("div");
	var title22 = document.createElement("h2");
	var description22 = document.createElement("p");

	// Устанавливаем содержимое элементов
	title22.textContent = "Это 22 корпус";
	description22.textContent = "Это описание 22-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock22.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock22.appendChild(title22);
	descriptionBlock22.appendChild(description22);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock22);

	// Возвращаем созданный блок описания
	return descriptionBlock22;
}

function korpus21() {
	// Создаем элементы
	var descriptionBlock21 = document.createElement("div");
	var title21 = document.createElement("h2");
	var description21 = document.createElement("p");

	// Устанавливаем содержимое элементов
	title21.textContent = "Это 21 корпус";
	description21.textContent = "Это описание 21-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock21.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock21.appendChild(title21);
	descriptionBlock21.appendChild(description21);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock21);

	// Возвращаем созданный блок описания
	return descriptionBlock21;
}

function korpus23() {
	// Создаем элементы
	var descriptionBlock23 = document.createElement("div");
	var title23 = document.createElement("h2");
	var description23 = document.createElement("p");

	// Устанавливаем содержимое элементов
	title23.textContent = "Это 23 корпус";
	description23.textContent = "Это описание 23-ого блока.";

	// Добавляем классы или стили, если нужно
	descriptionBlock23.classList.add("description-block");

	// Добавляем элементы внутрь блока описания
	descriptionBlock23.appendChild(title23);
	descriptionBlock23.appendChild(description23);

	var contentTo = document.getElementById("content_to");
	contentTo.appendChild(descriptionBlock23);

	// Возвращаем созданный блок описания
	return descriptionBlock23;
}
