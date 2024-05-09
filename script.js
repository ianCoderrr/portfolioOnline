document.addEventListener("DOMContentLoaded", function() {
    const viewProjectLinks = document.querySelectorAll('.view-project');
    const previewModal = document.getElementById('preview-modal');
    const previewImage = document.getElementById('preview-image');
    const closePreview = document.getElementById('close-preview');

    viewProjectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const projectImage = this.closest('.flex').querySelector('.project-image');
            const imageSource = projectImage.getAttribute('src');
            previewImage.setAttribute('src', imageSource);
            previewModal.classList.remove('hidden');
        });
    });

    closePreview.addEventListener('click', function() {
        previewModal.classList.add('hidden');
    });
});
