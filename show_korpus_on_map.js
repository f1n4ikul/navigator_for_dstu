function to_move_func(center, zoom, rotation) {
	if (!center) {
		alert("Пожалуйста, введите корректные данные.");
		return; // Прерываем выполнение функции, если данные неверны
	}
	map.setZoom(zoom).setCenter(center).setRotation(rotation);
}

// Используйте функцию стрелки для передачи аргументов в myFunction
document.getElementById("to_move").addEventListener("click", () => {
	to_move_func(to_coord, 19, 30);
});
document.getElementById("from_move").addEventListener("click", () => {
	to_move_func(from_coord, 19, 30);
});
