document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').onsubmit = () => {
        const password1 = document.getElementById('password1').value;
        const password2 = document.getElementById('password2').value;

        if(password1 !== password2){
            document.getElementById('feedback').style.display='block';
            return false
        }

        const request = new XMLHttpRequest();
        request.open('POST','/user/signup3');
        
        var data = new FormData();

        var cookie = document.cookie;
        alert(cookie);
        var output = {};
        cookie.split(/\s*;\s*/).forEach(function(pair) {
            pair = pair.split(/\s*=\s*/);
            output[pair[0]] = pair.splice(1).join('=');
        });
        var jsonCookie = JSON.stringify(output, null, 4);
        data = {'cookie': jsonCookie};
        request.send(data);
        alert(data.cookie);
        return false;
    }
});
