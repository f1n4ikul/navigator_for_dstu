function toggleCheckbox(checkboxId) {
	const checkbox = document.getElementById(checkboxId);
	checkbox.checked = !checkbox.checked;

	const otherCheckboxes = document.querySelectorAll(
		'input[type="radio"]:not(#' + checkboxId + ")"
	);
	otherCheckboxes.forEach((cb) => {
		cb.checked = false;
	});
}

document.getElementById("Route_Car").onclick = () => {
	selected_Route = "RoteutingCar";
	toggleCheckbox("checkbox1");
};
document.getElementById("Route_Bike").onclick = () => {
	selected_Route = "RoteutingBike";
	toggleCheckbox("checkbox3");
};
document.getElementById("Route_Pedestrian").onclick = () => {
	selected_Route = "RoteutingPedestrian";
	toggleCheckbox("checkbox2");
};

document.getElementById("getRoute").onclick = () => {
	if (selected_Route == "RoteutingCar") {
		RoteutingCar(from_coord, to_coord);
	} else if (selected_Route == "RoteutingPedestrian") {
		RoteutingPedestrian(from_coord, to_coord);
	} else if (selected_Route == "RoteutingBike") {
		RoteutingPedestrian(from_coord, to_coord);
	} else {
		alert("Пожалуйста, выберите тип маршрута");
	}
};
