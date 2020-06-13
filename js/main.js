document.getElementById('clothsbrands').addEventListener('click', getText);

function getText() {
    // AJAX Call
    // Create an Object
    var xhr = new XMLHttpRequest();

    // Open the portal
    xhr.open('GET', '../json/main2.json', true);

    // Communication
    xhr.onload = function() {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            var output = '';
            for (var i = 0; i < user.length; i++) {
                output += '<ul>' +
                    '<li>ID : ' + user[i].ID + '</li>' +
                    '<li>ID : ' + user[i].BRAND + '</li>' +
                    '</ul>';
            }

            document.getElementById('firstcontainer').innerHTML = output;
        }
    }

    // Send the request
    xhr.send();
}

document.getElementById('.clothstype').addEventListener('click', getAText);

function getAText() {
    // AJAX Call
    // Create an Object
    var xhr = XMLHttpRequest();

    // Open the portal
    xhr.open('GET', 'main.json', true);

    // Communication
    xhr.onload = function() {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            var output = '';
            for (var i = 0; i < user.length; i++) {
                output += '<ul>' +
                    '<li>ID : ' + user[i].ID + '</li>' +
                    '<li>ID : ' + user[i].BRAND + '</li>' +
                    '</ul>';
            }

            document.getElementById('secondcontainer').innerHTML = output;
        }
    }

    // Send the request
    xhr.send();
}
