function getDomainCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return decodeURIComponent(arr[2]);
    return null;
}


function CreateIframe(config){
    if(!config.homeUrl){
        throw new Error("需要传家园地址homeUrl")
    }
    this.homeUrl = config.homeUrl
    this.download = config.download != undefined ? config.download:true
    this.resourceUrl = "https://static4.51cto.com"
    document.domain = '51cto.com';

    CreateIframe.prototype.openIframe = function(){
        if(!document.getElementById("login_iframe_mask")){
            var div = document.createElement("div");
            div.setAttribute("id","login_iframe_mask")
            var iframeUrl = this.homeUrl + "index?iframe=1&reback=" + window.location.href;
            div.innerHTML = '<div id="login_iframe" class="login_iframe"><div class="close_icon"><img src='+this.resourceUrl+'/home/web/images/new_login/close.png /></div><iframe id="idFrame" name="idFrame" src='+iframeUrl+'  frameborder="0" scrolling="auto" ></iframe></div>';
            
            document.body.appendChild(div);
            var initHeight =  this.download ?'500px' :'450px'
            document.getElementById("login_iframe").style.height = initHeight
            document.getElementsByClassName("close_icon")[0].style.display = 'block'    
            var self = this;
            document.getElementsByClassName("close_icon")[0].addEventListener("click",function(){
                self.closeIframe()
            })
        }
    }

    CreateIframe.prototype.hideIframe = function(){
        var ele = document.getElementById("login_iframe_mask");
        ele.style.cssText="display:none";
    }

    CreateIframe.prototype.closeIframe = function(){
        var ele = document.getElementById("login_iframe_mask");
        var url =  getDomainCookie("page_url");
        //两个特定页面已经包含登录状态，关闭时需要刷新
        if(url && (url.indexOf("user/set-mobile")>0 || url.indexOf("info/wechat-bind-iframe")>0)){
            window.location.reload()
        }
        ele.parentNode.removeChild(ele);
    }

    CreateIframe.prototype.importCss = function (){
        var cssSource = document.createElement('link');
        cssSource.href = this.resourceUrl + '/home/web/css/new_login/iframe.css?v=1.0.4';
        cssSource.rel="stylesheet";
        document.getElementsByTagName('head')[0].appendChild(cssSource);
    }

    this.importCss();
}

