// Load the new model for videogames
import { findById, find, findByIdAndUpdate, findByIdAndRemove, create as _create } from '../models/videogames';

// CRUD operations

// get by id method
export function getById(req, res, next) {
    console.log(req.body);
    findById(req.params.videogameId, function (err, videogameInfo) {
        if (err) {
            next(err);
        } else {
            res.json({ status: "success", message: "Videogame found!!!", data: { videogames: videogameInfo } });
        }
    });
}

// get all method
export function getAll(req, res, next) {
    let videogamesList = [];
    find({}, function (err, videogames) {
        if (err) {
            next(err);
        } else {
            for (let videogame of videogames) {
                videogamesList.push({ id: videogame._id, name: videogame.name, released_on: videogame.released_on });
            }
            res.json({ status: "success", message: "Videogames list found!!!", data: { videogames: videogamesList } });

        }
    });
}

// update by id method
export function updateById(req, res, next) {
    findByIdAndUpdate(req.params.videogameId, { name: req.body.name }, function (err, videogameInfo) {
        if (err)
            next(err);
        else {
            res.json({ status: "success", message: "Videogame updated successfully!!!", data: null });
        }
    });
}

// delete by id method
export function deleteById(req, res, next) {
    findByIdAndRemove(req.params.videogameId, function (err, videogameInfo) {
        if (err)
            next(err);
        else {
            res.json({ status: "success", message: "Videogame deleted successfully!!!", data: null });
        }
    });
}

// create method
export function create(req, res, next) {
    _create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
        if (err)
            next(err);

        else
            res.json({ status: "success", message: "Videogame added successfully!!!", data: null });

    });
}
