// Like heart effect for stories
export default function(event) {
	$closestLike = $(event.target).closest('.st-count');
	if ($closestLike.data('liked-viewer')){
	    $closestLike.removeClass("liked-viewer").data('liked-viewer', false);
	    $(event.target).closest('.shadow').velocity({ fontSize: "0.7rem", left: "1.15rem", top: "0.3rem" }, {
	    duration: 300,
	    complete: 
	        function() {
	            $(event.target).closest('.shadow').velocity({ opacity: 1 });
	        }
	    });
	} else {
	    $closestLike.addClass("liked-viewer").data('liked-viewer', true);
	    $(event.target).closest('.shadow').velocity({ opacity: 0, fontSize: "2.5rem", left: "0.35rem", top: "-0.5rem" }, { duration: 500 });
	}
}
