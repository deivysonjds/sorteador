document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');
    const contents = document.querySelectorAll('.accordion-content');

    headers.forEach((header, index) => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = '0 15px';
            } else {
                contents.forEach(item => {
                    item.style.maxHeight = null;
                    item.style.padding = '0 15px';
                });

                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '15px 15px';
            }
        });
    });

    const firstContent = contents[0];
    firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    firstContent.style.padding = '15px 15px';
});
