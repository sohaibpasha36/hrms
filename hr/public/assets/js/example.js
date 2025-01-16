// Old Laravel style
$.ajax({
    url: '/api/users',
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

// New Django style
$.ajax({
    url: '/api/users/',
    headers: {
        'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
    }
}); 