var viewContents = document.getElementById('view-contents');
var formContent = document.getElementById('form-content');
var userProfile = document.getElementById('user-profile');

viewContents.onclick = loadViewContents;
formContent.onclick = loadFormContent;
userProfile.onclick = loadUserProfile;

function loadViewContents() {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "../pages/loading.html", true);
    xhttp.send();
    setTimeout(function() {
        xhttp.open("GET", "../pages/viewContent.html", true);
        xhttp.send();
    }, 5000);
}

function loadFormContent() {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "../pages/loading.html", true);
    xhttp.send();
    setTimeout(function() {
        xhttp.open("GET", "../pages/addContent.html", true);
        xhttp.send();
    }, 5000);
}

function loadUserProfile() {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "../pages/loading.html", true);
    xhttp.send();
    setTimeout(function() {
        xhttp.open("GET", "../pages/editProfile.html", true);
        xhttp.send();
    }, 5000);
}