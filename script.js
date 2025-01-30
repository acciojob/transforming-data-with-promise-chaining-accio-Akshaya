document.getElementById("btn").addEventListener("click", function () {
    const inputValue = Number(document.getElementById("ip").value);
    const outputDiv = document.getElementById("output");

    if (isNaN(inputValue)) {
        outputDiv.textContent = "Error: Invalid input";
        return;
    }

    // Promise chain
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.textContent = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    .then(num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multiplied = num * 2;
                outputDiv.textContent = `Result: ${multiplied}`;
                resolve(multiplied);
            }, 1000);
        });
    })
    .then(num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const subtracted = num - 3;
                outputDiv.textContent = `Result: ${subtracted}`;
                resolve(subtracted);
            }, 1000);
        });
    })
    .then(num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const divided = num / 2;
                outputDiv.textContent = `Result: ${divided}`;
                resolve(divided);
            }, 1000);
        });
    })
    .then(num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const added = num + 10;
                outputDiv.textContent = `Result: ${added}`;
                resolve(added);
            }, 1000);
        });
    })
    .then(finalResult => {
        setTimeout(() => {
            outputDiv.textContent = `Final Result: ${finalResult}`;
        }, 1000);
    })
    .catch(error => {
        outputDiv.textContent = `Error: ${error}`;
    });
});

