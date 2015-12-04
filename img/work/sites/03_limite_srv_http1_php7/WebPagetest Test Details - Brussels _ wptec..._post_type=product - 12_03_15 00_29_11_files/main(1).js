var banner = new Banner();

DC.addEventListener( DC.events.CORE_READY, banner.ready.bind( banner ) );


banner.onReady = function() {
	div_main						= document.getElementById("div_main");
	
	consideration 					= DC.config.consideration_copy[DC.config.consideration][DC.config.language];

	consideration_holder			= document.getElementById("consideration_holder");
	totalLines 						= DC.config.consideration_copy[DC.config.consideration][DC.config.language].copy.length;
	consideration_lines				= [];
	
	tv_animation					= document.getElementById("tv_animation");
	tv_screen_image					= document.getElementById("tv_screen_image");

	product_animation				= document.getElementById("product_animation");
	product							= document.getElementById("product");
	product_copy0					= document.getElementById("product_copy0");
	product_copy1					= document.getElementById("product_copy1");
	
	button_cta_background			= document.getElementById("button_cta_background");
	logo_1					= $(".logo_1");
	logo_2					= $(".logo_2");
	logo_3					= $(".logo_3");
	logo_4					= $(".logo_4");
	logo_5					= $(".logo_5");
	logo_6					= $(".logo_6");
	logo_7					= $(".logo_7");
	logo_8					= $(".logo_8");	
	logo_9					= $(".logo_9");
	logo_10					= $(".logo_10");
	logo_11					= $(".logo_11");
	logo_12					= $(".logo_12");
	logo_13					= $(".logo_13");
	logo_14					= $(".logo_14");
	logo_15					= $(".logo_15");
	legal1					= $("#legal1");
	legal2					= $("#legal2");



	//button_cta.addEventListener("click", this.onBannerClick.bind(this) );
}

banner.onInit = function() 
{
	TweenLite.set( div_main, { opacity: 0 } );

	for (var i = 0; i < totalLines; i++) {

		var consideration_line = document.createElement('div');
		var copy 		= consideration.copy[i][0];
		console.log(consideration.copy[i][0])
		var copy_class 	= consideration.copy[i][1];
		var size 		= consideration.fontSize;
		var lineHeight 	= consideration.lineHeight;
		var wordSpacing = consideration.wordSpacing;
		
		consideration_line.id = "line_" + i;
		consideration_line.className = "lines " + copy_class;
		if(size) {consideration_line.style.fontSize = size + "px";}
		if(lineHeight) {consideration_line.style.lineHeight = lineHeight + "px";}
		for (var j = 0; j < copy.length; j++) 
		{
			if(copy[j] == " ") 
			{
				var copySpace = "<span style=" + "'" + "letter-spacing:" + wordSpacing + "px;" + "'"  + ">" +  copy[j] + "</span>"
				consideration_line.innerHTML +=  copySpace;
			} 
			else
			{
				consideration_line.innerHTML +=  copy[j] 
			}

		}
		consideration_holder.appendChild(consideration_line);
		consideration_lines.push(consideration_line);
		TweenLite.set( consideration_line, { opacity: 0 } );
	};

	TweenLite.set( tv_animation, { opacity: 0 } );

	TweenLite.set( product_animation, { opacity: 0 } );
	TweenLite.set( product, { opacity: 0 } );
	TweenLite.set( product_copy0, { opacity: 0 } );
	TweenLite.set( product_copy1, { opacity: 0 } );

	button_cta_background.classList.remove('over');
	button_cta_background.classList.add('out');


	
}

banner.startAnimation = function() {

	var delay = 1;
	
	TweenLite.to(div_main, 0.3, { opacity: 1} );

	for (var i = 0; i < totalLines; i++) 
	{
		TweenLite.to(consideration_lines[i], 0.5, { opacity: 1, delay:delay } );

		if(i < totalLines-1) 
		{
			if(consideration_lines[i].className != consideration_lines[i+1].className)
			{
				delay += 0.7;
			} else {
				delay += 0.5;
			}
		} 
	}

	delay += 1.2;

	TweenLite.to(tv_animation, 0.3, { opacity: 1, delay:delay } );
	TweenLite.to(legal1, 0.3, { opacity: 1, delay:delay } );	
	TweenLite.to(consideration_lines, 0.3, { opacity: 0, delay:delay } );

	delay += 0.3;

	TweenLite.to(logo_1, 0.3, { opacity: 1, delay:delay } );	
	
	delay += 1.5;

	TweenLite.to(logo_1, 0.3, { opacity: 0, delay:delay } );	
	TweenLite.to(legal1, 0.3, { opacity: 1, delay:delay } );

	delay += 0.3;

	TweenLite.to(logo_5, 0.3, { opacity: 1, delay:delay } );	
	
	delay += 1.5;

	TweenLite.to(logo_5, 0.3, { opacity: 0, delay:delay } );	

	delay += 0.3;

	TweenLite.to(logo_6, 0.3, { opacity: 1, delay:delay } );	
	
	delay += 1.5;

	TweenLite.to(logo_6, 0.3, { opacity: 0, delay:delay } );	

	if(DC.config.language == "uk"){

		console.log(" UK LOGO'S LAUNCHED!")

		delay += 0.3;

		TweenLite.to(logo_2, 0.3, { opacity: 1, delay:delay } );	
		
		delay += 1.5;

		TweenLite.to(logo_2, 0.3, { opacity: 0, delay:delay } );	

		delay += 0.3;

		TweenLite.to(logo_3, 0.3, { opacity: 1, delay:delay } );	
		
		delay += 1.5;

		TweenLite.to(logo_3, 0.3, { opacity: 0, delay:delay } );

		delay += 0.3;

		TweenLite.to(logo_4, 0.3, { opacity: 1, delay:delay } );	
		
		delay += 1.5;

		TweenLite.to(logo_4, 0.3, { opacity: 0, delay:delay } );

	}

	if(DC.config.language == "fr"){

		console.log(" FR LOGO'S LAUNCHED!");

		delay += 0.3;

		TweenLite.to(logo_13, 0.3, { opacity: 1, delay:delay } );	
		
		delay += 1.5;

		TweenLite.to(logo_13, 0.3, { opacity: 0, delay:delay } );	

		delay += 0.3;

		TweenLite.to(logo_7, 0.3, { opacity: 1, delay:delay } );	
		
		delay += 1.5;

		TweenLite.to(logo_7, 0.3, { opacity: 0, delay:delay } );	

		delay += 0.3;

		TweenLite.to(logo_14, 0.3, { opacity: 1, delay:delay } );	
		
		delay += 1.5;

		TweenLite.to(logo_14, 0.3, { opacity: 0, delay:delay } );	

	}

	if(DC.config.language == "de"){

		console.log(" DE LOGO'S LAUNCHED!");

		delay += 0.3;

		TweenLite.to(logo_8, 0.3, { opacity: 1, delay:delay } );	
		
		delay += 1.5;

		TweenLite.to(logo_8, 0.3, { opacity: 0, delay:delay } );	

		delay += 0.3;

		TweenLite.to(logo_9, 0.3, { opacity: 1, delay:delay } );	
		
		delay += 1.5;

		TweenLite.to(logo_9, 0.3, { opacity: 0, delay:delay } );	

		delay += 0.3;

		TweenLite.to(logo_12, 0.3, { opacity: 1, delay:delay } );	
		
		delay += 1.5;

		TweenLite.to(logo_12, 0.3, { opacity: 0, delay:delay } );	

	}

	if(DC.config.language == "nl"){
		console.log(" NL LOGO'S LAUNCHED!");

		delay += 0.3;

		TweenLite.to(logo_10, 0.3, { opacity: 1, delay:delay } );

		delay += 1.5;

		TweenLite.to(logo_10, 0.3, { opacity: 0, delay:delay } );

		delay += 0.3;

		TweenLite.to(logo_15, 0.3, { opacity: 1, delay:delay } );

		delay += 1.5;

		TweenLite.to(logo_15, 0.3, { opacity: 0, delay:delay } );	
	}

	
	TweenLite.to(tv_animation, 0.4, { opacity: 0, delay:delay } );
	TweenLite.to(legal1, 0.4, { opacity: 0, delay:delay } );

	TweenLite.to(product_animation, 0.4, { opacity: 1, delay:delay } );
	TweenLite.to(legal2, 0.4, { opacity: 1, delay:delay } );

	delay += 0.3;
	
	TweenLite.to(product, 1, { opacity: 1, delay:delay } );

	delay += 0.5;

	TweenLite.to(product_copy0, 0.3, { opacity: 1, delay:delay } );

	delay += 0.5;
	TweenLite.to(product_copy1, 0.2, { opacity: 1, delay:delay } );
}

banner.endAnimation = function() {
	TweenMax.killAll();
	TweenLite.set(product_animation, {opacity:1});
	TweenLite.set(legal1, {opacity:0});
	TweenLite.set(legal2, {opacity:1});
	TweenLite.set(tv_animation, {opacity:0});
	TweenLite.set(consideration_holder, {opacity:0});
	TweenLite.set(product, {opacity:1});
	TweenLite.set(product_copy0, {opacity:1});
	TweenLite.set(product_copy1, {opacity:1});
}

// banner.onVideoPlay = function()
// {

// }

banner.onBannerClick = function() {
	banner.endAnimation();
	Enabler.exit('Default Exit');
}

banner.onOver = function() {	
	button_cta_background.classList.remove('out');
	button_cta_background.classList.add('over');
}

banner.onOut = function() {
	button_cta_background.classList.remove('over');
	button_cta_background.classList.add('out');
}