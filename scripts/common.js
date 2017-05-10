/*  Top Cart */
function slideEffectAjax() {
    $(".top-cart-contain").mouseenter(function() {
        $(this).find(".top-cart-content").stop(true, true).slideDown()
    }), $(".top-cart-contain").mouseleave(function() {
        $(this).find(".top-cart-content").stop(true, true).slideUp()
    })
}

$(document).ready(function() {
  "use strict";
	$(".toggle1").hide();
  $(".toggle").click(function() {
	   $(".toggle").hide();
	   $(".toggle1").show();
     return $(".submenu").is(":hidden") ? $(".submenu").slideDown("fast") : $(".submenu")
			.slideDown(".toggle"), !1
  }),
	$(".toggle1").click(function() {
		$(".toggle").show();
		$(".toggle1").hide();
      return $(".submenu").is(":hidden") ? $(".submenu").slideUp("fast") : $(".submenu")
			.slideUp(".toggle1"), !1
  }),
	$(".topnav").accordion({
    accordion: !1,
    speed: 300,
    closedSign: "&or;",
    openedSign: "&and;"
  }),
	$("#nav > li").hover(function() {
    var e = $(this).find(".level0-wrapper");
    e.hide(), e.css("left", "0"), e.stop(true, true).delay(150).fadeIn(300, "easeOutCubic")
  }, function() {
    $(this).find(".level0-wrapper").stop(true, true).delay(300).fadeOut(300, "easeInCubic")
  });
  $("#nav li.level0.drop-menu").mouseover(function() {
    return $(window).width() >= 740 && $(this).children("ul.level1").fadeIn(100), !1
  }).mouseleave(function() {
    return $(window).width() >= 740 && $(this).children("ul.level1").fadeOut(100), !1
  }), $("#nav li.level0.drop-menu li").mouseover(function() {
    if ($(window).width() >= 740) {
      $(this).children("ul").css({
        top: 0,
        left: "158px"
      });
      var e = $(this).offset();
      e && $(window).width() < e.left + 325 ? ($(this).children("ul").removeClass("right-sub"), $(this).children("ul").addClass("left-sub"), $(this).children("ul").css({
        top: 0,
        left: "-155px"
      })) : ($(this).children("ul").removeClass("left-sub"), $(this).children("ul").addClass("right-sub")), $(this).children("ul").fadeIn(100)
    }
  }).mouseleave(function() {
    $(window).width() >= 740 && $(this).children("ul").fadeOut(100)
  });
  $(".subDropdown")[0] && $(".subDropdown").click(function() {
    $(this).toggleClass("plus"), $(this).toggleClass("minus"), $(this).parent().find("ul").slideToggle()
  });
  $().UItoTop();





  $(document).on('click','.avatarimage',function(){
    $('.popnin').css('visibility','visible');
  });

  $(document).mouseup(function(e) {
      var $container = $(".popnin");
      if (!$container.is(e.target) && $container.has(e.target).length === 0) {
          $container.css('visibility','hidden');
      }
  });

});


    $(window).scroll(function() {

    $(this).scrollTop() > 1 ? $("nav").addClass("sticky") : $("nav").removeClass("sticky")
		$(this).scrollTop() > 1 ? $("nav").addClass("sticky") : $("nav").removeClass("sticky")

   }),

    function(e) {
        $.fn.UItoTop = function(i) {
            var t = {
                    text: "",
                    min: 200,
                    inDelay: 600,
                    outDelay: 400,
                    containerID: "toTop",
                    containerHoverID: "toTopHover",
                    scrollSpeed: 1200,
                    easingType: "linear"
                },
                n = e.extend(t, i),
                s = "#" + n.containerID,
                a = "#" + n.containerHoverID;
            $("body").append('<a href="#" id="' + n.containerID + '">' + n.text + "</a>"), $(s).hide().click(function() {
                return $("html, body").animate({
                    scrollTop: 0
                }, n.scrollSpeed, n.easingType), $("#" + n.containerHoverID, this).stop().animate({
                    opacity: 0
                }, n.inDelay, n.easingType), !1
            }).prepend('<span id="' + n.containerHoverID + '"></span>').hover(function() {
                $(a, this).stop().animate({
                    opacity: 1
                }, 600, "linear")
            }, function() {
                $(a, this).stop().animate({
                    opacity: 0
                }, 700, "linear")
            }), $(window).scroll(function() {
                var i = e(window).scrollTop();
                "undefined" == typeof document.body.style.maxHeight && $(s).css({
                    position: "absolute",
                    top: e(window).scrollTop() + e(window).height() - 50
                }), i > n.min ? $(s).fadeIn(n.inDelay) : $(s).fadeOut(n.Outdelay)
            })
        }
    }($), $(document).ready(function() {
        slideEffectAjax()
    }), $.extend($.easing, {
        easeInCubic: function(e, i, t, n, s) {
            return n * (i /= s) * i * i + t
        },
        easeOutCubic: function(e, i, t, n, s) {
            return n * ((i = i / s - 1) * i * i + 1) + t
        }
    }),
		/* mobile nav */
    function(e) {
        e.fn.extend({
            accordion: function() {
                return this.each(function() {})
            }
        })
    }($), $(function(e) {
        e(".accordion").accordion(), e(".accordion").each(function() {
            var i = e(this).find("li.active");
            i.each(function(t) {
                e(this).children("ul").css("display", "block"), t == i.length - 1 && e(this).addClass("current")
            })
        })
    }),
    function(e) {
        e.fn.extend({
            accordion: function(i) {
                var t = {
                        accordion: "true",
                        speed: 300,
                        closedSign: "[>]",
                        openedSign: "[<]"
                    },
                    n = e.extend(t, i),
                    s = e(this);
                s.find("li").each(function() {
                    0 != e(this).find("ul").size() && (e(this).find("a:first").after("<em>" + n.closedSign + "</em>"), "#" == e(this).find("a:first").attr("href") && e(this).find("a:first").click(function() {
                        return !1
                    }))

                }), s.find("li em").click(function() {

                    0 != e(this).parent().find("ul").size() && (n.accordion && (e(this).parent().find("ul").is(":visible") || (parents = e(this).parent().parents("ul"), visible = s.find("ul:visible"), visible.each(function(i) {
                        var t = !0;
                        parents.each(function(e) {
                            return parents[e] == visible[i] ? (t = !1, !1) : void 0
                        }), t && e(this).parent().find("ul") != visible[i] && e(visible[i]).slideUp(n.speed, function() {
                            e(this).parent("li").find("em:first").html(n.closedSign)
                        })
                    }))), e(this).parent().find("ul:first").is(":visible") ? e(this).parent().find("ul:first").slideUp(n.speed, function() {
                        e(this).parent("li").find("em:first").delay(n.speed).html(n.closedSign)
                    }) : e(this).parent().find("ul:first").slideDown(n.speed, function() {


                        e(this).parent("li").find("em:first").delay(n.speed).html(n.openedSign)
                    }))
                })
            }
        })
    }($),
		/* sidebar navigation */
    function(e) {
        e.fn.extend({
            accordionNew: function() {
                return this.each(function() {
                    function i(i, n) {
                        e(i).parent(r).siblings().removeClass(s).children(l).slideUp(o), e(i).siblings(l)[n || a]("show" == n ? o : !1, function() {
                            e(i).siblings(l).is(":visible") ? e(i).parents(r).not(t.parents()).addClass(s) : e(i).parent(r).removeClass(s), "show" == n && e(i).parents(r).not(t.parents()).addClass(s), e(i).parents().show()
                        })
                    }
                    var t = e(this),
                        n = "accordiated",
                        s = "active",
                        a = "slideToggle",
                        l = "ul, div",
                        o = "fast",
                        r = "li";
                    if (t.data(n)) return !1;
                    e.each(t.find("ul, li>div"), function() {
                        e(this).data(n, !0), e(this).hide()
                    }), e.each(t.find("em.open-close"), function() {
                        e(this).click(function() {
                            return void i(this, a)
                        }), e(this).bind("activate-node", function() {
                            t.find(l).not(e(this).parents()).not(e(this).siblings()).slideUp(o), i(this, "slideDown")
                        })
                    });
                    var d = location.hash ? t.find("a[href=" + location.hash + "]")[0] : t.find("li.current a")[0];
                    d && i(d, !1)
                })
            }
        })
    }($);



    (function($) {
     "use strict";
    	var slider = new MasterSlider();
    	// adds Arrows navigation control to the slider.
    	slider.control('arrows');
    	slider.control('bullets');

    	slider.setup('masterslider' , {
    		 width:1135,    // slider standard width
    		 height:380,   // slider standard height
    		 space:0,
    		 speed:45,

    		 loop:true,
    		 preload:0,
    		 autoplay:true,
    		 view:"parallaxMask"
    	});
    })($);
    $("#btnmain").click(function() {

    	if(document.getElementById("btnclose").style.visibility=="visible")
    	document.getElementById("btnclose").style.visibility="hidden";
    	else
    	document.getElementById("btnclose").style.visibility="visible"

    	if(document.getElementById("btnlist").style.visibility=="visible")
    	document.getElementById("btnlist").style.visibility="hidden";
    	else
    	document.getElementById("btnlist").style.visibility="visible"
    });


    $(window).load(function() {
      $("#flexiselDemo1").flexisel({
        visibleItems: 4,
        animationSpeed: 1000,
        autoPlay: false,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
          responsiveBreakpoints: {
        portrait: {
              changePoint:279,
              visibleItems: 1		    		},

            portrait: {
              changePoint:479,
              visibleItems: 2		    		},


            landscape: {
              changePoint:640,
              visibleItems: 2
            },
            tablet: {
              changePoint:768,
              visibleItems: 3
            }
          }
        });

    });
