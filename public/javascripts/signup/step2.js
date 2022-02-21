document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', () => {
        const Username = document.getElementById('username').value;
    
        document.cookie = `Username=${Username}`;
        alert(document.cookie);
    });
});
