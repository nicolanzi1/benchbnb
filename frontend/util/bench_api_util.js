export const fetchBenches = filter => (
    $.ajax({
        url: 'api/benches',
        method: 'GET',
        filter
    })
)