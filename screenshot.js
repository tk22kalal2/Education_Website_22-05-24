// Preventing screenshots by detecting the Print Screen key
document.addEventListener('keyup', function(e) {
  if (e.key === 'PrintScreen') {
    navigator.clipboard.writeText('');
    alert('Screenshots are not allowed!');
  }
});

// Clear clipboard data on copy
document.addEventListener('copy', function(e) {
  e.clipboardData.setData('text/plain', '');
  e.preventDefault();
  alert('Copying is not allowed!');
});
