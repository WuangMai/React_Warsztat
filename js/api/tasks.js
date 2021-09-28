import {API_KEY, API_URL} from "./constants"

export const getTasks = async (successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }

        successCallback(data.data);
    } catch (err) {
        console.error(err);
    }
};

export const setTask = async (newTask, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: "POST",
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        });

        const data = await response.json();
        if (data.error) {
            throw new Error("Błąd!");
        }

        getTasks(successCallback);

    } catch (err) {
        console.log(err);
    }
};

