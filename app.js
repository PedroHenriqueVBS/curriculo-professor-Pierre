// Modal functionality for project images
document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('#projetos img');

    projectImages.forEach(img => {
        img.addEventListener('click', function() {
            // Create modal background
            const modalBg = document.createElement('div');
            modalBg.className = 'modal-img-bg';
            modalBg.style.opacity = '0';
            setTimeout(() => modalBg.style.opacity = '1', 10);

            // Create modal image
            const modalImg = document.createElement('img');
            modalImg.className = 'modal-content-img';
            modalImg.src = this.src;
            modalImg.alt = this.alt;

            // Create close button
            const closeBtn = document.createElement('span');
            closeBtn.className = 'modal-close';
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', closeModal);

            // Append elements
            modalBg.appendChild(modalImg);
            modalBg.appendChild(closeBtn);
            document.body.appendChild(modalBg);

            // Close modal on background click
            modalBg.addEventListener('click', function(e) {
                if (e.target === modalBg) {
                    closeModal();
                }
            });

            // Close modal on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });

            function closeModal() {
                modalBg.style.opacity = '0';
                setTimeout(() => {
                    if (document.body.contains(modalBg)) {
                        document.body.removeChild(modalBg);
                    }
                }, 200);
            }
        });
    });
});
