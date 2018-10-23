/***
*
* Light weight overlay display.
*
* @author Charlie Topjian [charlietopjian@gmail.com]
* @version 1.0.0
* @Year 2018
***/

var lash = {
	version: "1.0.0"
	,ini: function(){
		this.runApp();
	}
	,runApp: function(){
		console.log("testing cookie");
		this.setCookie('testCookie',1,15);
	}
	,seenBefore: function(){
		
	}
	,setCookie: function(e, t, n) {
		//cname, cvalue, exdays
	    if (n) {
	        var r = new Date;
	        r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
	        var i = "; expires=" + r.toGMTString()
	    } else var i = "";
    	document.cookie = this.settings.preFix + e + "=" + t + i + "; path=/;";

	}
	,getCookie: function(cname){
	    var name = this.settings.preFix + cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	    }
	    return "";		
	}
};
lash.settings = {};
lash.settings.preFix = "_cg_";
lash.ini();