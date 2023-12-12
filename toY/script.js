document.getElementById('downloadButton').addEventListener('click', function() {
    var downloadLink = document.createElement('a');

    downloadLink.href = 'download.txt';
    downloadLink.download = 'Hello Kitty Download.txt';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});