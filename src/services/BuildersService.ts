import { showAlert } from "../utils/Alerts";

export const addbuilder = async (data: any) => {
    try {
        const resp = await fetch("http://localhost:3000/api/v1/Builders/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        //   await new Promise(resolve => setTimeout(resolve, 2000));

        const result = await resp.json();

        if (!resp.ok) {
            const errorMessage = result.error || "Unknown error occurred.";
            
            showAlert("Error", errorMessage, "error");
            return { success: false, error: errorMessage };
        }
        
        
        showAlert("success", result.message, "success");
        return { success: true, builder: result.builder };
    } catch (error: any) {
        alert("Failed to add the builder details: " + error.message);
        return { success: false, error: error.message };
    }
};

export const fetchBuilders = async () => {
    try {
        const resp = await fetch("http://localhost:3000/api/v1/Builders/");

        await new Promise(resolve => setTimeout(resolve, 2000));

        const result = await resp.json();

        if (!resp.ok) {
            const errorMessage = result.error || "Unknown error occurred.";
            showAlert("error", "Failed to fetch builder details: " + errorMessage, "error");
            return { success: false, error: errorMessage };
        }

        showAlert("Success", result.message, "success");
        return { success: true, builders: result.builders };
    } catch (error: any) {
        showAlert("Error", "Failed to add the builder details: " + error.message, "error");
        return { success: false, error: error.message };
    }
};

