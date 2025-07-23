export const API_Services = async (URL) => {
    
    let data = fetch(URL).
        then(response => response.json()).
        then(json => json).
        catch(error => console.error('Error:', error));
        
    return await data;
}