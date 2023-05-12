export function getTourism_stats(req, res) {
    res.send([{
        year: 2021,
        province: "Córdoba"
    }]);
}

export function findByyear(req, res) {
    res.send({
        message: 'This is the mockup controller for findByyear'
    });
}

