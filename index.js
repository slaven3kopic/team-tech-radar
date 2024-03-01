fetch('data.json')
    .then(response => response.json())
    .then(json => {
        radar_visualization(json)
    })
    .catch(e => {
        console.error('"data.json" file not found! Please create "data.json" file next to index.js', e);
    });


function download() {
    htmlToImage.toPng(document.getElementById('radar-container'))
        .then(dataUrl => {
            var link = document.createElement('a');
            link.download = 'radar.png';
            link.href = dataUrl;
            link.click();
        });

}
