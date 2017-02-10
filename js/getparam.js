getparam = function() {
			var param = {};
			var p = location.href.split('?');
			if(p.length > 1) {
				p = p[1].split('&');
				$.each(p, function(i, n) {
					p2 = n.split('=');
					param[p2[0]] = decodeURI(p2[1]) || '';
				});
			}
			return param;
	}
hisclinicid = getparam().hisclinicid;
clinicid = getparam().clinicid;
noheader = getparam().noheader;