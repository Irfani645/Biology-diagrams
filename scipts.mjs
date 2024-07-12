document.getElementById('openPdfBtn').addEventListener('click', function() {
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = 'Diagrams.pdf';
    pdfViewer.style.display = 'block';
});