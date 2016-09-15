(function () {
  $(document).ready(function() {
    var isMobile = $('#burger-js').css('display') != 'none' ? true : false;

    var tradeBroswer = {
        categoryNode: $('#trade-select-js'),
        outputNode: $('#trade-cat-js')   ,
        setActive: function (fthis) {
          var target = '.cat-' + $(fthis).attr('data-category');
          $('.active', this.outputNode).removeClass('active');
          $('.active', this.categoryNode).removeClass('active');
          $(target, this.outputNode).addClass('active');
          $(fthis).addClass('active');
        },
        mobileScroll: function (){
          var animateDelay = 150;
          var target = this.outputNode;
          var targetOffset = $(target).offset().top - $('#nav-js').height();
          setTimeout(function() {
            $('html, body').animate({
              scrollTop: targetOffset
            });
          }, animateDelay);
        },
        addListeners: function () {
            $("#trade-select-js .trade-item").on('click', function (e) {
              e.preventDefault();
              tradeBroswer.setActive(this);
              if (isMobile)
                tradeBroswer.mobileScroll();
            });
            $("#trade-cat-js .img-container").on('click', function (e) {
              e.preventDefault();
            })
        }
    };

    function SmoothScrollToLink () {
      var arr = [$('#scroll-offer-js'), $('#scroll-search-js')];

      arr.forEach(function(node){
        node.on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: $($(this).attr('href').replace('#','.')).offset().top - $('#nav-js').height()
          }, 500);
        });
      });
    };


  tradeBroswer.addListeners();
  SmoothScrollToLink();
  });

})();
