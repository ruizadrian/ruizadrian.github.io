// <script type="text/javascript">
//     function myAdDoneFunction(spotx_ad_found)  {
//         if(spotx_ad_found)  {
//             // code to track ad playing here
//         }
//         else {
//             // code to place backup ad request here
//         }
//     }
// </script>
// <script type="text/javascript" src="//js.spotx.tv/easi/v1/177926.js" data-spotx_channel_id="177926" data-spotx_ad_unit="incontent" data-spotx_ad_done_function="myAdDoneFunction" data-spotx_content_width="450" data-spotx_content_height="370" data-spotx_https="0" data-spotx_embed_element_id="div-gpt-ad-1470417934254-0"></script>



function updateParentDiv() {
	var tag_id;
	var el;
if ( window.self != window.top) {
    el = window.parent.document.getElementsByName(window.self.name) [0];
}
else {
    el = document.getElementById("HCM");
}
	while (el.parentNode) {
		el = el.parentNode;
		if (el.tagName == 'DIV') {
			tag_id = el.id;
			if( tag_id.indexOf("div-gpt-ad") >= 0){
        //alert(el.id);
        <script type="text/javascript">
            function myAdDoneFunction(spotx_ad_found)  {
                if(spotx_ad_found)  {
                    // code to track ad playing here
                }
                else {
                    // code to place backup ad request here
                }
            }
        </script>
        <script type="text/javascript" src="//js.spotx.tv/easi/v1/177926.js" data-spotx_channel_id="177926" data-spotx_ad_unit="incontent" data-spotx_ad_done_function="myAdDoneFunction" data-spotx_content_width="450" data-spotx_content_height="370" data-spotx_https="0" data-spotx_embed_element_id=el.id></script>
      }
    }
  }
}
window.onload = updateParentDiv;
