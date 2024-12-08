$(document).ready(function() {
    $('#applicationForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = $(this).serialize();

        // Perform AJAX request
        $.ajax({
            url: 'submit.php', // PHP file to process the form data
            type: 'POST',
            data: formData,
            success: function(response) {
                $('#response').html(response); // Show success message in #response div
                $('#applicationForm')[0].reset(); // Reset form fields
            },
            error: function() {
                $('#response').html('There was an error submitting your form.');
            }
        });
    });
});
