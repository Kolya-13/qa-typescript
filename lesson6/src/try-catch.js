const PRIMARY_URL = 'https://nonexistent.example.invalid/endpoint';


const FALLBACK_URL = 'https://jsonplaceholder.typicode.com/todos/1';

async function fetchWithFallback() {
    let response;

    try {
        console.log('Attempt to contact primary service...');
        try {
            response = await fetch(PRIMARY_URL);
            if (!response.ok) {
                throw new Error(`Primary responded with status ${response.status} ${response.statusText}`);
            }
            console.log('Primary answered successfully.');
        } catch (primaryErr) {
            console.warn('Primary failed:', primaryErr.message);
            console.log('Attempt to contact a fallback service...');
            response = await fetch(FALLBACK_URL);
            if (!response.ok) {
                throw new Error(`Fallback server error: ${response.status} ${response.statusText}`);
            }

            console.log('Fallback answered successfully.');
        }
        const json = await response.json();
        console.log('Received JSON:', json);
        useData(json);

    } catch (finalErr) {
        console.error('Global error while retrieving data:', finalErr.message);
    } finally {
        console.log('Completion of the operation fetch (finally).');
    }
}


function useData(data) {
    console.log('UseData: process the data further...');
    if (data && typeof data === 'object') {
        console.log('Keys in the received object:', Object.keys(data));
    }
}

fetchWithFallback();