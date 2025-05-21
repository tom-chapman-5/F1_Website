
function displayDriver(driverName) {
	fetch("https://raw.githubusercontent.com/tom-chapman-5/driver_data/refs/heads/main/McLaren_drivers.json")
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
					
					<h3>Stats with McLaren</h3>
					<p>Seasons: ${driver.seasons_mclaren}</p>
					<p>Wins: ${driver.wins_mclaren}</p>
					<p>Poles: ${driver.poles_mclaren}</p>
					<p>Races: ${driver.races_mclaren}</p>
					
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
			<li style="float: none;">WDC: 12</li>
			<li style="float: none;">WCC: 9</li>
			<li style="float: none;">Race Wins: 193</li>
			<li style="float: none;">Podiums: 532</li>
			<li style="float: none;">Poles: 167</li>
			<li style="float: none;">Races: 975</li>
		</ul>
		<h2>2025 Stats</h2>
		<ul>
			<li style="float: none;">Race Wins: 4</li>
			<li style="float: none;">Poles: 3</li>
			<li style="float: none;">Strint Wins: 1</li>
			<li style="float: none;">Points: 203</li>
			<li style="float: none;">Podiums: 8</li>
		</ul>
	`;
	box.appendChild(driverCard);
}
