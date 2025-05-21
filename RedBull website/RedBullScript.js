
function displayDriver(driverName) {
	fetch("https://raw.githubusercontent.com/tom-chapman-5/driver_data/refs/heads/main/RedBull_drivers.json")
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then(data => {
			const driver = data.find(d => d.name === driverName);

			if (driver) {
				const driverCard = document.createElement('div');
				driverCard.classList.add('driver-card');

				driverCard.innerHTML = `
					<h2>${driver.name}</h2>
					<img src="${driver.pic}" alt="${driver.name}" width="20%">
					
					<h3>Stats</h3>
					<p>Total Seasons: ${driver.seasons}</p>
					<p>Total Wins: ${driver.wins}</p>
					<p>Total Poles: ${driver.poles}</p>
					<p>Total Races: ${driver.races}</p>
					
					<h3>Stats with RedBull</h3>
					<p>Seasons: ${driver.seasons_redbull}</p>
					<p>Wins: ${driver.wins_redbull}</p>
					<p>Poles: ${driver.poles_redbull}</p>
					<p>Races: ${driver.races_redbull}</p>
					
					<h3>Information</h3>
					<p>Description:</p>
					<p>${driver.description}</p>
					<p>Career:</p>
					<p>${driver.career}</p>
				`;
				
				box.appendChild(driverCard);
			}
		})
}

function deleteInfo(driverName) {
	const driverInfoDiv = document.getElementById("box");
        driverInfoDiv.innerHTML = '';
	displayDriver(driverName);
}

function displayStats() {
	const driverInfoDiv = document.getElementById("box");
        driverInfoDiv.innerHTML = '';
	const driverCard = document.createElement('div');
		driverCard.classList.add('driver-card');
	driverCard.innerHTML = `
		<h2>Stats</h2>
		<ul>
			<li style="float: none;">WDC: 8</li>
			<li style="float: none;">WCC: 6</li>
			<li style="float: none;">Race Wins: 123</li>
			<li style="float: none;">Podiums: 285</li>
			<li style="float: none;">Poles: 106</li>
			<li style="float: none;">Races: 400</li>
		</ul>
		<h2>2025 Stats</h2>
		<ul>
			<li style="float: none;">Race Wins: 1</li>
			<li style="float: none;">Poles: 3</li>
			<li style="float: none;">Sprint Wins: 0</li>
			<li style="float: none;">Points: 105</li>
			<li style="float: none;">Podiums: 3</li>
		</ul>
	`;
	box.appendChild(driverCard);
}
