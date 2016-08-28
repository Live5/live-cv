$(document).ready(function(){
    	$('#fullpage').fullpage({
			anchors:['page1','page2','page3','page4'],
			navigation:true,
		    menu: '#myMenu',
			loopbottom:true,
			afterLoad: function(anchorLink, index){
            	switch(index){
					case 1:
					    $('#myMenu #p1').addClass('cur').siblings().removeClass('cur');
						move('.text-1').y(-200).duration(1000).end();
						move('.text-2').y(-200).duration(1250).end();
						move('.text-3').y(-200).duration(1500).end();
						move('.text-4').y(-200).duration(1750).end();
						move('.text-5').y(-200).duration(2000).end();
						move('#head-2').scale(2).duration(2000).set('opacity', 0.5 ).then().set('opacity', 0).scale(3).duration(1000).delay(0).pop().end();
						move('#bg-1').scale(2).duration(60000).end();
					break;
					case　2:
					    $('#myMenu #p2').addClass('cur').siblings().removeClass('cur');
					    move('.list').y(-50).set('opacity', 0).duration(0).then().y(50).set('opacity', 1).duration(1500).pop().end();
					    move('#bg-2').scale(2).duration(60000).end();
					break;
					case  3:
						$('#myMenu #p3').addClass('cur').siblings().removeClass('cur');
					 	move('#sq1').scale(0.5).duration(0).then().scale(2).set('opacity', 1).duration(1500).pop().end();
					 	move('#sq2').scale(0.5).duration(0).then().scale(2).set('opacity', 1).duration(1500).delay(500).pop().end();
					 	move('#sq3').scale(0.5).duration(0).then().scale(2).set('opacity', 1).duration(1500).delay(750).pop().end();
					 	move('#sq4').scale(0.5).duration(0).then().scale(2).set('opacity', 1).duration(1500).delay(500).pop().end();
					 	move('#sq5').scale(0.5).duration(0).then().scale(2).set('opacity', 1).duration(1500).delay(750).pop().end();
					 	move('#sq6').scale(0.5).duration(0).then().scale(2).set('opacity', 1).duration(1500).delay(1000).pop().end();
					 	move('#bg-3').scale(2).duration(60000).end();
					break;
					case 4:
						$('#myMenu #p4').addClass('cur').siblings().removeClass('cur');
						move('.cm').scale(1.5).duration(2000).end();
						move('#bg-4').scale(2).duration(60000).end();
					break;
				}
					},
			onLeave: function(anchorLinkLink, index){
            	switch(index){
					case 1:
						move('.text-1').y(200).duration(0).end();
						move('.text-2').y(200).duration(0).end();
						move('.text-3').y(200).duration(0).end();
						move('.text-4').y(200).duration(0).end();
						move('.text-5').y(200).duration(0).end();
						move('#head-2').scale(1).duration(0).end();
						move('#bg-1').scale(1).duration(0).end();
						break;
					case 2:
					    move('#bg-2').scale(1).duration(0).end();
					    move('.list').set('opacity', 0).duration(0).end();
						break;
					case  3:
						move('#sq1').scale(0.5).duration(0).set('opacity', 0).delay(0).end();
						move('#sq2').scale(0.5).duration(0).set('opacity', 0).delay(0).end();
					 	move('#sq3').scale(0.5).duration(0).set('opacity', 0).delay(0).end();
					 	move('#sq4').scale(0.5).duration(0).set('opacity', 0).delay(0).end();
					 	move('#sq5').scale(0.5).duration(0).set('opacity', 0).delay(0).end();
					 	move('#sq6').scale(0.5).duration(0).set('opacity', 0).delay(0).end();
					 	move('#bg-3').scale(1).duration(0).end();
					break;
					case 4:
						move('.cm').scale(1).duration(0).end();
					break;
					}
      	  	}
			});
    });
