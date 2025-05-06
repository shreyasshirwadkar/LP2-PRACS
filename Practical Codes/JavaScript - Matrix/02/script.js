function createTable() {
    const table1Input = document.getElementById("table1Input").value;
    const table2Input = document.getElementById("table2Input").value;

    const table1Regex = /^(\d+)(#)(\d+)(#)(\d+)$/;
    const table2Regex = /^(\d+)(#)(\d+)(#)(\d+)$/;

    if (!table1Regex.test(table1Input) || !table2Regex.test(table2Input)) {
        alert("Invalid input format. Please enter rows#columns#value (e.g., 3#3#3)");
        return;
    }

    const table1Data = table1Input.split("#")
    const table2Data = table2Input.split("#")


    const container = document.getElementById("container");

    // Clear any existing tables in the container
    container.innerHTML = "";

    // Create table elements and headers
    const table1 = document.createElement("table");
    const table2 = document.createElement("table");
    let table3 = document.createElement("table");

    const table1Header = document.createElement("tr");
    const table2Header = document.createElement("tr");
    const table3Header = document.createElement("tr");

    for (let i = 0; i < table1Data[1]; i++) {
        const th1 = document.createElement("th");
        th1.textContent = `Column ${i + 1}`;
        table1Header.appendChild(th1);

        const th2 = document.createElement("th");
        th2.textContent = `Column ${i + 1}`;
        table2Header.appendChild(th2);

        const th3 = document.createElement("th");
        th3.textContent = `Column ${i + 1}`;
        table3Header.appendChild(th3);
    }

    table1.appendChild(table1Header);
    table2.appendChild(table2Header);
    table3.appendChild(table3Header);

    // Create table bodies and populate cells
    const table1Body = document.createElement("tbody");
    const table2Body = document.createElement("tbody");
    const table3Body = document.createElement("tbody");

    for (let i = 0; i < table1Data[0]; i++) {
        const tr1 = document.createElement("tr");
        const tr2 = document.createElement("tr");
        const tr3 = document.createElement("tr");

        for (let j = 0; j < table1Data[1]; j++) {
            const td1 = document.createElement("td");
            td1.textContent = (Number(table1Data[2]) + Number(j)) * (i + 1);
            tr1.appendChild(td1);

            const td2 = document.createElement("td");
            td2.textContent = (Number(table2Data[2]) + Number(j)) * (i + 1);
            tr2.appendChild(td2);


            const td3 = document.createElement("td");
            td3.textContent = ((Number(table1Data[2]) + Number(j)) * (i + 1)) * (Number(table2Data[2]) + Number(j)) * (i + 1);
            tr3.appendChild(td3);
            tr3.style.backgroundColor = "lightblue";
        }

        table1Body.appendChild(tr1);
        table2Body.appendChild(tr2);
        table3Body.appendChild(tr3);
    }

    table1.appendChild(table1Body);
    table2.appendChild(table2Body);
    table3.appendChild(table3Body);

    // Create the third table if table1Data and table2Data are equal
    if (JSON.stringify(table1Data) === JSON.stringify(table2Data)) {
        table3 = table1.cloneNode(true); // Clone the first table
    }

    // Append tables to the container
    container.appendChild(table1);
    container.appendChild(table2);
    container.appendChild(table3);
}