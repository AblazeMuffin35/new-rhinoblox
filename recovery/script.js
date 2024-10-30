$("#project-name").html(localStorage.getItem('projectRecoveryName') ?? 'unknown');
$("#timestamp").html(localStorage.getItem('projectRecoveryTimestamp') ?? 'unknown');

if (localStorage.getItem('projectRecoveryName') != null) {
    $("#download-button").html('Download ' + (localStorage.getItem('projectRecoveryName')) + '.rbp');
} else {
    $("#download-button").css("display", "none");
}

function downloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function clearAllData() {
    localStorage.removeItem('projectRecoveryName');
    localStorage.removeItem('projectRecoveryTimestamp');
    localStorage.removeItem('projectRecoveryData');
    location.reload();
}