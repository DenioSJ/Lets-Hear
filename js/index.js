$('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });

  $('.services').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows:true
   
  });

  $('.landing').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });

  /*
FAQ JS
*/
jQuery(document).ready(function() {
    jQuery(".wp-block-yoast-faq-block .schema-faq-section:first-child").addClass("active").children(".schema-faq-answer").slideDown();//Remove this line if you dont want the first one to be opened automatically.
    jQuery(".schema-faq-question").on("click", function(){
      if( jQuery(this).parent().hasClass("active") ){
        jQuery(this).next().slideUp();
        jQuery(this).parent().removeClass("active");
      }
      else{
        jQuery(".schema-faq-answer").slideUp();
        jQuery(".schema-faq-section").removeClass("active");
        jQuery(this).parent().addClass("active");
        jQuery(this).next().slideDown();
      }
    });
  });

  // Animation
  var Animation = function ({ offset } = { offset: 10 }) {
    var _elements;
  
    // Define a dobra superior, inferior e laterais da tela
    var windowTop = offset * window.innerHeight / 100;
    var windowBottom = window.innerHeight - windowTop;
    var windowLeft = 0;
    var windowRight = window.innerWidth;
  
    function start(element) {
      // Seta os atributos customizados
      element.style.animationDelay = element.dataset.animationDelay;
      element.style.animationDuration = element.dataset.animationDuration;
      // Inicia a animacao setando a classe da animacao
      element.classList.add(element.dataset.animation);
      // Seta o elemento como animado
      element.dataset.animated = "true";
    }
  
    function isElementOnScreen(element) {
      // Obtem o boundingbox do elemento
      var elementRect = element.getBoundingClientRect();
      var elementTop =
        elementRect.top + parseInt(element.dataset.animationOffset) ||
        elementRect.top;
      var elementBottom =
        elementRect.bottom - parseInt(element.dataset.animationOffset) ||
        elementRect.bottom;
      var elementLeft = elementRect.left;
      var elementRight = elementRect.right;
  
      // Verifica se o elemento esta na tela
      return (
        elementTop <= windowBottom &&
        elementBottom >= windowTop &&
        elementLeft <= windowRight &&
        elementRight >= windowLeft
      );
    }
  
    // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
    function checkElementsOnScreen(els = _elements) {
      for (var i = 0, len = els.length; i < len; i++) {
        // Passa para o proximo laço se o elemento ja estiver animado
        if (els[i].dataset.animated) continue;
        isElementOnScreen(els[i]) && start(els[i]);
      }
    }
  
    // Atualiza a lista de elementos a serem animados
    function update() {
      _elements = document.querySelectorAll(
        "[data-animation]:not([data-animated])"
      );
      checkElementsOnScreen(_elements);
    }
  
    // Inicia os eventos
    window.addEventListener("load", update, false);
    window.addEventListener("scroll", () => checkElementsOnScreen(_elements), { passive: true });
    window.addEventListener("resize", () => checkElementsOnScreen(_elements), false);
  
    // Retorna funcoes publicas
    return {
      start,
      isElementOnScreen,
      update
    };
  };
  var options = {
    offset: 20 //percentage of window
  };
  var animation = new Animation(options);
  
  $(document).ready(function () {
    // variables
    var toTop = $(".scrollUp");
    // logic
    toTop.on("click", function () {
      $("html, body").animate({
        scrollTop: $("html, body").offset().top,
      });
    });
  });