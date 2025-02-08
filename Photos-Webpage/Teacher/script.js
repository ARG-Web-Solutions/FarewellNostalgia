function loadImages(page = 1) {
    const w3RowPadding = document.getElementById('photoGrid');
    const screenWidth = window.innerWidth;
    let columnCount = 4;

    if (screenWidth <= 1600) columnCount = (screenWidth > 1200) ? 3 : (screenWidth > 768) ? 2 : 1;

    // Calculate the start and end image indices for the current page
    const startImage = (page - 1) * imagesPerPage + 1;
    const endImage = Math.min(page * imagesPerPage, totalImages);

    const totalPages = Math.ceil(totalImages / imagesPerPage);

    w3RowPadding.innerHTML = '';
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.classList.add('w3-column');
        w3RowPadding.appendChild(column);
    }

    let loadedImages = 0;
    const totalToLoad = endImage - startImage + 1;
    const loadComplete = () => {
        loadedImages++;
        if (loadedImages === totalToLoad) {
            w3RowPadding.classList.add('show');
        }
    };

    for (let i = startImage; i <= endImage; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        const lowResPath = `${folderPath}${i}.jpg?res=low`; // Request for lower resolution image
        img.src = lowResPath; // Low resolution for gallery view
        img.alt = `Image ${i}`;

        // Check if the image exists before adding it to the gallery
        img.onload = loadComplete;
        img.onerror = function() {
            console.error(`Failed to load image: ${lowResPath}`);
            loadComplete();
        };

        img.addEventListener('click', () => openModal(`${folderPath}${i}.jpg`));  // Full image for modal view

        imgContainer.appendChild(img);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'image-checkbox';
        imgContainer.appendChild(checkbox);

        const previewText = document.createElement('div');
        previewText.classList.add('preview-text');
        previewText.textContent = 'Preview';
        imgContainer.appendChild(previewText);

        w3RowPadding.children[(i - startImage) % columnCount].appendChild(imgContainer);
    }

    createPagination(totalPages, page);
}
