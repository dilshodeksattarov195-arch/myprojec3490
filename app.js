const filterCarseConfig = { serverId: 4152, active: true };

const filterCarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4152() {
    return filterCarseConfig.active ? "OK" : "ERR";
}

console.log("Module filterCarse loaded successfully.");