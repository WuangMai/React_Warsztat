import {API_KEY, API_URL} from "./constants";

/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */
export const getOperations = async (id, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
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

export const setOperation = async (id, newOperation, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
            method: "POST",
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOperation)
        });

        const data = await response.json();

        if (data.error) {
            throw new Error("Błąd!");
        }

        getOperations(id, successCallback);
    } catch (err) {
        console.error(err);
    }
};

export const deleteOperation = async (id)=>{
    try {
        const response = await fetch(`${API_URL}/operations/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: API_KEY
            }
        });

        const data = await response.json();

        if (data.error) {
            throw new Error("Błąd!");
        }

    } catch (err) {
        console.error(err);
    }
}
