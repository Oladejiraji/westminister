(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
        if (elements !== undefined) {
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var positionFromTop = elements[i].getBoundingClientRect().top;
          
                if (positionFromTop - windowHeight <= 0) {
                  element.classList.add('fade-in-element');
                  element.classList.remove('hidden');
                }
            }
        }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    // init();
    // checkPosition();
    setTimeout(init, 2)
    setTimeout(checkPosition, 800)
  })();