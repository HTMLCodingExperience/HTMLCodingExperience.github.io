<!DOCTYPE HTML>
<script type="text/javascript">
  function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);
    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}
$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;
    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });
    // Definindo o tamanho dos elementos header e conteúdo
    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });
    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });
    scrollFooter(window.scrollY, footerHeight);
    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;
        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });
        scrollFooter(scroll, footerHeight);
    }
});
 </script>
<html>
 <style>
   #scroll-animate
{
  overflow: hidden;
}
#scroll-animate-main
{
  width: 100%;
  left: 0;
  position: fixed;
}
#heightPage,
#heightScroll
{
  width: 10px;
  top: 0;
  position: absolute;
  z-index: 99;
}
#heightPage
{
  left: 0;
}
#heightScroll
{
  right: 0;
}
header
{
  width: 100%;
  height: 100%;
  background: url(https://raw.githubusercontent.com/hudsonmarinho/header-and-footer-parallax-effect/master/assets/images/bg-header.jpg) no-repeat 50% 50%;
  top: 0;
  position: fixed;
  z-index: -1;
}
footer
{
  width: 100%;
  height: 300px;
  background: gray;
  bottom: -300px;
  position: fixed;
  z-index: -1;
}
.content
{
  height: 1000px;
  min-height: 1000px;
  background: #ededed;
  position: relative;
  z-index: 1;
}
.wrapper-parallax {
  margin-top: 100%;
  margin-bottom: 300px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
}
h1{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  font-family: Helvetica;
  font-size: 150px;
  color: #fff;
}
header h1{}
.content h1{
  line-height: 1000px;
  color: #999;
}
footer h1
{
  line-height: 300px;
}
header,
footer,
#scroll-animate-main
{
  -webkit-transition-property: all;
     -moz-transition-property: all;
      transition-property: all;
  -webkit-transition-duration: 0.4s;
     -moz-transition-duration: 0.4s;
      transition-duration: 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0, 1);
     -moz-transition-timing-function: cubic-bezier(0, 0, 0, 1);
      transition-timing-function: cubic-bezier(0, 0, 0, 1);
}
  </style>
  <div id="scroll-animate">
  <div id="scroll-animate-main">
    <div class="wrapper-parallax">
      <header>
        <h1>Header</h1>
      </header>

      <section class="content">
        <h1>Content</h1>
      </section>

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  </div>
</div>
</html>
