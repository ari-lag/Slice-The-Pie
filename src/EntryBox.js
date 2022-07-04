'use strict';

$(document).ready(function(){
$("input[id='percentage']").on('input', function() {
    $(this).val(function(i, v) {
     return v.replace('%','') + '%';  });
    });
});
