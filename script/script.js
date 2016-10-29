$(document).ready(function(){
	var num = numberOfScreens;
	var box_h=$("#metro_box").height();
	var box_w=$("#metro_box").width();
	$("#metro_box").css("margin-top",(($(window).height()-box_h)/2)-10+"px");
	//var img_h=$(".arr_left img").height();
	//var img_w=$(".arr_left img").width();
	//$(".prev").css("position","absolute").css("left","10px").css("top",($(window).height()-img_h)/2);
	//$(".next").css("position","absolute").css("right","10px").css("top",($(window).height()-img_h)/2);
	//链接在新窗口打开
	$(".a_link dd a").attr("target","_blank");
	$(".a_link ul li>a").hover(function(){
		var a_href=$(this).attr("href");			
		$(this).siblings().find("a").attr("href",a_href);
	});
	
	//切屏-----------------------------------------------------------------
	$("#top dl dd a").click(function(){
		var now_class=$(this).attr("class");	
		$("#top dl dd a.a_index").attr("class","a_index");
		$("#top dl dd a.a_tab1").attr("class","a_tab1");
		$("#top dl dd a.a_tab2").attr("class","a_tab2");
		$("#top dl dd a.a_tab3").attr("class","a_tab3");
		$("#top dl dd a.a_tab4").attr("class","a_tab4");
		$("#top dl dd a.a_tab5").attr("class","a_tab5");
		$("#top dl dd a.a_tab6").attr("class","a_tab6");
		$("#top dl dd a.a_tab7").attr("class","a_tab7");
		$(this).attr("class",now_class).addClass(now_class+"_h");			
		var index=$(this).index();
		$("#metro_box dd").hide();
		$("#metro_box dd").eq(index).toggle(100);
		if(index==1){
			$("body").attr("class","bg0");	
		}
		switch (index){
			case 0:
				$("body").attr("class","");						
				break;
			case 1:
				$("body").attr("class","bg0");					
				break;
			case 2:
				$("body").attr("class","bg1");						
				break;
			case 3:
				$("body").attr("class","bg2");					
				break;
			case 4:
				$("body").attr("class","bg3");					
				break;
			case 5:
				$("body").attr("class","bg4");						
				break;	
			case 6:
				$("body").attr("class","bg5");						
				break;	
			default :
				$("body").attr("class","bg6");						
		}
		
		<!--[if IE 6]>$("#metro_box dd").eq(index).show(300);<![endif]-->			
	});
	
	if(showHome) {
		$('.a_index').show();
	}
	else{
		$('.a_index').hide();
	}

	if(showMore) {
		$('.a_more').show();
	}
	else{
		$('.a_more').hide();
	}	
	
	for (var i=0; i < 7; i++) {
		if(i < num){
			$('.a_tab'+(i+1)).html(TabName[i]);	
			for(var j=0;j<16;j++){								
				var title = bookmark[i][j]['title'];
				var url = bookmark[i][j]['url'];
				var thumb = bookmark[i][j]['thumb'];
				if(thumb==''){
					$('#logo'+(i+1)+'-'+(j+1)).html('<a href="'+url+'"><img src="images/net-back.png" width="240" height="120" alt=""></a><span><a href="'+url+'">'+title+'</a></span>');
					alert($('#logo'+(i+1)+'-'+(j+1)).html);
				}
				else{
					$('#logo'+(i+1)+'-'+(j+1)).html('<a href="'+url+'"><img src="images/'+thumb+'" width="240" height="120" alt=""></a><span><a href="'+url+'">'+title+'</a></span>');
				}
			};
		}
		else{
			$('.a_tab'+(i+1)).hide();			
		}
		
	};
	
	
});