(function () {

  const uiSelectors = [
    '.ytp-chrome-top',           
    '.ytp-chrome-bottom',        
    '.ytp-gradient-top',         
    '.ytp-gradient-bottom'
  ];

  let isHidden = false;

  function setUIDisplay(state) {
    for (const selector of uiSelectors) {
      document.querySelectorAll(selector).forEach(el => {
        el.style.display = state ? 'none' : '';
      });
    }
  }
 document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'h') {
      isHidden = !isHidden;
      setUIDisplay(isHidden);
      console.log(`YouTube UI ${isHidden ? 'hidden' : 'visible'}`);
    }
  });
})();