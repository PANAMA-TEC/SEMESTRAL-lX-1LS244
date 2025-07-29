export const API_Services = async (URL, method = 'GET', body = null) => {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if (method === 'POST' && body) {
            options.body = JSON.stringify(body);
        }
        const response = await fetch(URL, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};