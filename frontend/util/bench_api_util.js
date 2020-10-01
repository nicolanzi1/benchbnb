export const fetchBenches = data => (
    $.ajax({
        url: 'api/benches',
        method: 'GET',
        data
    })
);

export const fetchBench = id => (
    $.ajax({
        url: `api/benches/${id}`,
        method: 'GET'
    })
);

export const createReview = review => (
    $.ajax({
        url: 'api/reviews',
        method: 'POST',
        data: { review }
    })
);

export const createBench = benchForm => (
    $.ajax({
        url: 'api/benches',
        method: 'POST',
        data: benchForm,
        contentType: false,
        processData: false
    })
);