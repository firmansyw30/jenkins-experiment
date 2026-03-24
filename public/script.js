document.getElementById('fetchBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/message');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        document.getElementById('message').textContent = data.message;
    } catch (error) {
        document.getElementById('message').textContent = 'Error fetching message';
        console.error(error);
    }
});
