export const selectBench = ({ benches }, benchId) => {
    return benches[benchId];
};

export const asArray = ({ benches }) => (
    Object.keys(benches).map(key => benches[key])
);