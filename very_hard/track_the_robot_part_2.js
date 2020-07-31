function trackRobot(...steps) {
	let x = 0;
	let y = 0;
	for (let i = 0; i < steps.length; i++) {
		const direction = i % 4;
		if (direction === 0) y += steps[i];
		else if (direction === 1) x += steps[i];
		else if (direction === 2) y -= steps[i];
		else x -= steps[i];
	}
	return [x, y];
}
