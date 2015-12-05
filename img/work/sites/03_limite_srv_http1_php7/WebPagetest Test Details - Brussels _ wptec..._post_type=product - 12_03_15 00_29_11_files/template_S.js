var Banner = ( function( ) 
{
    function Banner () 
    {
        this.over = '';
    }

    Banner.prototype.ready = function() 
    {
        this.banner                         = document.querySelector(".banner");
        this.banner_click                   = document.querySelectorAll(".banner_click");
        this.lang                           = document.querySelectorAll(".lang");

        for(i=0; i<this.banner_click.length;i++)
        {
            this.banner_click[i].addEventListener("click", this.onBannerClick.bind( this ) );
            this.banner_click[i].addEventListener("mouseover", this.onOver.bind( this ) );
            this.banner_click[i].addEventListener("mouseleave", this.onOut.bind( this ) );            
        }

        if(this.onReady) this.onReady();
        
        if( document.querySelector('body').classList.contains('snapshot')){
            DC.config.language = window.snapshot_language;
        }

        this.setLang( this.init.bind( this ) );
    }
    
    Banner.prototype.init = function() 
    {
        this.banner.classList.remove('hide');
        
        if( document.querySelector('body').classList.contains('snapshot')){
            return;
        }

        if(this.onInit) this.onInit();

        this.runStartAnimation();
    }
    
    /**/
    Banner.prototype.runStartAnimation = function() 
    {
        if(this.startAnimation) this.startAnimation();
    }    
    Banner.prototype.runEndAnimation = function() 
    {
        replay.classList.remove('hide');
        if(this.endAnimation) this.endAnimation();
    }
    /**/

    Banner.prototype.onBannerClick = function() 
    {
        this.exit();
    }

    Banner.prototype.exit = function() 
    {
        Enabler.exit('Default Exit');
    }


    /****************************
        Mouse Event Handlers
    *****************************/

    Banner.prototype.onOver = function(e)
    {
        if (this.over) return;
        this.over = true;
    }

    Banner.prototype.onOut = function(e)
    {
        this.over = false;
    }
    

    Banner.prototype.setLang = function( complete ) 
    {
        var t=0;
        function onload(){
            if(this.lang[t].nodeName=="DIV")
                this.lang[t].style.backgroundImage="url('"+'img/'+DC.config.language+'/'+this.lang[t].getAttribute('alt')+"')";
            t++;
            if(t==this.lang.length)if(complete)complete();
        }
        for(var i=0;i<this.lang.length;i++){
            if(this.lang[i].nodeName=="DIV"){
                var img = new Image();
                img.onload = onload.bind(this);
                img.src='img/'+DC.config.language+'/'+this.lang[i].getAttribute('alt');
            }else{
                this.lang[i].onload = onload.bind(this);
                this.lang[i].src='img/'+DC.config.language+'/'+this.lang[i].alt;
            }
        }
        if(!this.lang.length)complete();
    }
    return Banner;

})();