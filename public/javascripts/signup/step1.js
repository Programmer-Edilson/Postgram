document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', () => {
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
    
        document.cookie = `firstName=${firstName}`;
        document.cookie = `lastName=${lastName}`;
        alert(document.cookie);
    });
});
