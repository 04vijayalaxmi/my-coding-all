const downloadButton = document.getElementById("downloadButton"); 
		const countdown = document.getElementById("countdown"); 
		const downloadLink = "http://127.0.0.1:5501/index2.html"; 

		let timer; 
		let countdownValue = 5; 

		downloadButton.addEventListener("click", function () { 
			countdown.style.display = "block"; 

			timer = setInterval(function () { 

				if (countdownValue <= 0) { 
					clearInterval(timer); 
					countdown.innerHTML = "Downloading..."; 
					setTimeout(function () { 
						const a = document.createElement("a"); 
						a.style.display = "none"; 
						a.href = downloadLink; 
						a.setAttribute("download", ""); 
						document.body.appendChild(a); 
						a.click(); 
					}, 1000); 
				} else { 
					countdown.innerHTML = 
				`Starting download in ${countdownValue} seconds...`; 
				} 
				countdownValue--; 
			}, 1000); 
		});