export const selectBench = ({ benches }, benchId) => {
    return benches[benchId];
};

export const selectReviewsForBench = ({ benches, review }, bench) => {
    return bench.reviewIds.map(reviewId => reviews[reviewId]);
};

export const asArray = ({ benches }) => (
    Object.keys(benches).map(key => benches[key])
);