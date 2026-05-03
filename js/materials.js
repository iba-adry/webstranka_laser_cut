fetch("data/materials.json")
    .then(response => response.json())
    .then(data => {
        // Select table body
        const tableBody = document.querySelector("#materialsTable tbody");

        // Loop through materials
        data.materials.forEach(material => {
            material.types.forEach(type => {
                // Create table row
                const row = document.createElement("tr");

                // Insert data into row
                row.innerHTML = `
                    <td>${material.name}</td>
                    <td>${type.type}</td>
                    <td>${type.settings.power}</td>
                    <td>${type.settings.speed}</td>
                    <td>${type.settings.repetitions}</td>
                `;

                // Add row to table
                tableBody.appendChild(row);
            });
        });
    })
    .catch(error => {
        console.error("Error loading materials data:", error);
    });