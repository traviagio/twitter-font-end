$(document)
    .on('change', '.btn-file :file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
});


    $(document).ready( function() {
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        console.log(numFiles);
        console.log(label);
    });
});


    function countChar(val) {
        var len = val.value.length;
        if (len >= 140) {
          val.value = val.value.substring(0, 140);
        } else {
          $('#charNum').text(140 - len);
        }
      };