
    const readMoreBtn = document.getElementById('readMoreBtn');
    const blogContentWrapper = document.querySelector('.blog-content-wrapper');

    readMoreBtn.addEventListener('click', () => {
      if (blogContentWrapper.classList.contains('expanded')) {
        blogContentWrapper.classList.remove('expanded');
        readMoreBtn.textContent = 'Read More...';
      } else {
        blogContentWrapper.classList.add('expanded');
        readMoreBtn.textContent = 'Show Less';
      }
    });




