function selectSize(element) {
    document.querySelectorAll('.size-option').forEach(option => {
      option.classList.remove('selected');
    });

    element.classList.add('selected');

   
    document.getElementById('nextButton').classList.remove('d-none');
  }