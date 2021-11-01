// Load the new model for ranking
import { findById, find, findByIdAndUpdate, findByIdAndRemove, create as _create } from '../models/ranks';
// CRUD operations

// get by id method
export function getById(req, res, next) {
    console.log(req.body);
    findById(req.params.rankId, function (err, rankInfo) {
        if (err) {
            next(err);
        } else {
            res.json({ status: "success", message: "Rank position found!!!", data: { ranks: rankInfo } });
        }
    });
}

// get all method
export function getAll(req, res, next) {
    let ranksList = [];
    find({}, function (err, ranks) {
        if (err) {
            next(err);
        } else {
            for (let rank of ranks) {
                ranksList.push({ id: rank._id, name: rank.name, score: rank.score, date: rank.date });
            }
            res.json({ status: "success", message: "Ranking list found!!!", data: { ranks: ranksList } });

        }
    });
}

// update by id method
export function updateById(req, res, next) {
    findByIdAndUpdate(req.params.rankId, { name: rank.name, score: rank.score, date: rank.date }, function (err, rankInfo) {
        if (err)
            next(err);
        else {
            res.json({ status: "success", message: "Rank position updated successfully!!!", data: null });
        }
    });
}

// delete by id method
export function deleteById(req, res, next) {
    findByIdAndRemove(req.params.rankId, function (err, rankInfo) {
        if (err)
            next(err);
        else {
            res.json({ status: "success", message: "Rank position deleted successfully!!!", data: null });
        }
    });
}

// create method
export function create(req, res, next) {
    _create({ name: rank.name, score: rank.score, date: rank.date }, function (err, result) {
        if (err)
            next(err);

        else
            res.json({ status: "success", message: "Ranking position added successfully!!!", data: null });

    });
}