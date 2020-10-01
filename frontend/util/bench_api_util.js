export const fetchBenches = filter => (
    $.ajax({
        url: 'api/benches',
        method: 'GET',
        filter
    })
);

export const fetchBench = id => (
    $.ajax({
        url: `api/benches/${id}`,
        method: 'GET'
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