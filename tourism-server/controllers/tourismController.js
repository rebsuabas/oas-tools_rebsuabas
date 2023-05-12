import * as service from '../services/tourismService.js';

export function getTourism_stats(req, res) {
    service.getTourism_stats(req, res);
}

export function findByyear(req, res) {
    service.findByyear(req, res);
}

