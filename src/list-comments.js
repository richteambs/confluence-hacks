(function() {

    function getComments(start, callback) {
        const limit = 20;
        let url = `${contextPath}/rest/api/content/${context.context.contentId}/child/comment?expand=extensions.resolution%2Cextensions.inline%2Cbody.view%2Chistory&start=${start},limit=${limit}`;
        
        jQuery.ajax({
            url: url,
            success: function(response) {
                jQuery(response.results).each(function() {
                    if (this.hasOwnProperty("extensions") &&
                        this.extensions.location === "inline" &&
                        this.extensions.resolution.status === "open") {
                        // TODO: process comment
                        callback && callback(this);
                        console.log(AJS.params.baseUrl + this._links.webui);
                    }
                });
                if ( !(response.size < response.limit) ) {
                    getComments(start + limit, callback);
                }
            }
        });
    }

    getComments(0, function(comment) {
        if (!(comment.hasOwnProperty("extensions") &&
            comment.extensions.location === "inline" &&
            comment.extensions.resolution.status === "open")) {
            return;
        }
        console.log(`Comment ${comment.id}`);
    });
    
})();